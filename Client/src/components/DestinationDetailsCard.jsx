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
            setDestination(fetchedDestination);
        };
        getDestination();
    }, [destinationId]);

    console.log(destination);

    return (
        <>
            <div className="md:w-5/6 md:mt-5 m-auto bg-white p-2 shadow-xl">
                <div>
                    <img
                        src={destination.image}
                        alt=""
                        className="h-96 w-full"
                    />
                    <div className="md:p-5">
                        <div className="mb-2">
                            <h3>{destination.city}</h3>
                            <h4 className="text-gray-500">
                                {destination.country}
                            </h4>
                        </div>
                        <div className="text-center">
                            <p className="text-left">
                                {destination.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
