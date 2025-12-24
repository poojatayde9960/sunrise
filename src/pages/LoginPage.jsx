import React from "react";
import contact from "../../public/contact.png";

const LoginPage = () => {
    return (
        <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl  shadow-lg p-6 sm:p-20 sm:pl-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* LEFT IMAGE */}
                <div className="-ml-0 md:-ml-10  overflow-hidden">
                    <img
                        src={contact}
                        alt="Winter Comfort"
                        className="w-full h-64 sm:h-96 md:w-[150%] md:h-[470px] object-cover "
                    />
                </div>

                {/* RIGHT LOGIN CARD */}
                <div className="border border-[#E4E7E9]  rounded-md p-6 sm:p-10 font-rethink sm:h-[80%] w-full">
                    <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
                        Sign in to your account
                    </h2>

                    {/* Mobile No */}
                    <div className="mb-4">
                        <label className="text-sm text-[#191C1F] block mb-1">
                            Mobile No
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                    </div>

                    {/* OTP */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-2">
                            <label className="text-sm text-[#191C1F] ">OTP</label>
                            <button className="text-xs text-green-500 hover:underline">
                                Didn’t Received? Resend
                            </button>
                        </div>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                    </div>

                    {/* LOGIN BUTTON */}
                    <button className="w-full bg-black text-white py-3 mt-8 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                        LOGIN <span className="text-lg">→</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
