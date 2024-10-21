import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleDestination } from "../services/destinationsService";

export const DestinationDetailsCard = () => {
    const { destinationId } = useParams();
    const [destination, setDestination] = useState({});

    useEffect(() => {
        const getDestination = async () => {
            const fetchedDestination = await fetchSingleDestination(
                destinationId
            );
        };
        getDestination();
    }, [destinationId]);

    console.log(destination);

    return (
        <>
            <h1>Details Card</h1>
        </>
    );
};
