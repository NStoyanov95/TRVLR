export const BestDestinationCard = ({ image, description, city, country }) => {
    return (
        <div className="md:max-w-xs h-auto  bg-grey-600 text-black shadow-black bg-gray-100">
            <img className="md:h-52 w-full" src={image} alt="asd" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {city}, {country}
                </h5>
            </div>
        </div>
    );
};
