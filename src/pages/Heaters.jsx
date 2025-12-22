import React from "react";
import { Icon } from "@iconify/react";
import heaterImg from "../../public/1 (4).png";

const products = [
    { id: 1, name: "Lakshmisun Instant Geyser", price: "₹25,000" },
    { id: 2, name: "Lakshmisun Instant Geyser", price: "₹25,000" },
];

const Heaters = () => {
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6">

                {/* TITLE */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-20">
                    <span className="w-24 md:w-36 h-px bg-black" />

                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-rethink font-semibold tracking-wider text-center">
                        HEATERS
                    </h2>

                    <span className="w-24 md:w-48 h-px bg-black" />
                </div>

                {/* PRODUCTS */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 md:gap-10">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-gray-50 w-full sm:w-[45%] md:w-96 h-auto flex flex-col items-center text-center p-4 sm:p-6"
                        >
                            {/* IMAGE */}
                            <img
                                src={heaterImg}
                                alt="Heater"
                                className="h-64 sm:h-72 md:h-80 object-contain mt-4"
                            />

                            {/* NAME + PRICE */}
                            <div className="mt-5">
                                <h3 className="text-xl sm:text-2xl font-rethink font-semibold">
                                    {item.name}
                                </h3>
                                <p className="text-lg sm:text-xl font-rethink font-semibold mt-1">
                                    {item.price}
                                </p>
                            </div>

                            {/* ARROW BUTTON */}
                            <button
                                className="absolute bottom-4 right-4 w-9 h-9 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
                            >
                                <Icon icon="weui:arrow-outlined" className="text-lg" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Heaters;
