import React from "react";

const WhyChooseSunrise = () => {
    return (
        <section className="w-full bg-white mt-9">
            <div className="  px-9">

                {/* TOP BOXES */}
                <div className="grid grid-cols-1 m-3 md:grid-cols-2 gap-8 mb-20">

                    {/* Vision */}
                    <div className="border border-gray-300 p-8">
                        <h3 className="text-lg font-semibold mb-4">VISION</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To become a trusted and leading home-comfort brand in
                            India by delivering innovative, safe, and energy-efficient
                            heating and hot water solutions that enhance everyday living.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="border border-gray-300 p-8">
                        <h3 className="text-lg font-semibold mb-4">MISSION</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To design and provide reliable room heaters and geysers
                            that combine safety, performance, and durability, while
                            maintaining affordability and long-term customer trust.
                        </p>
                    </div>

                </div>

                {/* CENTER HEADING */}
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-bold mb-20">
                    WHY CHOOSE SUNRISE ?
                </h2>


                {/* FEATURES */}
                <div className="grid grid-cols-1 m-4 mb-16 md:grid-cols-3 gap-12 text-center">

                    {/* Feature 01 */}
                    <div>
                        <div className="w-14 h-14 text-2xl mx-auto mb-4 bg-black text-white flex items-center justify-center font-semibold">
                            01
                        </div>
                        <h4 className="font-semibold mb-3 text-xl">Trusted Quality & Safety</h4>
                        <p className="text-[#2C2C2C] text-sm leading-relaxed">
                            Our products are built with high safety standards,
                            durable materials, and reliable performance you can trust
                            every day.
                        </p>
                    </div>

                    {/* Feature 02 */}
                    <div>
                        <div className="w-14 h-14 text-2xl mx-auto mb-4 bg-black text-white flex items-center justify-center font-semibold">
                            01
                        </div>
                        <h4 className="font-semibold mb-3 text-xl md:text-xl whitespace-nowrap">
                            Energy Efficient Performance
                        </h4>

                        <p className="text-[#2C2C2C] text-sm leading-relaxed">
                            Designed to deliver maximum comfort while consuming less
                            power, helping you save on electricity without compromising warmth.
                        </p>
                    </div>

                    {/* Feature 03 */}
                    <div>
                        <div className="w-14 h-14 text-2xl mx-auto mb-4 bg-black text-white flex items-center justify-center font-semibold">
                            01
                        </div>
                        <h4 className="font-semibold text-xl mb-3">Designed for Indian Homes</h4>
                        <p className="text-[#2C2C2C] text-sm leading-relaxed">
                            Engineered to suit Indian weather  conditions and daily
                            usage, ensuring long-lasting comfort and value.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
    le
};

export default WhyChooseSunrise;
