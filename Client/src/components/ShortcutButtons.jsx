export const ShortcutButtons = ({ image, description }) => {
    return (
        <div className="md:flex flex-col gap-1 shadow-xl md:p-1">
            <div
                className="md:w-64 min-h-56 shadow-lg m-auto bg-center bg-cover "
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="text-center h-16 py-2 px-1">
                <p>{description}</p>
            </div>
        </div>
    );
};
