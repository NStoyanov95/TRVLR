/* eslint-disable react/prop-types */
export const ShortcutButtons = ({ image }) => {
    return (
        <div
            className="md:w-64 h-56 shadow-lg m-auto bg-center bg-cover "
            style={{ backgroundImage: `url(${image})` }}
        ></div>
    );
};
