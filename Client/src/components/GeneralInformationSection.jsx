export const GeneralInformationSection = () => {
    return (
        <div className="bg-white">
            <div className="md:w-4/5 h-auto m-auto md:p-10 2xl:w-1/2">
                <div>
                    <div className="py-10">
                        <h2>General Information</h2>
                        <p className="text-gray-600">Travel tips</p>
                    </div>
                    <div className="md:flex justify-center items-baseline">
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-sun text-orange-400 text-4xl fa-2x"></i>
                            <h3>Weather</h3>
                            <p>
                                We check the forecasts to help you make informed
                                decisions about long-term trips.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-dollar-sign text-orange-400 fa-2x"></i>
                            <h3>Currency</h3>
                            <p>
                                We help you exchange your money for the Euro
                                without any commissions.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-globe text-orange-400 fa-2x"></i>
                            <h3>Language</h3>
                            <p>
                                If you don`t speak French, we can suggest you a
                                personal English speaking guide.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-2">
                            <i className="fas fa-credit-card text-orange-400 fa-2x"></i>
                            <h3>Visa</h3>
                            <p>
                                Getting help to apply for a visa is simple, we
                                provide free consultations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
