import React from "react";
import bg from "../../public/bg.png"
import img from "../../public/5.png"
import img4 from "../../public/1 (4).png"
import Geyser from "./Geyser";
import Heaters from "./Heaters";
const Product = () => {
    return <>




        <div className="">
            <section
                className="w-full bg-no-repeat bg-cover bg-center h-[500px] lg:h-[600px]"
                style={{ backgroundImage: `url(${bg})` }}
            >

                <div className="max-w-7xl  mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="mt-20 -ml-6 lg:-ml-12">

                        <h1 className="text-4xl lg:text-5xl font-rethink font-semibold text-black leading-tight">
                            EVERYDAY COMFORT <br /> FOR EVERY SEASON
                        </h1>

                        <p className="mt-6 text-gray-600 font-rethink text-lg max-w-md">
                            Explore Our Complete Range Of Safe, Reliable Room <br /> Heaters
                            And Advanced Water Heating Solutions Thoughtfully Designed
                            For Indian Homes.
                        </p>

                        <button className="mt-8 px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold hover:bg-black hover:text-white transition">
                            Explore Products
                        </button>
                    </div>

                    {/* RIGHT PRODUCTS */}
                    <div className="relative flex justify-center items-end gap-8">

                        <div className="flex flex-col   items-center">
                            <div>
                                <img
                                    src={img4}
                                    className="w-44 object-contain translate-y-64"
                                />
                            </div>

                            <img
                                src={img}
                                className="w-[260px] h-[350%] lg:w-[300px] object-contain translate-y-"
                            />


                        </div>

                        <div className="flex flex-col items-center -translate-y-8">
                            <div className="w-40 h-10 bg-gray-100 rounded-full mb-4" />
                            <img src={img} className="w-44 object-contain" />
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-40 h-10 bg-gray-100 rounded-full mb-4" />
                            <img src={img} className="w-44 object-contain" />
                        </div>

                    </div>
                </div>
            </section>


        </div>
        <Geyser />
        <Heaters />
    </>
};

export default Product;
