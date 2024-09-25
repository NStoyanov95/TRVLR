import bolata from "../assets/bolata.jpg";

export const BestDestinationCard = ({ image, description, city, country }) => {
    return (
        <div className="md:max-w-xs h-auto  bg-grey-600 text-black shadow-lg shadow-black bg-gray-100 md:rounded-b-lg">
            <img className="w-full" src={image} alt="asd" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {city}, {country}
                </h5>
                <p className="mb-3 font-normal">{description}</p>
            </div>
        </div>
    );
};
