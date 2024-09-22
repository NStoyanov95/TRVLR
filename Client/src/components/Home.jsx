import caravan from "../assets/caravan.jpeg";
import banner from "../assets/banner.jpg";
import { BestDestinationCard } from "./BestDestinationCard";

export const Home = () => {
    return (
        <>
            <div
                className="bg-cover bg-center w-full h-96"
                style={{ backgroundImage: `url(${caravan})` }}
            ></div>
            <div className="md:w-4/5 h-auto m-auto p-3">
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
                <div className="relative text-gray-50">
                    <h3 className="text-center">Start Your Journey</h3>
                    <p className="p-10">
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
        </>
    );
};
