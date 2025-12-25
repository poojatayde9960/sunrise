import React from 'react';
import { ArrowRight, ShoppingCart, CheckCircle, CreditCard, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import photo from "../../public/contact.png";


const OurBestSeller = () => {
    const steps = [
        { id: "01", title: "Select Your Product", desc: "Browse Our Range Of Room Heaters And Geysers And Choose The Product That Fits Your Needs.", icon: <CheckCircle className="w-5 h-5 text-white" /> },
        { id: "02", title: "Add To Cart", desc: "Add The Selected Product To Your Cart And Proceed To Checkout.", icon: <ShoppingCart className="w-5 h-5 text-white" /> },
        { id: "03", title: "Make Payment", desc: "Choose Cash On Delivery Or Prepaid Payment For A Secure Checkout Experience.", icon: <CreditCard className="w-5 h-5 text-white" /> },
        { id: "04", title: "Get It Delivered", desc: "We Deliver Your Product Safely To Your Doorstep Anywhere In India.", icon: <Truck className="w-5 h-5 text-white" /> },
    ];

    return (
        <div className="bg-white  font-rethink text-black overflow-x-hidden">

            {/* SECTION 1: OUR BEST SELLERS */}
            <section className=" bg-[#D9D9D933] px-4 sm:px-6 md:px-8 py-8 max-w-10xl mx-auto">
                <h2 className="text-center text-2xl sm:text-3xl md:text-6xl font-bold uppercase mb-10 md:mb-16 tracking-tighter">
                    Our <span className="underline decoration-4 underline-offset-8">Best</span> Sellers
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-4 md:px-8 items-stretch">

                    {/* Room Heater Card */}
                    <div className="relative group">
                        <button className="absolute -top-8 sm:-top-10 left-4 bg-white border border-gray-300 
                                           px-3 sm:px-4 py-1 sm:py-2 rounded-full 
                                           text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                            Room Heater
                        </button>

                        <Link to="/details" className="relative h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden">
                            <img
                                src={photo}
                                alt="Heater"
                                className="w-full h-full object-cover grayscale-[0.2]"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>

                            <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-6 
                                            bg-white p-4 sm:p-6 max-w-[220px] sm:max-w-[240px] shadow-xl">
                                <p className="text-[9px] sm:text-[10px] font-bold uppercase mb-2">
                                    Get 30% Off on Lakshmisun Room Heater
                                </p>
                                <p className="text-[#666666] text-[9px] sm:text-[15px] font-medium lg:text-[15px] leading-tight mb-3 sm:mb-4  italic">
                                    Warmth you can rely on, safety you can trust.
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl sm:text-3xl lg:text-5xl font-medium">₹15,000</span>
                                    <div className='p-2 mt-16'>
                                        <IoIosArrowForward className="w-5 h-5 p-1 border border-black rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Center Info Card */}
                    <div className="bg-white flex flex-col justify-center items-center text-center 
                                    p-6 sm:p-8 space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold uppercase leading-tight tracking-tighter">
                            Designed for <br /> Everyday Comfort
                        </h3>
                        <p className="text-[#666666] text-[9px] sm:text-[15px]  lg:text-[15px]  uppercase font-medium tracking-tight px-4">
                            Quality Room Heaters and Geysers Built with Safety, Efficiency and Performance in mind.
                        </p>
                        <button className="bg-[#1a1a1a] text-white px-6 sm:px-8 py-2.5 sm:py-3 
                                           rounded-full text-[10px] sm:text-xs 
                                           font-bold uppercase tracking-widest 
                                           hover:bg-black transition-all">
                            Shop Now
                        </button>
                    </div>

                    {/* Smart Geyser Card */}
                    <div className="relative group bg-gray-50 p-4 sm:p-6 flex flex-col justify-between">

                        <button className="absolute -top-8 sm:-top-10 right-4 bg-white border border-gray-300 
                                           px-3 sm:px-4 py-1 sm:py-2 rounded-full 
                                           text-[9px] sm:text-[10px] font-bold uppercase tracking-widest z-20">
                            Smart Geyser
                        </button>

                        {/* IMAGE WRAPPER */}
                        <Link to="/details" className="relative w-full h-40 sm:h-44 md:h-48 mb-4 flex items-center justify-center">

                            <img
                                src="./1 (3).png"
                                alt="Badge"
                                className="absolute inset-0 m-auto w-12 sm:w-14 md:w-16 h-20 sm:h-22 md:h-24"
                            />

                            <img
                                src="./our2.png"
                                alt="Geyser"
                                className="w-full h-full object-contain"
                            />
                        </Link>

                        {/* Content */}
                        <div className="text-center">
                            <h4 className="font-bold uppercase text-xs sm:text-sm mb-1">
                                Lakshmisun Instant Geyser
                            </h4>
                            <p className="text-[#666666] text-[9px] sm:text-[15px]  lg:text-[15px] font-medium mb-4">
                                Instant hot water, whenever you need it.
                            </p>
                            <div className="flex justify-center items-center gap-4">
                                <span className="text-xl sm:text-2xl font-black">₹25,000</span>
                                <ArrowRight className="w-5 h-5 p-1 border border-black rounded-full" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default OurBestSeller;