import React from "react";
import { Icon } from "@iconify/react";
import productImg from "../../public/1 (1).png";
import bg from "../../public/bg.png";

const Cart = () => {
    return (
        <section className="w-full bg-white pb-10">

            <div
                className="relative py-16 sm:py-20 md:py-24 mb-8 md:mb-10 bg-center bg-cover"
                style={{ backgroundImage: `url(${bg})` }}
            >

                <div className="absolute inset-0 bg-white/70" />


                <div className="relative flex items-center justify-center gap-3 sm:gap-4 md:gap-6 
                  translate-y-6 sm:translate-y-8 md:translate-y-12 px-4 text-center">

                    <span className="w-10 sm:w-16 md:w-24 lg:w-28 h-px bg-black" />

                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 
                   font-semibold tracking-wide whitespace-nowrap">
                        YOUR CART
                    </h1>

                    <span className="w-10 sm:w-16 md:w-24 lg:w-28 h-px bg-black" />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="flex items-center gap-4 mb-6
                md:justify-center lg:justify-start">
                    <button className="w-6 h-6 border border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition">
                        <Icon icon="weui:arrow-outlined" className="size-5" />
                    </button>
                    <p className="text-sm text-[#1A1919] font-semibold">
                        Home / <span className="text-[#1A1919]">Shopping Cart</span>
                    </p>
                </div>

                {/* PROGRESS */}
                <div className="mb-10 sm:mb-12 md:mb-14
                ml-0 sm:ml-6 md:ml-0 lg:ml-20
                px-4 sm:px-0 md:px-8 lg:px-0">

                    {/* PROGRESS BAR */}
                    <div className="flex flex-col items-center mb-8 sm:mb-10">
                        <div className="w-full max-w-md md:max-w-xl  lg:-mt-9 lg:max-w-md
                    h-1.5 bg-gray-300 rounded-full overflow-hidden
                    mb-3 sm:mb-4 sm:-mt-10 md:mt-0">
                            <div className="h-full w-[85%] bg-[#00DF3C] rounded-full" />
                        </div>

                        <p className="text-center flex flex-wrap items-center justify-center gap-2
                  font-semibold text-sm sm:text-base">
                            You are close to get your product at your home
                            <Icon icon="mdi:truck" className="text-2xl sm:text-3xl" />
                        </p>
                    </div>

                    {/* STEPS */}
                    <div className="relative flex justify-between items-center
                  max-w-md md:max-w-xl lg:max-w-md
                  mx-auto mt-10 sm:mt-16
                  px-2 sm:px-4 md:px-8 lg:px-4">

                        {/* LINE */}
                        <div className="absolute top-5 sm:top-6
                    left-8 sm:left-11 md:left-16 lg:left-11
                    right-8 sm:right-11 md:right-16 lg:right-11
                    h-[2px] bg-gray-300" />

                        {[
                            { icon: "mdi:cart", label: "Shopping Cart", active: true },
                            { icon: "solar:card-broken", label: "Check Out" },
                            { icon: "solar:check-circle-broken", label: "Order Complete" },
                        ].map((step, i) => (
                            <div key={i} className="relative flex flex-col items-center z-10">
                                <div
                                    className={`w-10 h-10 sm:w-12 sm:h-12
          rounded-full flex items-center justify-center
          ${step.active ? "bg-black text-white" : "bg-gray-100 text-gray-500"}`}
                                >
                                    <Icon icon={step.icon} className="text-lg sm:text-xl" />
                                </div>

                                <p
                                    className={`mt-2 sm:mt-3 text-xs sm:text-sm
          ${step.active ? "font-semibold text-black" : "text-gray-500"}`}
                                >
                                    {step.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>


                {/* CART ITEMS */}
                <div className="space-y-6 mb-6">
                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="border border-[#1A191952] p-4 flex flex-col md:flex-row justify-between gap-4"
                        >
                            <div className="flex items-center gap-4">
                                <Icon icon="mdi:trash-can-outline" className="text-red-500 text-xl" />

                                <div className="h-32 w-32 bg-[#D9D9D94F] flex items-center justify-center p-2">
                                    <img src={productImg} className="h-40 mt-3 w-auto object-contain" />
                                </div>

                                <div className="-mt-11">
                                    <p className="font-semibold  text-lg ">
                                        Lakshmisun Instant <br /> Geyser
                                    </p>

                                    <div className="flex items-center  gap-2 mt-2 border border-black  w-20 px-2 py-1 text-sm">
                                        <button className="ml-2">-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>

                            <p className="font-semibold text-2xl self-end md:self-center">
                                Price ₹25,000
                            </p>
                        </div>

                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="border border-[#1A191952] p-4 h-[95%]">
                        <div className="flex justify-between mb-3">
                            <h3 className="font-semibold">Select Address</h3>
                            <button className="text-[#00DF3C] text-sm">+ Add Address</button>
                        </div>
                        <hr className="mb-4" />

                        {[1, 2].map((a) => (
                            <div key={a} className="bg-gray-100 p-3 mb-3">
                                <label className="flex items-center gap-2 text-xs mb-2">
                                    <input type="checkbox" className="w-4 h-4 accent-black rounded-none" />
                                    Mark as default
                                </label>
                                <div className="flex gap-2">
                                    <Icon icon="tdesign:location-filled" className="text-xl" />
                                    <p className="text-sm Rethink Sans ">
                                        Golden city center, chhatrapati <br /> sambhajinagar, 431001
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAYMENT */}
                    <div>
                        <div className="border border-[#1A191952] p-5 mb-6">
                            <h3 className="font-semibold mb-3">Payment Method</h3>
                            <hr />
                            <label className="flex items-center gap-3 mt-4">
                                <input type="checkbox" className="w-6 h-6 accent-black rounded-none" />
                                Cash On Delivery
                            </label>
                            <label className="flex items-center gap-3 mt-4">
                                <input type="checkbox" className="w-6 h-6 accent-black rounded-none" />
                                Online Payment
                            </label>
                        </div>

                        <div className=" border-[#1A191952] border p-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Apply Coupon Code"
                                    className="w-full px-4 py-4 pr-28 bg-[#D9D9D933]"
                                />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#00DF3C] text-white px-4 py-2 text-sm">
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* BILL SUMMARY */}
                    <div className="border border-[#1A191952] p-4 h-[95%]">
                        <h3 className="font-semibold mb-4">Bill Summary</h3>
                        <hr className="text-[#D9D9D9]" />
                        <div className="mt-6 space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>₹25,000</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping</span>
                                <span>₹5,000</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax</span>
                                <span>₹50</span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold text-lg">
                                <span>Total</span>
                                <span>₹30,050</span>
                            </div>
                        </div>
                    </div>

                    {/* EMPTY GRID CELLS */}
                    <div className="hidden md:block" />
                    <div className="hidden md:block" />

                    {/* BUTTONS */}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 -mt-3">
                        <button className="border  font-rethink border-[#666666] px-4 py-2 text-sm w-full sm:w- text-[#666666] lg:whitespace-nowrap">
                            Continue Shopping
                        </button>

                        <button className="bg-[#00DF3C]  font-rethink text-white p-2 text-sm w-full sm:w- lg:whitespace-nowrap">
                            Proceed To Checkout
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Cart;
