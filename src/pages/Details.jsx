import React from "react";
import img3 from "../../public/1 (3).png";
import img1 from "../../public/1 (1).png";
import img4 from "../../public/1 (4).png";
import img from "../../public/5.png";
import img5 from "../../public/cart.png";
import bg1 from "../../public/bg1.png";
import group3 from "../../public/group3.png";
import group4 from "../../public/group4.png";
import group5 from "../../public/group5.png";
import { Icon } from "@iconify/react";

const Details = () => {
    const otherProducts = [
        { id: 1, img: group3 },
        { id: 2, img: group4 },
        { id: 3, img: group5 },
    ];

    return (
        <div>
            <div className=" ">

                {/* ================= PRODUCT MAIN ================= */}
                <div
                    className="flex flex-col lg:flex-row gap-12  w-full
    bg-no-repeat
    bg-cover
   mb-16 p-[8%] rounded-lg"
                    style={{ backgroundImage: `url(${bg1})` }}
                >
                    {/* Product Images */}
                    <div className="flex items-center lg:ml-16   lg:items-start gap-4 ">

                        <div className="relative w-56 sm:w-64 lg:-mb-[5%] lg:translate-y-14 lg:w-[50%]">
                            <img
                                src={img}
                                alt="Background"
                                className="absolute top-[60%] -translate-y-16 h-[55%] w-[150%] object-contain"
                            />

                            <img
                                src={img3}
                                alt="Smart Water Geyser"
                                className="relative z-10 object-contain h-[55%] w-[150%] -translate-y-12"
                            />
                        </div>


                        {/* Thumbnails */}
                        <div className="flex flex-col items-center gap-2 mt-24">
                            <button className="w-9 h-9 border border-black rounded-full flex items-center justify-center">
                                <Icon icon="weui:arrow-outlined" className="text-lg -rotate-90" />
                            </button>

                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="w-24 h-24 bg-[#D9D9D9] flex items-center justify-center"
                                >
                                    <img
                                        src={img3}
                                        alt=""
                                        className="w-12 h-16 object-contain"
                                    />
                                </div>
                            ))}

                            <button className="w-9 h-9 border border-black rounded-full flex items-center justify-center">
                                <Icon icon="weui:arrow-outlined" className="text-lg rotate-90" />
                            </button>
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 mt-10 mr-36 -ml-6 flex flex-col gap-4">

                        <h1 className="text-3xl lg:text-4xl font-semibold">
                            SMART WATER GEYSER
                        </h1>

                        <p className="font-semibold text-sm">
                            Best For: Bedroom, living rooms, offices
                        </p>

                        <p className="text-2xl font-medium">₹15,000</p>

                        <div className="inline-flex items-center border border-gray-500 h-8 w-24">
                            <button className="w-8">−</button>
                            <span className="w-8 text-center">0</span>
                            <button className="w-8">+</button>
                        </div>

                        <div>
                            <h3 className="font-semibold">Key Highlights:</h3>
                            <ul className="list-disc list-inside text-sm space-y-1">
                                <li>Fast & uniform heating</li>
                                <li>Auto cut-off for safety</li>
                                <li>100% shockproof body</li>
                                <li>Dual heat settings</li>
                                <li>1 Year warranty</li>
                            </ul>
                        </div>

                        <div className="flex gap-4 mt-5">
                            <button className="h-10 w-36 bg-black text-white">
                                ADD TO CART
                            </button>
                            <button className="h-10 w-36 border border-black">
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
                            Stay warm and comfortable during winter with Lakshmisun Room Heaters, designed to deliver fast and efficient heating while ensuring complete safety. Built with shockproof protection and auto cut-off technology, these heaters are ideal for daily home use.
                        </p>
                    </div>

                    <div className="flex-1 border border-black p-6">
                        <h3 className="font-semibold mb-2">HOW TO USE?</h3>
                        <p className="text-sm">
                            Place the room heater on a flat and stable surface in the room. Plug it into a suitable power socket and select the desired heat setting. Allow the heater to warm the room gradually. Always ensure proper ventilation and switch off the heater when not in use. Do not cover the heater during operation to maintain safety.
                        </p>
                    </div>
                </div>

                {/* ================= OTHER PRODUCTS ================= */}
                <div className="mt-12 px-4 sm:px-10 lg:px-[8%]">
                    <div className="flex items-center gap-2 mb-6 -mt-3 ml-4">
                        <button className="w-7 h-7 border border-black rounded-full flex items-center justify-center">
                            <Icon icon="weui:arrow-outlined" className="rotate-60 text-xl" />
                        </button>
                        <h3 className=" text-sm font-rethink text-[#000000] font-bold ">OTHER PRODUCTS</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-24">
                        {otherProducts.map((item) => (
                            <div
                                key={item.id}
                                className="w-full max-w-md mx-auto "
                            >

                                <img
                                    src={item.img}
                                    alt="product"
                                    className={`w-full object-contain ${item.id === 1 ? "h-auto scale-[102%]" : "scale-95"
                                        }`}
                                />


                                <div className="mt-2 text-center">
                                    <h4 className="font-semibold  font-rethink text-xl">
                                        Lakshmisun Instant Geyser
                                    </h4>
                                    <p className="font-medium text-3xl mt-1 font-rethink">
                                        ₹25,000
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Details;
