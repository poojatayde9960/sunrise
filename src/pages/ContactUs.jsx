import React from "react";
import contact from "../../public/contact.png"
const ContactUs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-6">

            {/* OUTER CONTAINER */}
            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-md p-10 mt-32">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* LEFT IMAGE */}
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={contact}
                            alt="Heater Comfort"
                            className="w-full h-[420px] object-cover"
                        />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="max-w-md w-full mx-auto">

                        <h2 className="text-2xl font-semibold mb-10">
                            CONTACT US
                        </h2>

                        {/* Name */}
                        <div className="mb-8">
                            <label className="text-sm text-gray-500">Name</label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-8">
                            <label className="text-sm text-gray-500">Email</label>
                            <input
                                type="email"
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                            />
                        </div>

                        {/* Contact No */}
                        <div className="mb-8">
                            <label className="text-sm text-gray-500">Contact No</label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-10">
                            <label className="text-sm text-gray-500">Message</label>
                            <input
                                type="text"
                                className="w-full border-b border-gray-400 focus:outline-none py-2"
                            />
                        </div>

                        {/* BUTTON */}
                        <button className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                            CONTACT US <span className="text-lg">→</span>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
