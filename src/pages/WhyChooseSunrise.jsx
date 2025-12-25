import React from "react";

const WhyChooseSunrise = () => {
    return (
        <section className="w-full bg-white mt-3">
            <div className="w-full px-6 lg:px-12">

                {/* TOP BOXES */}
                <div className="
          grid grid-cols-1 md:grid-cols-2 
          gap-8 md:gap-10 lg:gap-14 
          md:mt-16 lg:mt-20 
          mb-16 lg:mb-24
        ">

                    {/* Vision */}
                    <div className="border border-black p-6 sm:p-8 lg:p-10">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                            VISION
                        </h3>
                        <p className="text-black text-base font-rethink leading-relaxed max-w-md">
                            To become a trusted and leading home-comfort brand in India by
                            delivering innovative, safe, and energy-efficient heating and hot
                            water solutions that enhance everyday living.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="border border-black p-6 sm:p-8 lg:p-10">
                        <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
                            MISSION
                        </h3>
                        <p className="text-black text-base font-rethink leading-relaxed max-w-md">
                            To design and provide reliable room heaters and geysers that combine
                            safety, performance, and durability, while maintaining affordability
                            and long-term customer trust.
                        </p>
                    </div>
                </div>

                {/* CENTER HEADING */}
                <h2 className="
          text-center 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
          font-bold 
          mb-10 sm:mb-14 lg:mb-20
        ">
                    WHY CHOOSE SUNRISE ?
                </h2>

                {/* FEATURES */}
                <div className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-8 lg:gap-12  
          px-4 sm:px-8 lg:px-4
          mb-16 md:mb-8 
          text-center
        ">

                    {/* Feature 01 */}
                    <div>
                        <div className="
              w-12 h-12 sm:w-14 sm:h-14 
              text-xl sm:text-2xl 
              font-rethink mx-auto mb-4 
              bg-black text-white 
              flex items-center justify-center font-semibold
            ">
                            01
                        </div>

                        <h4 className="font-semibold mb-3 font-rethink text-xl sm:text-2xl">
                            Trusted Quality & Safety
                        </h4>

                        <p className="text-[#2C2C2C] text-base font-rethink leading-relaxed">
                            Our products are built with high safety standards, durable materials,
                            and reliable performance you can trust every day.
                        </p>
                    </div>

                    {/* Feature 02 */}
                    <div>
                        <div className="
              w-12 h-12 sm:w-14 sm:h-14 
              text-xl sm:text-2xl 
              font-rethink mx-auto mb-4 
              bg-black text-white 
              flex items-center justify-center font-semibold
            ">
                            02
                        </div>

                        <h4 className="font-semibold mb-3 font-rethink text-xl sm:text-2xl">
                            Energy Efficient Performance
                        </h4>

                        <p className="text-[#2C2C2C] text-base font-rethink leading-relaxed">
                            Designed to deliver maximum comfort while consuming less power,
                            helping you save on electricity without compromising warmth.
                        </p>
                    </div>

                    {/* Feature 03 */}
                    <div>
                        <div className="
              w-12 h-12 sm:w-14 sm:h-14 
              text-xl sm:text-2xl 
              font-rethink mx-auto mb-4 
              bg-black text-white 
              flex items-center justify-center font-semibold
            ">
                            03
                        </div>

                        <h4 className="font-semibold mb-3 font-rethink text-xl sm:text-2xl">
                            Designed for Indian Homes
                        </h4>

                        <p className="text-[#2C2C2C] text-base font-rethink leading-relaxed">
                            Engineered to suit Indian weather conditions and daily usage,
                            ensuring long-lasting comfort and value.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseSunrise;
