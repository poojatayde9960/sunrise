import { PlayCircle } from "lucide-react";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

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
        <div className="w-full min-h-screen bg-white font-rethink px-4 sm:px-6 md:px-16 py-8">

            {/* SHOP BY CATEGORY */}
            <section className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
                    SHOP BY CATEGORY
                </h2>

                <p className="text-[#666666] text-sm font-medium sm:text-base max-w-2xl mx-auto">
                    Explore our range of reliable heating and hot water solutions designed
                    for every home.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="relative bg-[#f2f2f2] p-2 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[400px]"
                        >
                            {/* Title */}
                            <h3 className="text-sm sm:text-base font-semibold text-gray-800">
                                {product.title}
                            </h3>

                            {/* Image */}
                            <div className="flex justify-center   items-center  flex-1">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="
            h-full w-auto
            max-h-[240px] sm:max-h-[280px] md:max-h-[420px]
            object-contain
          "
                                />
                            </div>

                            {/* Bottom Arrow Button */}
                            <Link to="/details" className="absolute bottom-4 right-4 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black flex items-center justify-center transition">
                                <MdKeyboardArrowRight />
                            </Link>
                        </div>
                    ))}
                </div>


            </section>
            <div className="flex items-center gap-2">
                <button className="rounded-full border border-black ">
                    <MdKeyboardArrowRight className="w-4 h-4 text-gray-400" />
                </button>
                <span className="text-[10px] font-bold uppercase border-b-2 border-black pb-0.5">
                    About Us
                </span>
            </div>
            {/* ABOUT US */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-10xl mx-auto px-4 sm:px-6 lg:px-0">

                <div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                        BETWEEN <br /> INNOVATION & <br /> TRUST
                    </h2>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative w-40 sm:w-44 md:w-52 lg:w-72 h-40 sm:h-44 md:h-52 lg:h-64 rounded-sm overflow-visible">
                        <img
                            src="/Group 549.png"
                            alt="Smart Geyser"
                            className="absolute left-0 sm:left-[-10px] md:left-[-20px] lg:left-[-32px] bottom-0 h-36 sm:h-44 md:h-52 lg:h-64 w-auto object-contain"
                        />
                    </div>
                </div>

            </section>

            {/* LOWER SECTION */}
            <div className="max-w-10xl mx-auto mt-12 md:mt-5 px-4 sm:px-6 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* LEFT COLUMN */}
                    <div className="flex flex-col items-start space-y-6 text-center md:text-left">
                        <p className="text-gray-600 font-medium leading-relaxed text-base sm:text-base md:text-md">
                            Lakshmipur Enterprise creates reliable heating and hot water solutions
                            designed for everyday Indian living. With a focus on safety, durability,
                            and efficiency, our products are built to deliver comfort that lasts
                            season after season.
                        </p>

                        <button
                            className="mx-auto md:mx-0 border border-gray-400 rounded-full px-8 py-2 
        text-sm sm:text-base font-semibold tracking-wide uppercase 
        hover:bg-black hover:text-white transition-colors duration-300"
                        >
                            Know Our Story ›
                        </button>
                    </div>

                    {/* MIDDLE COLUMN (IMAGE) */}
                    <div className="relative flex justify-center items-center min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:-translate-y-16 lg:min-h-[100px]">
                        <img
                            src="/Group 550.jpeg"
                            alt="Water Heater"
                            className="
      w-40 sm:w-52 md:w-64 lg:w-96 xl:w-[500px]   
      h-48 sm:h-60 md:h-80 lg:h-96 xl:h-[500px]  
      object-contain
    "
                        />
                    </div>



                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col space-y-4 text-center md:text-left md:mt-48">
                        <h3 className="text-gray-600 font-bold text-xs sm:text-sm md:text-base uppercase tracking-tight">
                            ISO 9001:2015 Certified Company
                        </h3>

                        <p className="text-gray-600 font-medium leading-relaxed text-sm sm:text-base md:text-md">
                            We design safe, efficient heating and water storage systems. Indian homes,
                            shops, and more trust us.
                        </p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default ShopByCategory;