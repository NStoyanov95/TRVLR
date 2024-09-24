import caravan from "../assets/caravan.jpeg";
import banner from "../assets/banner.jpg";
import hotel from "../assets/hotel.jpg";
import cruise from "../assets/cruise.jpg";
import camping from "../assets/camping.jpeg";
import beach from "../assets/beach.jpg";

import { BestDestinationCard } from "./BestDestinationCard";
import { ShortcutButtons } from "./ShortcutButtons";
44;

const shortcutButtonsImages = [
    { id: 1, image: hotel },
    { id: 2, image: cruise },
    { id: 3, image: camping },
    { id: 4, image: beach },
];

export const Home = () => {
    return (
        <>
            <div
                className="bg-cover bg-center w-full h-64 md:h-96"
                style={{ backgroundImage: `url(${caravan})` }}
            ></div>
            <div className="md:w-4/5 h-auto m-auto py-4 ">
                <div className="md:flex grid-flow-row md:gap-2 md:-mt-10 lg:gap-9 justify-center">
                    <BestDestinationCard />
                    <BestDestinationCard />
                    <BestDestinationCard />
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

            <div className="md:flex md:w-4/5 m-auto 2xl:w-1/2 bg-white md:p-2 rounded">
                {shortcutButtonsImages.map((image) => (
                    <ShortcutButtons key={image.id} image={image.image} />
                ))}
            </div>
            <div className="md:w-4/5 m-auto my-6 bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-center">Our Mission</h3>
                <p>
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
                <p>
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
