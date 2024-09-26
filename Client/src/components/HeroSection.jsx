import rilaLakes from "../assets/rilaLakes.jpg";

export const HeroSection = () => {
    return (
        <div
            className="relative bg-cover bg-center w-full h-64 md:h-96 lg:h-screen flex justify-center items-center"
            style={{ backgroundImage: `url(${rilaLakes})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-b bg-black opacity-40"></div>

            <div className="relative text-center p-4 ">
                <h2 className=" relative text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-wide animate-fade-in">
                    Discover Bulgaria:
                    <br /> A Journey to the Heart of History and Nature
                </h2>

                <p className=" relative mt-4 text-gray-200 text-lg md:text-xl lg:text-2xl opacity-90 animate-slide-up">
                    Start your exploration now. Dive into Bulgaria's vibrant
                    culture, ancient ruins, and scenic wonders.
                </p>
            </div>
        </div>
    );
};
