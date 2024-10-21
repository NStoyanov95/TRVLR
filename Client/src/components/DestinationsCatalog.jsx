import { useEffect, useState } from "react";
import { HeroWithOverlay } from "./HeroWithOverlay";
import { fetchDestinations } from "../services/destinationsService";
import { DestinationCard } from "./DestinationCard";

export const DestinationsCatalog = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const getDestinations = async () => {
            const fetchedDestinations = await fetchDestinations();
            setDestinations(fetchedDestinations);
        };

        getDestinations();
    }, []);

    return (
        <>
            <HeroWithOverlay title={"Explore Destinations"} />
            <div className="bg-white">
                <div className="md:w-4/5 m-auto md:py-20 md:flex flex-wrap justify-center md:gap-10">
                    {destinations.map((destination) => (
                        <DestinationCard
                            key={destination.id}
                            id={destination.id}
                            image={destination.image}
                            city={destination.city}
                            country={destination.country}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};
