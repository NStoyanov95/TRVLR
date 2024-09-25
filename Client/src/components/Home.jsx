import banner from "../assets/banner.jpg";
import hotel from "../assets/hotel.jpg";
import cruise from "../assets/cruise.jpg";
import camping from "../assets/camping.jpeg";
import beach from "../assets/beach.jpg";

import { BestDestinationCard } from "./BestDestinationCard";
import { ShortcutButtons } from "./ShortcutButtons";
import { HeroSection } from "./HeroSection";
import { useEffect, useState } from "react";
import { fetchLast3Destinations } from "../services/destinationsService";

const shortcutButtonsImages = [
    { id: 1, image: hotel },
    { id: 2, image: cruise },
    { id: 3, image: camping },
    { id: 4, image: beach },
];

export const Home = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        const getDestinations = async () => {
            const fetchedDestinations = await fetchLast3Destinations();
            setDestinations(fetchedDestinations);
        };

        getDestinations();
    }, []);
    console.log(destinations);

    return (
        <>
            <HeroSection />
            <div className="bg-white">
                <div className="md:w-4/5 h-auto m-auto md:p-10 2xl:w-1/2">
                    <div>
                        <div className="md:my-10">
                            <h2>General Information</h2>
                            <p className="text-gray-600">Travel tips</p>
                        </div>
                        <div className="md:flex justify-center items-baseline">
                            <div className="flex flex-col gap-3 p-2">
                                <i className="fas fa-sun text-orange-400 text-4xl fa-2x"></i>
                                <h3>Weather</h3>
                                <p>
                                    We check the forecasts to help you make
                                    informed decisions about long-term trips.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 p-2">
                                <i className="fas fa-dollar-sign text-orange-400 fa-2x"></i>
                                <h3>Currency</h3>
                                <p>
                                    We help you exchange your money for the Euro
                                    without any commissions.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 p-2">
                                <i className="fas fa-globe text-orange-400 fa-2x"></i>
                                <h3>Language</h3>
                                <p>
                                    If you don`t speak French, we can suggest
                                    you a personal English speaking guide.
                                </p>
                            </div>
                            <div className="flex flex-col gap-3 p-2">
                                <i className="fas fa-credit-card text-orange-400 fa-2x"></i>
                                <h3>Visa</h3>
                                <p>
                                    Getting help to apply for a visa is simple,
                                    we provide free consultations.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-4/5 h-auto m-auto md:p-10 2xl:w-1/2">
                <div className="my-10">
                    <h2>Best Place to visit</h2>
                    <p className="text-gray-600">
                        An overview of the top attractions
                    </p>
                </div>
                <div className="md:flex grid-flow-row md:gap-2 lg:gap-9 md:justify-center">
                    {destinations.map((destination) => (
                        <BestDestinationCard
                            key={destination.id}
                            image={destination.image}
                            city={destination.city}
                            country={destination.country}
                            description={destination.description}
                        />
                    ))}
                </div>
            </div>
            <div
                className=" relative bg-center bg-cover w-full h-auto p-16"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                <div className="relative text-gray-50 md:w-4/5 m-auto md:p-6">
                    <h3 className="text-center">Start Your Journey</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias possimus, ducimus maiores sed nisi a quibusdam
                        voluptas. Earum sequi ipsam sit ratione aliquid,
                        accusantium necessitatibus. Et possimus excepturi
                        tempora veritatis. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Dolor, commodi aliquid
                        quos incidunt aperiam debitis harum iusto rem eveniet
                        provident perspiciatis exercitationem nisi alias eaque
                        magnam odit officiis id consequatur.
                    </p>
                </div>
            </div>
            <div className="bg-white md:p-6 ">
                <div className="2xl:w-1/2 m-auto md:w-4/5">
                    <div className="m-auto my-10">
                        <h2>Our Services</h2>
                        <p className="text-gray-600">
                            We take care of our clients and provide only
                            high-quality services
                        </p>
                    </div>
                    <div className="md:flex m-auto">
                        {shortcutButtonsImages.map((image) => (
                            <ShortcutButtons
                                key={image.id}
                                image={image.image}
                            />
                        ))}
                    </div>
                </div>
            </div>
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
