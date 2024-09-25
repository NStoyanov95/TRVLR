import { useEffect, useState } from "react";
import { fetchLast3Destinations } from "../services/destinationsService";
import { BestDestinationCard } from "./BestDestinationCard";

export const BestDestinationsSection = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const getDestinations = async () => {
            const fetchedDestinations = await fetchLast3Destinations();
            setDestinations(fetchedDestinations);
        };

        getDestinations();
    }, []);

    return (
        <div className="md:w-4/5 h-auto m-auto md:p-10 2xl:w-1/2 text-center md:text-left">
            <div className="my-10">
                <h2>Best Place to visit</h2>
                <p className="text-gray-600">
                    An overview of the top attractions
                </p>
            </div>
            <div className="md:flex grid-flow-row md:gap-2 lg:gap-9 md:justify-center">
                {destinations.map((destination) => (
                    <BestDestinationCard
                        key={destination.id}
                        image={destination.image}
                        city={destination.city}
                        country={destination.country}
                        description={destination.description}
                    />
                ))}
            </div>
        </div>
    );
};
