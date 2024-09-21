import { Link } from "react-router-dom";
export const Navigation = () => {
    return (
        <nav className="flex justify-between items-baseline bg-gray-200 max-w-full shadow-lg">
            <div className="p-5">
                <h3>TRVLR:</h3>
            </div>
            <ul className="flex">
                <li className="p-5 hover:font-bold cursor-pointer">
                    <Link>Home</Link>
                </li>
                <li className="p-5 hover:font-bold cursor-pointer">About Us</li>
                <li className="p-5 hover:font-bold cursor-pointer">Contacts</li>
                <li className="p-5 hover:font-bold cursor-pointer">Login</li>
                <li className="p-5 hover:font-bold cursor-pointer">Logout</li>
            </ul>
        </nav>
    );
};
