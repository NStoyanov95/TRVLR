import caravan from "../assets/caravan.jpeg";

export const HeroWithOverlay = ({ title }) => {
    return (
        <div
            className="relative bg-cover bg-center w-full h-64 md:h-96 flex justify-center items-center text-white mb-5 md:m-0"
            style={{ backgroundImage: `url(${caravan})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            <div className="relative">
                <h1>{title}</h1>
            </div>
        </div>
    );
};
