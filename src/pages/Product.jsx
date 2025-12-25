import React from "react";
import bg from "../../public/bg1.png";
import group2 from "../../public/group2.png";
import Geyser from "./Geyser";
import Heaters from "./Heaters";

const Product = () => {
    return (
        <>
            <section
                className="
    w-full
    bg-no-repeat
    bg-cover
    bg-[center_left]
    lg:bg-center
    min-h-[500px]
    lg:h-[520px]
  "
                style={{ backgroundImage: `url(${bg})` }}
            >

                <div className="px-6 lg:px-12 py-12 lg:py-24  grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center max-w-3xl  text-center  lg:mt-20 lg:text-left lg:ml-12 order-2 lg:order-1">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-semibold text-black leading-tight">
                            <span className="whitespace-nowrap">EVERYDAY COMFORT</span> <br />
                            <span className="whitespace-nowrap">FOR EVERY SEASON</span>
                        </h1>

                        <p className="mt-6 text-gray-600 font-rethink text-base sm:text-lg lg:text-xl font-semibold">
                            Explore Our Complete Range Of Safe, Reliable <br className="hidden sm:block" />
                            Room Heaters And Advanced Water Heating <br className="hidden sm:block" />
                            Solutions Thoughtfully Designed For Indian Homes.
                        </p>

                        <button
                            className="
          mt-8 px-8 py-3
          w-full sm:w-[60%]   lg:w-[30%]
          mx-auto lg:mx-0 
          rounded-full border border-gray-300 text-sm font-semibold
          shadow-[0_8px_20px_rgba(0,0,0,0.15)]
          hover:bg-black hover:text-white transition
        "
                        >
                            Explore Products
                        </button>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="
  flex justify-center lg:justify-end items-end
  overflow-visible
  lg:mr-[20%]
  order-1 lg:order-2
  mt-8 sm:mt-12 lg:mt-0
">
                        <img
                            src={group2}
                            alt="Product Showcase"
                            className="
    w-[80%]
    sm:w-[70%]
    lg:w-[900px]

    max-w-[340px]
    sm:max-w-[420px]
    lg:max-w-[900px]

    h-auto
    lg:h-[420px]

    relative
    lg:-mb-[10%]
    lg:translate-x-32 
  "
                        />


                    </div>


                </div>
            </section>



            <Geyser />
            <Heaters />
        </>
    );
};

export default Product;