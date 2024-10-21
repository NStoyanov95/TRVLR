import { Link } from "react-router-dom";

export const DestinationCard = ({ id, image, country, city }) => {
    return (
        <Link to={`/destinations/${id}`}>
            <div className="md:p-2 shadow-xl bg-gray-50">
                <div className="flex flex-col md:items-center text-center">
                    <img src={image} alt="" className="h-72 md:w-80 md:h-96" />
                    <div className="md:py-3">
                        <h5 className="text-gray-500">{country}</h5>
                        <h3>{city}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};
