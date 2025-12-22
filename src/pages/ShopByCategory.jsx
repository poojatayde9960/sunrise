import React from "react";

const products = [
    {
        title: "Room Heaters",
        img: "../../public/1 (4).png",
    },
    {
        title: "Smart Geysers",
        img: "../../public/1 (2).png",
    },
    {
        title: "Storage Geysers",
        img: "../../public/1 (1).png",
    },
];

const ShopByCategory = () => {
    return (
        <div className="w-full min-h-screen bg-white px-4 sm:px-6 md:px-16 py-8">

            {/* SHOP BY CATEGORY */}
            <section className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
                    SHOP BY CATEGORY
                </h2>

                <p className="text-gray-500 text-sm font-medium sm:text-base max-w-2xl mx-auto">
                    Explore our range of reliable heating and hot water solutions designed
                    for every home.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 p-2 flex flex-col items-center justify-center rounded-lg hover:shadow-lg transition"
                        >
                            <h3 className="text-base sm:text-lg font-semibold">
                                {product.title}
                            </h3>

                            <img
                                src={product.img}
                                alt={product.title}
                                className="h-40 sm:h-52 md:h-60 object-contain w-auto"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ABOUT US */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-10xl mx-auto">

                <div>
                    <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6">
                        BETWEEN <br /> INNOVATION & <br /> TRUST
                    </h2>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative bg-gray-200 w-[140px] sm:w-[160px] md:w-[180px] 
                                    h-[160px] sm:h-[180px] md:h-[200px] 
                                    rounded-sm overflow-visible">

                        <img
                            src="/1 (5).png"
                            alt="Smart Geyser"
                            className="absolute -left-12 sm:-left-14 md:-left-16 
                                       bottom-0 h-48 sm:h-56 md:h-64 w-auto"
                        />
                    </div>
                </div>

            </section>

            {/* LOWER SECTION */}
            <div className="max-w-10xl -mt-8 md:-mt-14 mx-auto 
                            grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* Left Column */}
                <div className="flex flex-col items-start mb-10 md:mb-32 space-y-8">
                    <p className="text-gray-600 font-medium leading-relaxed text-base sm:text-lg">
                        Lakshmipur Enterprise creates reliable heating and hot water solutions
                        designed for everyday Indian living. With a focus on safety, durability,
                        and efficiency, our products are built to deliver comfort that lasts
                        season after season.
                    </p>

                    <button className="border border-gray-400 rounded-full px-8 py-2 text-sm 
                                       font-semibold tracking-wide uppercase 
                                       hover:bg-black hover:text-white transition-colors duration-300">
                        Know Our Story ›
                    </button>
                </div>

                {/* Middle Column */}
                <div className="flex justify-center relative z-0">

                    <div className="absolute bg-gray-200 
                                    w-[260px] sm:w-[320px] md:w-[390px] 
                                    h-[280px] sm:h-[340px] md:h-[400px] 
                                    translate-x-4 sm:translate-x-6 
                                    translate-y-4 sm:translate-y-6 z-0">
                    </div>

                    <img
                        src="./1 (3).png"
                        alt="Water Heater"
                        className="relative z-10 w-full max-w-[180px] sm:max-w-xs 
                                   ml-6 sm:ml-10 -rotate-12"
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col mt-10 md:mt-44 space-y-4">
                    <h3 className="text-gray-600 font-bold text-xs sm:text-sm uppercase tracking-tighter">
                        ISO 9001:2015 Certified Company
                    </h3>

                    <p className="text-black p-1  font-medium leading-relaxed text-sm sm:text-base">
                        We design safe, efficient heating and water storage systems. Indian homes,
                        shoppes, and more call us.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ShopByCategory;
