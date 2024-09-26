export const DestinationCard = ({ image, country, city }) => {
    return (
        <div className="flex flex-col md:items-center shadow-md text-center">
            <img src={image} alt="" className="h-72 md:w-80 md:h-96" />
            <div className="md:py-3">
                <h5 className="text-gray-500">{country}</h5>
                <h3>{city}</h3>
            </div>
        </div>
    );
};
