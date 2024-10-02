export const ShortcutButtons = ({ image, description }) => {
    return (
        <div className="md:flex flex-col gap-1 shadow-xl md:p-1">
            <div
                className="md:w-64 h-56 shadow-lg m-auto bg-center bg-cover "
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="text-center py-3">
                <p>{description}</p>
            </div>
        </div>
    );
};
