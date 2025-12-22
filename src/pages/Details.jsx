import React from "react";
import img3 from "../../public/1 (3).png"
import img1 from "../../public/1 (1).png"
import img from "../../public/5.png"
import img5 from "../../public/cart.png"
import bg from "../../public/bg.png"
// import bg1 from "../../public/bg1.png"
import { Icon } from "@iconify/react";
const Details = () => {
    return (
        <div
            className=""
        >
            <div className="  bg-white/80  rounded-lg">
                {/* PRODUCT MAIN */}
                <div
                    className="flex flex-col  lg:flex-row gap-12 mb-16 h-[120%] p-[8%] rounded-lg"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Product Images */}
                    <div className="flex items-center mt-10 lg:items-start gap-4">

                        <div className="relative w-64 lg:w-80">
                            {/* Background image behind product */}
                            <img
                                src={img}
                                alt="Background"
                                className="absolute top-[60%] h-[80%] w-[190%] "
                            />

                            {/* Main image */}
                            <img
                                src={img3}
                                alt="Smart Water Geyser"
                                className="relative w-full object-contain z-10"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex flex-col items-center gap-2 mt-10">

                            <button
                                className="w-9 h-9 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
                            >
                                <Icon icon="weui:arrow-outlined" className="text-lg -rotate-90" />
                            </button>

                            {/* Thumbnails */}
                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="w-20 h-20 bg-[#D9D9D9] flex items-center justify-center cursor-pointer"
                                >
                                    <img
                                        src={img3}
                                        alt={`Geyser ${item}`}
                                        className="w-12 h-16 object-contain"
                                    />
                                </div>
                            ))}

                            {/* BOTTOM ARROW (last image chya khali) */}
                            <button
                                className="w-9 h-9 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
                            >
                                <Icon icon="weui:arrow-outlined" className="text-lg rotate-90" />
                            </button>

                        </div>


                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex mt-10 flex-col gap-4">
                        <h1 className="text-3xl lg:text-4xl font-semibold">
                            SMART WATER GEYSER
                        </h1>

                        <p className="text-[#1A1919] font-semibold font-rethink text-sm">
                            Best For: Bedroom, living rooms, offices
                        </p>

                        <p className="text-2xl font-rethink font-medium mt-2">₹15,000</p>
                        <div className="inline-flex items-center border border-gray-500 h-8 w-24 ">
                            <button className="w-10 h-full flex items-center justify-center text-lg">
                                −
                            </button>

                            <span className="w-10 h-full flex items-center justify-center text-base">
                                0
                            </span>

                            <button className="w-10 h-full flex items-center justify-center text-lg">
                                +
                            </button>
                        </div>



                        <div className="mt-2">
                            <h3 className="font-semibold">Key Highlights:</h3>
                            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-0">
                                <li className="text-xs">Fast & uniform heating</li>
                                <li className="text-xs">Auto cut-off for added safety</li>
                                <li className="text-xs">100% shockproof body</li>
                                <li className="text-xs">Dual heat settings for energy control</li>
                                <li className="text-xs">Lightweight and portable design</li>
                                <li className="text-xs">1 Year Manufacturer warranty</li>
                            </ul>
                        </div>

                        <div className="flex gap-4 mt-5">
                            <button className=" h-10 w-36 bg-black text-white font-semibold">
                                ADD TO CART
                            </button>
                            <button className="h-10 w-36 border border-black font-semibold">
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                </div>

                {/* Description & How to Use */}
                <div className="flex flex-col lg:flex-row gap-8 mb-16 px-4 lg:px-12">
                    {/* DESCRIPTION */}
                    <div className="flex-1 border border-black p-6 bg-white/90">
                        <h3 className="font-semibold text-lg mb-2">DESCRIPTION</h3>
                        <p className="text-[#000000] text-sm">
                            Stay warm and comfortable during winter with Lakshmisun Room Heaters, designed to deliver fast and efficient heating while ensuring complete safety. Built with shockproof protection and auto cut-off technology, these heaters are ideal for daily home use.
                        </p>
                    </div>

                    {/* HOW TO USE */}
                    <div className="flex-1 border border-black p-6 bg-white/90">
                        <h3 className="font-semibold text-lg mb-2">HOW TO USE ?</h3>
                        <p className="text-[#000000] text-sm">
                            Place the room heater on a flat and stable surface in the room. Plug it into a suitable power socket and select the desired heat setting. Allow the heater to warm the room gradually. Always ensure proper ventilation and switch off the heater when not in use. Do not cover the heater during operation to maintain safety.
                        </p>
                    </div>
                </div>


                {/* Other Products */}
                <div className="mt-12">
                    {/* Heading */}
                    <div className="flex items-center gap-2 mb-6 px-12">
                        <button
                            className="w-6 h-6 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            <Icon icon="weui:arrow-outlined" className="text-sm rotate-180" />
                        </button>
                        <h3 className="font-semibold text-sm">OTHER PRODUCTS</h3>
                    </div>

                    {/* Cards with background */}
                    <div className="relative px-12">
                        {/* Background image behind cards */}
                        <div
                            className="absolute rounded-lg"

                        ></div>

                        {/* Cards container */}
                        <div className="relative grid grid-cols-1  mb-40 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="relative w-72 h-52">
                                {/* Background image */}
                                <img
                                    src={img5}
                                    alt="background"
                                    className="absolute inset-0 w-full h-72 object-cover " // increased height to 72
                                />
                                <div className="relative w-64 mt-[19%] ml-[25%] lg:w-[50%]">

                                    <img
                                        src={img3}
                                        alt="Smart Water Geyser"
                                        className="relative w-full object-contain  z-10"
                                    />
                                </div>
                                <div className="mt-9">
                                    <h4 className="font-semibold text-lg text-center font-rethink">Lakshmisun Instant Geyser</h4>
                                    <div className="ml-[38%]">
                                        <p className="font-semibold mt-1 font-rethink">₹25,000</p>
                                    </div>
                                </div>
                                {/* Foreground card content */}

                            </div>

                            {/* Card 2 */}
                            <div className="relative w-72 h-52">
                                {/* Background image */}
                                <img
                                    src={img5}
                                    alt="background"
                                    className="absolute inset-0  w-full h-72 object-cover " // increased height to 72
                                />
                                <div className="relative w-64 mt-[12%] ml-[25%]   lg:w-[60%]">

                                    <img
                                        src={img1}
                                        alt="Smart Water Geyser"
                                        className="relative w-full object-contain  z-10"
                                    />
                                </div>
                                <div className="mt-2">
                                    <h4 className="font-semibold text-lg text-center font-rethink">Lakshmisun Instant Geyser</h4>
                                    <div className="ml-[38%]">
                                        <p className="font-semibold mt-1 font-rethink">₹25,000</p>
                                    </div>
                                </div>
                                {/* Foreground card content */}

                            </div>


                            {/* Card 3 */}
                            <div className="relative w-72 h-52">
                                {/* Background image */}
                                <img
                                    src={img5}
                                    alt="background"
                                    className="absolute inset-0 w-full h-72 object-cover " // increased height to 72
                                />
                                <div className="relative w-64 mt-[19%] ml-[25%] lg:w-[50%]">

                                    <img
                                        src={img3}
                                        alt="Smart Water Geyser"
                                        className="relative w-full object-contain  z-10"
                                    />
                                </div>
                                <div className="mt-9">
                                    <h4 className="font-semibold text-lg text-center font-rethink">Lakshmisun Instant Geyser</h4>
                                    <div className="ml-[38%]">
                                        <p className="font-semibold mt-1 font-rethink">₹25,000</p>
                                    </div>
                                </div>
                                {/* Foreground card content */}

                            </div>

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Details;
