import React from "react";
import contact from "../../public/contact.png"
const LoginPage = () => {
    return (
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-10">

            <div className="grid grid-cols-1  mt-9 mb-9 md:grid-cols-2 gap-10 items-center">

                {/* LEFT IMAGE */}
                <div className=" -ml-10 overflow-hidden">
                    <img
                        src={contact}
                        alt="Winter Comfort"
                        className="w-full h-[420px] object-cover"
                    />
                </div>

                {/* RIGHT LOGIN CARD */}
                <div className="border border-gray-200 rounded-lg p-8 max-w-md mx-auto w-full">

                    <h2 className="text-xl font-semibold text-center mb-6">
                        Sign in to your account
                    </h2>

                    {/* Mobile No */}
                    <div className="mb-4">
                        <label className="text-sm text-gray-600 block mb-1">
                            Mobile No
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                    </div>

                    {/* OTP */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-1">
                            <label className="text-sm text-gray-600">OTP</label>
                            <button className="text-xs text-green-500 hover:underline">
                                Didn’t Received ? Resend
                            </button>
                        </div>
                        <input
                            type="text"
                            className="w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
                        />
                    </div>

                    {/* LOGIN BUTTON */}
                    <button className="w-full bg-black text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                        LOGIN <span className="text-lg">→</span>
                    </button>

                </div>
            </div>
        </div>

    );
};

export default LoginPage;
