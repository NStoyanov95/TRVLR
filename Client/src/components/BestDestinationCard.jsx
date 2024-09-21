import bolata from "../assets/bolata.jpg";

export const BestDestinationCard = () => {
    return (
        <div className="md:max-w-xs h-auto bg-grey-600 text-black shadow-lg">
            <img className="w-full" src={bolata} alt="asd" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="mb-3 font-normal">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                </p>
            </div>
        </div>
    );
};
