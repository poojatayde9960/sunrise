import React from "react";
import img3 from "../../public/img3.png"
import img4 from "../../public/img4.jpg"
import img5 from "../../public/img5.jpg"
const HeroSection = () => {
    return (
        <section className="w-full bg-white py-44">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight">
                        DESIGNED <br />
                        FOR EVERYDAY <br />
                        COMFORT
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-md">
                        Reliable heating and hot water solutions crafted for modern Indian homes.
                    </p>

                    <button className="mt-8 bg-black text-white w-[65%] p-2 hover:bg-gray-800 transition text-lg md:text-xl">
                        Learn More
                    </button>
                </div>

                {/* RIGHT IMAGE GRID */}
                <div className="grid grid-cols-2 gap-6">

                    {/* Top Left */}
                    <div className="rounded-2xl  overflow-hidden w-[98%] max-sm:w-11/12 h-48 max-sm:h-32 mx-auto">
                        <img
                            src={img5}
                            alt="Interior"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>


                    {/* Right Tall Image */}
                    <div className="row-span-2 rounded-2xl overflow-hidden">
                        <img
                            src={img4}
                            alt="Water Heater"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Bottom Left */}
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={img3}
                            alt="Vent"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
