import banner from "../assets/banner.jpg";
import hotel from "../assets/hotel.jpg";
import cruise from "../assets/cruise.jpg";
import camping from "../assets/camping.jpeg";
import plane from "../assets/plane.jpg";

import { ShortcutButtons } from "./ShortcutButtons";

const shortcutButtonsImages = [
    { id: 1, image: hotel },
    { id: 2, image: cruise },
    { id: 3, image: camping },
    { id: 4, image: plane },
];

export const ServicesSection = () => {
    return (
        <>
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
                    <div className="m-auto py-10">
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
        </>
    );
};
