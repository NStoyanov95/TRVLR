import varna from "../assets/varna.webp";
import plovdiv from "../assets/plovdiv.webp";
import monastery from "../assets/monastery.webp";
import coastalTown from "../assets/coastalTown.webp";
import rilaLakes from "../assets/rilaLakes.jpg";

import { ShortcutButtons } from "./ShortcutButtons";

const shortcutButtonsImages = [
    { id: 1, image: plovdiv, description: "Discover Bulgaria City Pass" },
    { id: 2, image: monastery, description: "Bulgaria Monastery Tours" },
    {
        id: 3,
        image: coastalTown,
        description: "Historical Coastal Towns Exploration",
    },
    { id: 4, image: rilaLakes, description: "National Parks Adventure Series" },
];

export const ServicesSection = () => {
    return (
        <>
            <div
                className=" relative bg-center bg-cover w-full h-auto p-16 text-center md:text-left"
                style={{ backgroundImage: `url(${varna})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative text-gray-50 md:w-4/5 m-auto md:p-6">
                    <h3 className="text-center">Start Your Journey</h3>
                    <p>
                        At TRVLR, we're committed to delivering exceptional
                        service to every client. Explore our array of premier
                        services designed to make every moment of your journey
                        unforgettable. Whether you need personalized tour
                        guidance, seamless travel arrangements, or expert local
                        recommendations, we're here to ensure your experience is
                        nothing short of perfect.
                    </p>
                </div>
            </div>
            <div className="bg-white md:p-6 text-center md:text-left">
                <div className="2xl:w-1/2 m-auto md:w-4/5">
                    <div className="m-auto py-10">
                        <h2>Our Services</h2>
                        <p className="text-gray-600">
                            We take care of our clients and provide only
                            high-quality services
                        </p>
                    </div>
                    <div className="xl:flex m-auto justify-between">
                        {shortcutButtonsImages.map((image) => (
                            <ShortcutButtons
                                key={image.id}
                                image={image.image}
                                description={image.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
