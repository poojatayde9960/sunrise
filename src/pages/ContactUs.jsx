import React from "react";
import contact from "../../public/contact.png";

const ContactUs = ({ onClose }) => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[50%]   mt-20 bg-white">

            {/* LEFT IMAGE (Desktop & Tablet Only) */}
            <div className="hidden md:flex w-full md:w-1/2 mr-10 justify-center">
                <img
                    src={contact}
                    alt="Heater"
                    className="w-full h-[400px] mb-[16%] object-cover overflow-hidden "
                />
            </div>

            {/* RIGHT FORM */}
            <div className="w-full md:w-1/2 max-w-xl p-6 md:p-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb- md:-mt-20 font-rethink text-center md:text-left">
                    CONTACT US
                </h2>

                {/* Name */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border-b placeholder:text-[#666666] border-[#000000] focus:outline-none py-2 text-gray-700"
                    />
                </div>

                {/* Email */}
                <div className="mb-8">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border-b  placeholder:text-[#666666] border-[#000000] focus:outline-none py-2 text-gray-700"
                    />
                </div>

                {/* Contact No */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Contact No"
                        className="w-full border-b placeholder:text-[#666666] border-[#000000] focus:outline-none py-2 text-gray-700"
                    />
                </div>
                <div className="mb-8">
                    <textarea
                        placeholder="Message"
                        className="w-full border-b border-[#000000]
      placeholder:text-[#666666]
      placeholder:translate-y-3
      focus:outline-none"
                    />
                </div>



                {/* Message */}


                {/* Button */}
                <button className="w-full bg-black text-white py-3  mt-24 flex items-center justify-center gap-2 hover:bg-gray-800 transition ">
                    CONTACT US <span className="text-lg">→</span>
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
