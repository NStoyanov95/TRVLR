import caravan from "../assets/caravan.jpeg";

export const HeroSection = () => {
    return (
        <div
            className="relative bg-cover bg-center w-full h-64 md:h-96 lg:h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${caravan})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>

            <div className="relative text-center px-4">
                <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide animate-fade-in">
                    Journey Beyond the Ordinary:
                    <br /> Discover Destinations That Inspire
                </h2>

                <p className="mt-4 text-gray-200 text-lg md:text-xl lg:text-2xl opacity-90 animate-slide-up">
                    Your adventure begins here. Explore now.
                </p>
            </div>
        </div>
    );
};
