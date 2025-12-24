import React from "react";

const WhyChooseSunrise = () => {
    return (
        <section className="w-full bg-white mt-3  ">
            <div className="  px-9">

                {/* TOP BOXES */}
                <div className="grid grid-cols-1 md:m-24  md:grid-cols-2  gap-8 mb-20">
                    <div className="border border-[#000000] p-10">
                        <h3 className="text-3xl font-semibold mb-7">VISION</h3>
                        <p className="text-[#000000] text-base font-rethink leading-relaxed">
                            To become a trusted and leading home-comfort brand in <br /> India by delivering innovative, safe, and energy-efficient <br /> heating and hot water solutions that enhance everyday <br /> living.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="border border-[#000000]  p-10">
                        <h3 className="text-3xl font-semibold mb-7">MISSION</h3>
                        <p className="text-[#000000] text-base font-rethink leading-relaxed">
                            To design and provide reliable room heaters and <br /> geysers
                            that combine safety, performance, and <br /> durability, while
                            maintaining affordability and long- <br />term customer trust.
                        </p>
                    </div>

                </div>

                {/* CENTER HEADING */}
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mb-20">
                    WHY CHOOSE SUNRISE ?
                </h2>


                {/* FEATURES */}
                <div className="grid grid-cols-1 m-4 mb-16 md:m-20 md:mb-8 md:grid-cols-3 gap-12 text-center">

                    {/* Feature 01 */}
                    <div>
                        <div className="w-14 h-14 text-2xl font-rethink mx-auto mb-4 bg-black text-white flex items-center justify-center font-semibold">
                            01
                        </div>
                        <h4 className="font-semibold mb-3 font-rethink text-2xl">Trusted Quality & Safety</h4>
                        <p className="text-[#2C2C2C]  text-base font-rethink leading-relaxed">
                            Our products are built with high safety <br /> standards,
                            durable materials, and reliable <br /> performance you can trust
                            every day.
                        </p>
                    </div>

                    {/* Feature 02 */}
                    <div>
                        <div className="w-14 h-14 text-2xl font-rethink mx-auto mb-4 bg-black text-white flex items-center justify-center font-semibold">
                            02
                        </div>
                        <h4 className="font-semibold mb-3 font-rethink text-xl md:text-2xl whitespace-nowrap">
                            Energy Efficient Performance
                        </h4>

                        <p className="text-[#2C2C2C] text-base font-rethink leading-relaxed">
                            Designed to deliver maximum comfort while  <br /> consuming less
                            power, helping you save on <br /> electricity without compromising warmth.
                        </p>
                    </div>

                    {/* Feature 03 */}
                    <div>
                        <div className="w-14 h-14 text-2xl font-rethink mx-auto mb-4 bg-black text-white flex items-center justify-center font-semibold">
                            03
                        </div>
                        <h4 className="font-semibold text-2xl font-rethink mb-3">Designed for Indian Homes</h4>
                        <p className="text-[#2C2C2C] text-base font-rethink leading-relaxed">
                            Engineered to suit Indian weather <br /> conditions and daily
                            usage, ensuring long- <br />lasting comfort and value.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
    le
};

export default WhyChooseSunrise;
