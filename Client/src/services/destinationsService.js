import { collection, getDocs } from "firebase/firestore";
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
