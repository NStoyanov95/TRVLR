import { HeroSection } from "./HeroSection";

import { GeneralInformationSection } from "./GeneralInformationSection";
import { BestDestinationsSection } from "./BestDestinationsSection";
import { ServicesSection } from "./ServicesSection";

export const Home = () => {
    return (
        <>
            <HeroSection />
            <GeneralInformationSection />
            <BestDestinationsSection />
            <ServicesSection />
            <div className="md:w-4/5 m-auto my-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-center">Our Mission</h3>
                <p className="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi atque aliquid aspernatur, natus aut alias nostrum.
                    Eum, veritatis dolore corrupti repellat illum ab, tempora id
                    totam, ipsam magnam delectus nostrum. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Veritatis alias pariatur
                    tempore dolor consectetur? Velit, accusantium harum non
                    facilis inventore necessitatibus natus molestiae ipsam
                    consectetur? Rerum sunt provident soluta laborum!
                </p>
            </div>
            <div className="md:w-4/5 m-auto my-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-center">Why Us?</h3>
                <p className="text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sequi atque aliquid aspernatur, natus aut alias nostrum.
                    Eum, veritatis dolore corrupti repellat illum ab, tempora id
                    totam, ipsam magnam delectus nostrum. Lorem ipsum dolor sit,
                    amet consectetur adipisicing elit. Veritatis alias pariatur
                    tempore dolor consectetur? Velit, accusantium harum non
                    facilis inventore necessitatibus natus molestiae ipsam
                    consectetur? Rerum sunt provident soluta laborum!
                </p>
            </div>
        </>
    );
};
