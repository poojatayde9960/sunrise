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
                            className="bg-gray-100 p-2 flex flex-col items-center justify-center rounded-lg  transition"
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
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-10xl mx-auto px-4 sm:px-6 lg:px-0">

                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        BETWEEN <br /> INNOVATION & <br /> TRUST
                    </h2>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative w-40 sm:w-44 md:w-52 lg:w-60 h-40 sm:h-44 md:h-52 lg:h-64 rounded-sm overflow-visible">
                        <img
                            src="/Group 550.png"
                            alt="Smart Geyser"
                            className="absolute left-0 sm:left-[-10px] md:left-[-20px] lg:left-[-32px] bottom-0 h-36 sm:h-44 md:h-52 lg:h-64 w-auto object-contain"
                        />
                    </div>
                </div>

            </section>

            {/* LOWER SECTION */}
            <div className="max-w-10xl mx-auto mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-4 sm:px-6 lg:px-0">

                {/* Left Column */}
                <div className="flex flex-col items-start space-y-6">
                    <p className="text-gray-600 font-medium leading-relaxed text-base sm:text-lg md:text-xl">
                        Lakshmipur Enterprise creates reliable heating and hot water solutions
                        designed for everyday Indian living. With a focus on safety, durability,
                        and efficiency, our products are built to deliver comfort that lasts
                        season after season.
                    </p>
                    <button className="border border-gray-400 rounded-full px-8 py-2 text-sm sm:text-base 
                           font-semibold tracking-wide uppercase hover:bg-black hover:text-white transition-colors duration-300">
                        Know Our Story ›
                    </button>
                </div>

                {/* Middle Column */}
                <div className="flex justify-center relative">

                    <img
                        src="/Group 549.png"
                        alt="Water Heater"
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 md:-translate-y-4 w-40 sm:w-52 md:w-60 lg:w-72 object-contain "
                    />
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-4 mt-10 md:mt-48">
                    <h3 className="text-gray-600 font-bold text-xs sm:text-sm md:text-base uppercase tracking-tighter">
                        ISO 9001:2015 Certified Company
                    </h3>
                    <p className="text-black font-medium leading-relaxed text-sm sm:text-base md:text-lg">
                        We design safe, efficient heating and water storage systems. Indian homes,
                        shoppes, and more call us.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default ShopByCategory;