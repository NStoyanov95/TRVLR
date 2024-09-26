export const GeneralInformationSection = () => {
    return (
        <div className="bg-white text-center md:text-left">
            <div className="md:w-4/5 h-auto m-auto md:p-10 2xl:w-1/2">
                <div>
                    <div className="py-10">
                        <h2>General Information</h2>
                        <p className="text-gray-600">Travel tips</p>
                    </div>
                    <div className="md:flex justify-center items-baseline">
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-sun text-green-400 text-4xl fa-2x"></i>
                            <h3>Weather</h3>
                            <p>
                                Stay informed with our detailed weather updates
                                to plan your activities, whether you're heading
                                to the Black Sea beaches or the mountain trails.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-dollar-sign text-green-400 fa-2x"></i>
                            <h3>Currency</h3>
                            <p>
                                Benefit from our commission-free currency
                                exchange services, ensuring you get the most out
                                of your money when converting to Bulgarian Lev
                                (BGN).
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-globe text-green-400 fa-2x"></i>
                            <h3>Language</h3>
                            <p>
                                While Bulgarian is the primary language, our
                                service includes providing English-speaking
                                guides to help you communicate and learn about
                                local culture seamlessly.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fa fa-handshake text-green-400 fa-2x"></i>
                            <h3>Local Customs</h3>
                            <p>
                                Familiarize yourself with Bulgarian traditions
                                and etiquette to enhance your interactions and
                                experiences in local communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
