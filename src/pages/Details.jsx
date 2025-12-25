import React, { useState } from "react";
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
    const [quantity, setQuantity] = useState(0);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => {
        if (quantity > 0) setQuantity(prev => prev - 1);
    };
    return (
        <div className="w-full">

            {/* MAIN PRODUCT SECTION */}
            <div
                className="flex flex-col lg:flex-row items-start  gap-10 lg:gap-16 px-4 sm:px-10 lg:px-[8%] py-12 bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bg1})` }}
            >

                {/* LEFT IMAGE + THUMBNAILS */}
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-[10%] items-start gap-6 lg:gap-8 w-full lg:w-[60%]">

                    {/* Main Image */}
                    <div className="w-full lg:w-[520px] flex justify-center">
                        <img
                            src={group6}
                            alt="Smart Water Geyser"
                            className="w-full max-w-[480px] lg:-ml-8 h-auto object-contain scale-105 lg:scale-100 translate-y-2 lg:translate-y-12"
                        />
                    </div>

                    {/* Thumbnails */}
                    <div className="flex flex-row lg:mt-[8%] lg:flex-col items-center gap-4 w-full lg:w-auto overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 mt-6 ">
                        {/* Up/Previous */}
                        <button className="w-6 h-6 border border-black rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon="weui:arrow-outlined" className="rotate-180 h-6 w-6 lg:-rotate-90" />
                        </button>

                        {[1, 2, 3].map((item) => (
                            <div key={item} className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 lg:w-28 lg:h-28 bg-[#D9D9D9] flex items-center justify-center cursor-pointer hover:opacity-80 transition">
                                <img src={img3} alt="thumbnail" className="object-contain w-12 h-16 sm:w-16 sm:h-20 lg:w-20 lg:h-24" />
                            </div>
                        ))}

                        {/* Down/Next */}
                        <button className="w-7 h-7 border border-black rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon icon="weui:arrow-outlined" className="lg:rotate-90 h-6 w-6" />
                        </button>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex flex-col gap-4 w-full lg:w-[40%] lg:mt-20 mt-6 ">
                    <h1 className="font-rethink font-bold text-2xl sm:text-3xl lg:text-4xl lg:mt-[20%]">SMART WATER GEYSER</h1>
                    <p className="font-rethink font-semibold text-sm sm:text-base">Best For: Bedrooms, living rooms, offices</p>
                    <p className="font-rethink font-medium text-2xl sm:text-3xl mt-2 mb-3">₹15,000</p>

                    {/* Quantity */}
                    <div className="inline-flex items-center border border-[#1A1919] h-10 w-28 sm:w-32">
                        <button
                            onClick={decrement}
                            className="w-8 ml-2 text-lg sm:text-xl font-semibold"
                        >
                            −
                        </button>
                        <span className="w-8 font-semibold text-xl sm:text-2xl text-center">
                            {quantity}
                        </span>
                        <button
                            onClick={increment}
                            className="w-8 font-semibold text-lg sm:text-xl"
                        >
                            +
                        </button>
                    </div>
                    {/* Highlights */}
                    <div>
                        <h3 className=" mt-5 mb-5 font-rethink font-semibold text-sm sm:text-base">Key Highlights:</h3>
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
                        <button className="h-10 w-full sm:w-44 lg:w-48 lg:h-14 bg-black text-white text-sm sm:text-base">ADD TO CART</button>
                        <button className="h-10 w-full sm:w-44 lg:w-48 border lg:h-14 border-black text-sm sm:text-base">SHOP NOW</button>
                    </div>
                </div>

            </div>

            {/* DESCRIPTION */}
            <div className="flex flex-col lg:flex-row gap-6 mb-16 lg:mt-20  px-4 lg:px-[20%]">
                <div className="flex-1 border border-black p-6 ">
                    <h3 className="font-semibold text-3xl mb-2 lg:my-6">DESCRIPTION</h3>
                    <p className="text-sm sm:text-base ">
                        Stay warm and comfortable during winter with Lakshmisun Room Heaters,
                        designed to deliver fast and efficient heating while ensuring complete
                        safety. Built with shockproof protection and auto cut-off technology.
                    </p>
                </div>
                <div className="flex-1 border border-black p-6">
                    <h3 className="font-semibold mb-2 text-3xl  lg:my-6">HOW TO USE?</h3>
                    <p className="text-sm sm:text-base">
                        Place the heater on a flat surface, plug it in, select the desired heat
                        setting, and allow it to warm the room gradually. Ensure ventilation
                        and switch off when not in use.
                    </p>
                </div>
            </div>

            {/* OTHER PRODUCTS */}
            <div className="mt-12 px-4 sm:px-10 lg:px-[8%]">
                <div className="flex items-center gap-2 mb-6">
                    <button className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                        <Icon icon="weui:arrow-outlined" className="rotate-180 text-xl" />
                    </button>
                    <h3 className="text-sm font-bold">OTHER PRODUCTS</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-6 gap-4 mb-24">
                    {otherProducts.map((item) => (
                        <div key={item.id} className="text-center">
                            <img src={item.img} alt="product" className="w-full object-contain" />
                            <h4 className="font-semibold text-xl mt-2">Lakshmisun Instant Geyser</h4>
                            <p className="font-medium text-3xl mt-1">₹25,000</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    );
};

export default Details;
