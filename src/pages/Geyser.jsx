import React from "react";
import img1 from "../../public/1 (1).png";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const products = [
    { id: 1, name: "Lakshmisun Instant Geyser", price: "₹25,000" },
    { id: 2, name: "Lakshmisun Instant Geyser", price: "₹25,000" },
    { id: 3, name: "Lakshmisun Instant Geyser", price: "₹25,000" },
    { id: 4, name: "Lakshmisun Instant Geyser", price: "₹25,000" },
];

const Geyser = () => {
    const navigate = useNavigate();
    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">



                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                    <p className="text-black font-semibold text-xl md:text-lg text-center mr-[30%] md:text-right md:flex-1">
                        Find the accessories you’re looking for.
                    </p>

                </div>



                <div className="flex flex-col md:flex-row md:justify-between items-center mb-14 px-4 md:px-0">
                    <div className="w-full md:w-[45%] md:ml-[29%] mb-4 md:mb-0 relative">
                        <input
                            type="text"
                            placeholder="Search By Product Name"
                            className="pl-4 pr-10 py-4 border w-full text-sm focus:outline-none"
                        />
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            🔍
                        </span>
                    </div>

                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                        <button className="flex items-center justify-center md:justify-start gap-2 px-4 py-3 bg-[#D9D9D933] text-sm w-full md:w-auto">
                            All Products
                            <Icon icon="basil:filter-outline" className="text-lg" />
                        </button>
                    </div>

                </div>

                {/* TITLE */}

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-20 mb-20">
                    <span className="w-24 md:w-36 h-px bg-black" />

                    <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-rethink font-semibold tracking-wider text-center">
                        GEYSERS
                    </h2>

                    <span className="w-24 md:w-48 h-px bg-black" />
                </div>

                {/* PRODUCT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {products.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-50 p-6 w-full max-w-[280px] mx-auto flex flex-col items-center text-center relative"
                        >
                            <img
                                src={img1}
                                alt="Geyser"
                                className="h-72 object-contain -mb-6"
                            />

                            <h3 className="text-sm font-rethink font-semibold">
                                {item.name}
                            </h3>

                            <p className="text-lg font-rethink font-semibold mt-2">
                                {item.price}
                            </p>

                            <button
                                onClick={() => navigate("/details")}
                                className="absolute bottom-4 right-4 w-9 h-9 
  border border-black rounded-full 
  flex items-center justify-center 
  text-black 
  hover:bg-black hover:text-white 
  transition"
                            >
                                <Icon
                                    icon="weui:arrow-outlined"
                                    className="text-lg group-hover:text-white"
                                />
                            </button>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Geyser;
