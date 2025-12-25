import React from "react";
import img4 from "../../public/img4.jpg";
import img5 from "../../public/img5.jpg";
import group from "../../public/group.png";
import WhyChooseSunrise from "./WhyChooseSunrise";
import WinterCTA from "./WinterCTA";

const About = () => {
    return (
        <>
            <section className="w-full bg-[#D9D9D933] py-10 sm:py-14 md:py-20 lg:py-24">
                <div className="w-full px-6 lg:px-12 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-10 items-center">

                    <div className="text-center  lg:text-left">
                        <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-7xl font-semibold text-black leading-tight">
                            DESIGNED <br />
                            <span className="whitespace-nowrap">FOR EVERYDAY</span> <br />
                            COMFORT
                        </h1>

                        <p className="mt-5 text-gray-600 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0">
                            Reliable heating and hot water solutions crafted for modern Indian homes.
                        </p>

                        <button className="mt-6 sm:mt-8 bg-black text-white w-full sm:w-2/3 lg:w-[60%] py-3 hover:bg-gray-800 transition text-sm sm:text-base md:text-lg">
                            Learn More
                        </button>
                    </div>

                    {/* RIGHT IMAGE GRID */}
                    <div className="grid grid-cols-2  gap-4 sm:gap-6">

                        {/* Top Left */}
                        <div className="rounded-xl sm:rounded-2xl overflow-hidden h-28 sm:h-36 md:h-44 lg:mt-2 lg:h-52 mt-4 sm:mt-0">
                            <img
                                src={img4}
                                alt="Interior"
                                className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
                            />
                        </div>


                        {/* Right Tall Image */}
                        <div className="row-span-2 rounded-xl sm:rounded-2xl overflow-hidden mt-4 sm:mt-0">
                            <img
                                src={group}
                                alt="Water Heater"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom Left */}
                        <div className="rounded-xl sm:rounded-2xl overflow-hidden h-28 sm:h-36 md:h-44 lg:h-52 mt-4 sm:mt-0">
                            <img
                                src={img5}
                                alt="Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>
            </section>

            <WhyChooseSunrise />
            <WinterCTA />
        </>
    );
};

export default About;
