import {
    collection,
    doc,
    getDoc,
    getDocs,
    limit,
    orderBy,
    query,
} from "firebase/firestore";
import { db } from "../firebase";

export const fetchDestinations = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "destinations"));
        const destinations = [];
        querySnapshot.forEach((doc) => {
            destinations.push({ id: doc.id, ...doc.data() });
        });
        return destinations;
    } catch (error) {
        console.error("Error fetching destinations:", error);
        return [];
    }
};

export const fetchSingleDestination = async (destinationId) => {
    try {
        const docRef = doc(db, "destinations", destinationId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log(docSnap.data());
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            console.log("No such document!");

            return null;
        }
    } catch (error) {
        console.error("Error fetching destination:", error);
        return null;
    }
};

export const fetchLast3Destinations = async () => {
    try {
        const q = query(
            collection(db, "destinations"),
            orderBy("Date", "desc"),
            limit(3)
        );
        const querySnapshot = await getDocs(q);
        const destinations = [];
        querySnapshot.forEach((doc) => {
            destinations.push({ id: doc.id, ...doc.data() });
        });

        return destinations;
    } catch (error) {
        console.log(error);
        return [];
    }
};
