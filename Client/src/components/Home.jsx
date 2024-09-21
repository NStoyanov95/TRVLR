import caravan from "../assets/caravan.jpeg";
import { BestDestinationCard } from "./BestDestinationCard";

export const Home = () => {
    return (
        <>
            <div
                className="bg-cover bg-center w-full h-96"
                style={{ backgroundImage: `url(${caravan})` }}
            ></div>
            <div className="md:w-4/5 h-auto m-auto p-3">
                <h3 className="text-center">Best Destinations</h3>
                <div className="md:flex grid-flow-row md:gap-2 lg:gap-9 justify-center">
                    <BestDestinationCard />
                    <BestDestinationCard />
                    <BestDestinationCard />
                </div>
            </div>
        </>
    );
};
