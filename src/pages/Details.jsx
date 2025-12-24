import React from "react";
import img3 from "../../public/1 (3).png";
import bg1 from "../../public/bg1.png";
import group3 from "../../public/group3.png";
import group4 from "../../public/group4.png";
import group5 from "../../public/group5.png";
import group6 from "../../public/group6.png";
import { Icon } from "@iconify/react";

const Details = () => {
    const otherProducts = [
        { id: 1, img: group3 },
        { id: 2, img: group4 },
        { id: 3, img: group5 },
    ];

    return (
        <div className="w-full">

            {/* ================= PRODUCT MAIN ================= */}
            <div
                className="
    flex flex-col lg:flex-row
    items-center
    gap-8 lg:gap-12
    bg-no-repeat bg-cover
    mb-16
    px-4 sm:px-[6%]  lg:px-[8%]
    py-[6%]
  "
                style={{ backgroundImage: `url(${bg1})` }}
            >

                {/* ===== LEFT IMAGE SECTION ===== */}
                <div
                    className="
    flex flex-col          /* Mobile: column layout (main image on top, thumbnails below) */
    lg:flex-row            /* Desktop (lg+): row layout (side by side) */
    items-center
    gap-6 md:gap-8
    w-full
    mt-8 lg:mt-16
    px-4 sm:px-6         /* Add some horizontal padding on mobile for better edge spacing */
  "
                >
                    {/* Main Product Image */}
                    <div className="
    w-full                 /* Full width on mobile */
    lg:w-[520px]           /* Fixed reasonable width on desktop (adjust as needed) */
    flex justify-center
  ">
                        <img
                            src={group6}
                            alt="Smart Water Geyser"
                            className="
        w-full               /* Responsive width */
        max-w-[480px]        /* Prevent excessive stretching on very large screens */
        h-auto
        object-contain
        scale-110            /* Keep your desired zoom effect */
        origin-bottom
          translate-y-[15%]
      "
                        />
                    </div>

                    {/* Thumbnails with Scroll Arrows */}
                    <div
                        className="
      flex flex-row          /* Mobile: horizontal thumbnails (scrollable if many) */
      lg:flex-col            /* Desktop: vertical thumbnails */
      items-center
      gap-4
      w-full                 /* Full width on mobile for horizontal layout */
      lg:w-auto
      mt-8 lg:mt-0           /* Extra top margin on mobile, none on desktop */
      overflow-x-auto        /* Enable horizontal scroll on mobile if thumbnails overflow */
      lg:overflow-x-visible
      pb-4 lg:pb-0           /* Padding bottom for mobile scroll */
    "
                    >
                        {/* Up/Previous Button (rotated for horizontal on mobile) */}
                        <button className="
      w-7 h-7 
      border border-black rounded-full 
      flex items-center justify-center 
      flex-shrink-0          /* Prevent button from shrinking */
    ">
                            <Icon icon="weui:arrow-outlined" className="rotate-180 h-6 w-6 lg:-rotate-90" />
                            {/* rotate-180 for left on mobile horizontal, -rotate-90 for up on desktop vertical */}
                        </button>

                        {/* Thumbnail Items */}
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="
          flex-shrink-0          /* Prevent thumbnails from shrinking on mobile scroll */
          w-24 h-24 
          sm:w-28 sm:h-28
          lg:w-[129%] lg:h-28
          bg-[#D9D9D9] 
          flex items-center justify-center
          cursor-pointer
          hover:opacity-80 transition-opacity
        "
                            >
                                <img
                                    src={img3}
                                    alt="thumbnail"
                                    className="
    object-contain
    w-[52px] h-[76px]
    sm:w-[60px] sm:h-[88px]
    lg:w-[79px] lg:h-[120px]
    translate-y-2    /* moves thumbnail slightly downward */
  "
                                />

                            </div>
                        ))}

                        {/* Down/Next Button */}
                        <button className="
    w-7 h-7
      border border-black rounded-full 
      flex items-center justify-center 
      flex-shrink-0
    ">
                            <Icon icon="weui:arrow-outlined" className="lg:rotate-90  h-6 w-6" />
                            {/* No rotation on mobile (right), rotate-90 for down on desktop */}
                        </button>
                    </div>
                </div>

                {/* ===== RIGHT CONTENT SECTION ===== */}
                <div
                    className="
      flex flex-col gap-4
      w-full lg:w-1/2
      mt-6 lg:mt-5
      ml-0 lg:-ml-72
    "
                >

                    <h1 className="font-rethink  font-bold text-2xl sm:text-3xl lg:text-4xl">
                        SMART WATER GEYSER
                    </h1>

                    <p className="font-rethink font-semibold text-sm sm:text-base -mt-1">
                        Best For: Bedrooms, living rooms, offices
                    </p>

                    <p className="font-rethink font-medium text-2xl sm:text-3xl mt-1 mb-2">
                        ₹15,000
                    </p>

                    {/* Quantity */}
                    <div className="inline-flex items-center border border-[#1A1919] h-10 w-28 sm:w-32">
                        <button className="w-8 ml-2 text-lg sm:text-xl font-semibold">−</button>
                        <span className="w-8 font-semibold text-xl sm:text-2xl text-center">0</span>
                        <button className="w-8 font-semibold text-lg sm:text-xl">+</button>
                    </div>

                    {/* Highlights */}
                    <div>
                        <h3 className="mb-2 mt-3 font-rethink font-semibold text-sm sm:text-base">
                            Key Highlights:
                        </h3>
                        <ul className="list-disc list-inside text-sm sm:text-base">
                            <li>Fast & uniform heating</li>
                            <li>Auto cut-off for added safety</li>
                            <li>100% shockproof body</li>
                            <li>Dual heat settings</li>
                            <li>1 Year Manufacturer Warranty</li>
                        </ul>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-5 w-full">
                        <button className="h-10 w-full sm:w-44 lg:w-48 bg-black text-white text-sm sm:text-base">
                            ADD TO CART
                        </button>
                        <button className="h-10 w-full sm:w-44 lg:w-48 border border-black text-sm sm:text-base">
                            SHOP NOW
                        </button>
                    </div>

                </div>
            </div>


            {/* ================= DESCRIPTION ================= */}
            <div className="flex flex-col lg:flex-row gap-8 mb-16 px-4 lg:px-[9.5%]">
                <div className="flex-1 border border-black p-6">
                    <h3 className="font-semibold mb-2">DESCRIPTION</h3>
                    <p className="text-sm">
                        Stay warm and comfortable during winter with Lakshmisun Room Heaters,
                        designed to deliver fast and efficient heating while ensuring complete
                        safety. Built with shockproof protection and auto cut-off technology.
                    </p>
                </div>

                <div className="flex-1 border border-black p-6">
                    <h3 className="font-semibold mb-2">HOW TO USE?</h3>
                    <p className="text-sm">
                        Place the heater on a flat surface, plug it in, select the desired heat
                        setting, and allow it to warm the room gradually. Ensure ventilation
                        and switch off when not in use.
                    </p>
                </div>
            </div>

            {/* ================= OTHER PRODUCTS ================= */}
            <div className="mt-12 px-4 sm:px-10 lg:px-[8%]">
                <div className="flex items-center gap-2 mb-6">
                    <button className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                        <Icon icon="weui:arrow-outlined" className="rotate-180 text-xl" />
                    </button>
                    <h3 className="text-sm font-bold">OTHER PRODUCTS</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-24">
                    {otherProducts.map((item) => (
                        <div key={item.id} className="text-center">
                            <img
                                src={item.img}
                                alt="product"
                                className="w-full object-contain"
                            />
                            <h4 className="font-semibold text-xl mt-2">
                                Lakshmisun Instant Geyser
                            </h4>
                            <p className="font-medium text-3xl mt-1">₹25,000</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Details;
