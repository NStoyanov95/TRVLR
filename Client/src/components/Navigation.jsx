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
                <Link to="/">
                    <h3>TRVLR:</h3>
                </Link>
            </div>

            <button
                className="md:hidden bg-black relative"
                onClick={toggleMenu}
            >
                Menu
            </button>

            <ul
                className={`md:hidden absolute flex flex-col gap-9 items-center justify-start right-0 top-16 mt-2 w-5/6 h-3/6 bg-black opacity-95 text-white shadow-lg rounded-s p-6 z-50 ${
                    isOpen ? "block" : "hidden"
                } ${isOpen ? "menu-enter" : ""} space-y-2 mt-3`}
            >
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
                        to="/contacts"
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
                    <Link to="/about">About</Link>
                </li>
                <li className="p-5 hover:font-bold cursor-pointer">
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li className="p-5 hover:font-bold cursor-pointer">
                    <Link to="/destinations">Destinations</Link>
                </li>
            </ul>
        </nav>
    );
};
