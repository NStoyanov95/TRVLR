/* eslint-disable react/prop-types */
export const ShortcutButtons = ({ image }) => {
    return (
        <div
            className="md:w-52  h-40 shadow-lg p-6 bg-center bg-cover rounded"
            style={{ backgroundImage: `url(${image})` }}
        ></div>
    );
};
