import { useState } from "react";
import { Link } from "react-router-dom";
export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-between items-baseline bg-gray-200 w-full shadow-lg">
            <div className="p-5">
                <h3>TRVLR:</h3>
            </div>

            <button
                className="md:hidden bg-black relative"
                onClick={toggleMenu}
            >
                Menu
            </button>

            <ul
                className={`md:hidden absolute flex flex-col gap-2 items-center right-0 top-16 mt-2 min-w-full bg-black text-white opacity-90 shadow-lg rounded-s p-2 z-50 ${
                    isOpen ? "block" : "hidden"
                } space-y-2 mt-3`}
            >
                <li>
                    <Link
                        to="/"
                        className="hover:font-bold cursor-pointer block"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/about"
                        className="hover:font-bold cursor-pointer block"
                    >
                        About Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="/contact"
                        className="hover:font-bold cursor-pointer block"
                    >
                        Contacts
                    </Link>
                </li>
                <li>
                    <Link
                        to="/destinations"
                        className="hover:font-bold cursor-pointer block"
                    >
                        Destinations
                    </Link>
                </li>
            </ul>

            <ul className="hidden md:flex">
                <li className="p-5 hover:font-bold cursor-pointer">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-5 hover:font-bold cursor-pointer">About Us</li>
                <li className="p-5 hover:font-bold cursor-pointer">Contacts</li>
                <li className="p-5 hover:font-bold cursor-pointer">
                    <Link to="/destinations">Destinations</Link>
                </li>
            </ul>
        </nav>
    );
};
