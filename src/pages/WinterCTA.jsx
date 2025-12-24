import React from "react";

const WinterCTA = () => {
    return (
        <section className="w-full bg-white py-20 -mt-9">
            <div className="max-w-7xl mx-auto px-6">

                {/* CTA BOX */}
                <div className="relative overflow-hidden  bg-[#111] py-20 px-6 text-center text-white">

                    {/* Subtle Wave Background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1c1c1c,_#0b0b0b)] opacity-80" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.02)_0,rgba(255,255,255,0.02)_1px,transparent_1px,transparent_10px)]" />

                    {/* CONTENT */}
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            READY TO EXPERIENCE <br />
                            ULTIMATE WINTER COMFORT?
                        </h2>

                        <p className="mt-4 text-[#FFFFFF] text-sm  md:text-lg">
                            Upgrade your home with powerful, energy-efficient heating solutions designed for <br /> everyday comfort.
                        </p>

                        <button className="mt-8 bg-white text-black px-8 py-3 text-sm font-semibold tracking-wide hover:bg-gray-200 transition">
                            SHOP NOW
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WinterCTA;
