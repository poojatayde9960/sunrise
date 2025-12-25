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
        <section className="w-full bg-white py-10 md:py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">

                <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 mb-10">
                    <p className="text-black font-semibold font-rethink text-xl md:text-lg -mb-5   text-center md:mr-[40%]">
                        Find the accessories you’re looking for.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center md:ml-24 mb-14 gap-4">

                    <div className="w-full md:mx-[27%]  md:w-[35%] relative">
                        {/* Search Icon – LEFT */}
                        <span className="absolute left-4 top-1/2  -translate-y-1/2 text-gray-400">
                            <Icon icon="iconoir:search" className="text-xl mb-" />
                        </span>

                        <input
                            type="text"
                            placeholder="Search By Product Name"
                            className="pl-12 pr-4 py-4 -mt-2 border border-[#0000003B] w-full text-sm focus:outline-none"
                        />
                    </div>

                    <div className="w-full md:w-auto flex justify-center md:justify-end">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#D9D9D933] text-sm w-full md:w-auto  whitespace-nowrap">
                            All Products
                            <Icon icon="basil:filter-outline" className="text-lg" />
                        </button>
                    </div>
                </div>

                {/* TITLE */}

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-20 mb-14">
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
