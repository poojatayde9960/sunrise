import React from "react";
import contact from "../../public/contact.png";

const ContactUs = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[50%] mt-20 bg-white">

            {/* LEFT IMAGE (Desktop & Tablet Only) */}
            <div className="hidden md:flex w-full md:w-1/2 mr-10 justify-center">
                <img
                    src={contact}
                    alt="Heater"
                    className="w-full h-[500px] object-cover "
                />
            </div>

            {/* RIGHT FORM */}
            <div className="w-full md:w-1/2 max-w-xl p-6 md:p-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10 text-center md:text-left">
                    CONTACT US
                </h2>

                {/* Name */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border-b border-gray-400 focus:outline-none py-2 text-gray-700"
                    />
                </div>

                {/* Email */}
                <div className="mb-6">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b border-gray-400 focus:outline-none py-2 text-gray-700"
                    />
                </div>

                {/* Contact No */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Contact No"
                        className="w-full border-b border-gray-400 focus:outline-none py-2 text-gray-700"
                    />
                </div>

                {/* Message */}
                <div className="mb-8">
                    <textarea
                        rows="4"
                        placeholder="Message"
                        className="w-full border-b border-gray-400 focus:outline-none py-2 resize-none text-gray-700"
                    />
                </div>

                {/* Button */}
                <button className="w-full bg-black text-white py-3 flex items-center justify-center gap-2 hover:bg-gray-800 transition rounded">
                    CONTACT US <span className="text-lg">→</span>
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
