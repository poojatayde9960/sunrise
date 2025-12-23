import React from "react";
import img3 from "../../public/1 (3).png";
import img1 from "../../public/1 (1).png";
import img4 from "../../public/1 (4).png";
import img from "../../public/5.png";
import img5 from "../../public/cart.png";
import bg from "../../public/bg.png";
import { Icon } from "@iconify/react";

const Details = () => {
    const otherProducts = [
        { id: 1, img: img3 },
        { id: 2, img: img1 },
        { id: 3, img: img4 },
    ];

    return (
        <div>
            <div className="bg-white/80 rounded-lg">

                {/* ================= PRODUCT MAIN ================= */}
                <div
                    className="flex flex-col lg:flex-row gap-12 mb-16 p-[8%] rounded-lg"
                    style={{ backgroundImage: `url(${bg})` }}
                >
                    {/* Product Images */}
                    <div className="flex items-center lg:items-start gap-4 mt-10">

                        <div className="relative w-56 sm:w-64 lg:w-80">
                            <img
                                src={img}
                                alt="Background"
                                className="absolute top-[60%] h-[80%] w-[180%]"
                            />

                            <img
                                src={img3}
                                alt="Smart Water Geyser"
                                className="relative w-full object-contain z-10"
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="flex flex-col items-center gap-2 mt-10">
                            <button className="w-9 h-9 border border-black rounded-full flex items-center justify-center">
                                <Icon icon="weui:arrow-outlined" className="text-lg -rotate-90" />
                            </button>

                            {[1, 2, 3].map((item) => (
                                <div
                                    key={item}
                                    className="w-20 h-20 bg-[#D9D9D9] flex items-center justify-center"
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
                    <div className="flex-1 mt-10 flex flex-col gap-4">
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
                <div className="flex flex-col lg:flex-row gap-8 mb-16 px-4 lg:px-[11%]">
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
                    <div className="flex items-center gap-2 mb-8">
                        <button className="w-6 h-6 border border-black rounded-full flex items-center justify-center">
                            <Icon icon="weui:arrow-outlined" className="rotate-180 text-sm" />
                        </button>
                        <h3 className="font-semibold text-sm">OTHER PRODUCTS</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-24">
                        {otherProducts.map((item) => (
                            <div
                                key={item.id}
                                className="relative w-full h-[50%] max-w-xs mx-auto"
                            >
                                <img
                                    src={img5}
                                    alt="bg"
                                    className="absolute inset-0 w-full h-56 sm:h-[150%]  object-cover"
                                />

                                <div
                                    className={`relative flex justify-center pt-20
    ${item.id === 3
                                            ? "sm:translate-y-4 md:-translate-y-14"
                                            : "sm:-translate-y-10"
                                        }
  `}
                                >
                                    <img
                                        src={item.img}
                                        alt=""
                                        className={`object-contain z-10
      ${item.id === 3
                                                ? "w-56 sm:w-64 md:w-72 lg:w-80"
                                                : "w-40 sm:w-48 md:w-52"
                                            }
    `}
                                    />
                                </div>


                                <div className="relative mt-6 sm:-translate-y-6  text-center pb-6">
                                    <h4 className="font-semibold ">
                                        Lakshmisun Instant Geyser
                                    </h4>
                                    <p className="font-semibold mt-1">₹25,000</p>
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
