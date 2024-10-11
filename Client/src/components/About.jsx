import { HeroWithOverlay } from "./HeroWithOverlay";
import varna from "../assets/varna.webp";

export const About = () => {
    return (
        <>
            <HeroWithOverlay title={"About Us"} />
            <div className="bg-white">
                <div className="md:w-4/5 m-auto md:flex p-5">
                    <div className="flex flex-col flex-1">
                        <h3>Nice to meet you</h3>
                        <p className="italic text-gray-600">
                            Welcome to TRVLR, your gateway to the undiscovered
                            and captivating beauties of Bulgaria. Our website is
                            designed to introduce you to some of the most
                            picturesque and inspiring places in the country,
                            from hidden beaches along the Black Sea coast to the
                            wild peaks of Rila and Pirin. Our mission is to help
                            you discover Bulgaria's rich history, cultural
                            heritage, and natural wonders. We offer meticulously
                            crafted routes, information on local attractions,
                            and travel tips that will make your adventure
                            unforgettable. Whether you seek tranquility in
                            nature or adventure in ancient cities, Explore
                            Bulgaria is here to guide you to the true treasures
                            of Bulgaria. Join us and unfold the beauty of
                            Bulgaria with every step you take!
                        </p>
                    </div>
                    <div
                        className=" relative bg-center bg-cover w-full h-auto p-16 text-center md:text-left flex-1"
                        style={{ backgroundImage: `url(${varna})` }}
                    ></div>
                </div>
            </div>
            <div className="md:w-4/5 m-auto p-5">
                <h3>Future Plans and Goals</h3>
                <div>
                    <h5 className="mb-5">
                        As we continue to grow and evolve, Explore Bulgaria is
                        committed to expanding our offerings and enhancing our
                        platform to meet the ever-changing needs of modern
                        travelers. Our roadmap includes:
                    </h5>
                    <ul className="flex flex-col gap-2">
                        <li className="italic">
                            <strong>Expanding Regional Coverage:</strong> We
                            plan to include more hidden gems and lesser-known
                            destinations across Bulgaria, providing even more
                            comprehensive travel information and local insights.
                            This will help travelers discover every corner of
                            Bulgaria, from the smallest villages to the grandest
                            landmarks
                        </li>
                        <li className="italic">
                            <strong>Technological Enhancements:</strong>
                            Investing in new technologies to improve app
                            functionality, including augmented reality features
                            that allow travelers to see historical sites and
                            natural landscapes as they once were, enriching the
                            travel experience with a blend of past and present.
                        </li>
                        <li className="italic">
                            <strong>Community Engagement:</strong>Developing a
                            community platform within the app where travelers
                            can share their experiences and tips. This feature
                            will foster a community of Bulgaria enthusiasts who
                            help each other uncover the country’s most
                            captivating experiences.
                        </li>
                        <li className="italic">
                            <strong>Sustainability Initiatives:</strong>
                            Launching initiatives to promote eco-friendly travel
                            options that contribute to the conservation of
                            Bulgaria’s natural environments and support local
                            economies. We aim to partner with local businesses
                            to ensure that tourism has a positive impact on the
                            community.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};
