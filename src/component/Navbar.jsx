import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import LoginPage from "../pages/LoginPage";

const Navbar = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [open, setOpen] = useState(false); // mobile menu
    const [contactOpen, setContactOpen] = useState(false);
    useEffect(() => {
        document.body.style.overflow = loginOpen ? "hidden" : "auto";
    }, [loginOpen]);
    useEffect(() => {
        if (loginOpen || contactOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [loginOpen, contactOpen]);

    return (
        // <nav className="sticky top-0 left-0 w-full z-50 bg-transparent   px-4 py-4">

        <nav className=" fixed  top-0 left-0 w-full z-50  px-4 py-4">
            <div className="absolute inset-0 bg-transparent backdrop-blur-md -z-10" />
            {/* <div className="max-w-7xl  mx-auto flex items-center justify-between"> */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold">
                        <img src="/logo.png" alt="Logo" className="h-14" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-12 font-medium text-black">
                    <li>
                        <Link to="/producs" className="transition">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="transition">
                            About
                        </Link>
                    </li>
                    <li>
                        <button
                            onClick={() => setContactOpen(true)}
                            className="text-black"
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Right Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/cart">
                        <Icon icon="mynaui:cart" className="text-2xl text-black cursor-pointer" />
                    </Link>

                    <button
                        onClick={() => setLoginOpen(true)}
                        className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-3xl hover:bg-gray-100 transition"
                    >
                        <Icon icon="iconamoon:profile-light" className="text-xl text-black" />
                        Login
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button onClick={() => setOpen(!open)}>
                        <Icon
                            icon={open ? "mdi:close" : "mdi:menu"}
                            className="text-3xl text-black"
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div
                    className="fixed inset-0 z-40 top-[0%]"
                    onClick={() => setOpen(false)} // outside click closes menu
                >
                    <div
                        className="absolute top-20 right-4 left-4 
            bg-white/90 backdrop-blur rounded-lg p-4 space-y-2 shadow-lg
            md:hidden"
                        onClick={(e) => e.stopPropagation()} // inside click stays open
                    >
                        <Link
                            to="/producs"
                            onClick={() => setOpen(false)}
                            className="block px-2 py-2 hover:bg-gray-100 rounded"
                        >
                            Product
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setOpen(false)}
                            className="block px-2 py-2 hover:bg-gray-100 rounded"
                        >
                            About
                        </Link>

                        <button
                            onClick={() => {
                                setContactOpen(true);
                                setOpen(false);
                            }}
                            className="block px-2 py-2 hover:bg-gray-100 rounded-3xl w-full text-left"
                        >
                            Contact
                        </button>

                        <button
                            onClick={() => {
                                setLoginOpen(true);
                                setOpen(false);
                            }}
                            className="flex items-center justify-center gap-2 w-full bg-black text-white py-2 rounded"
                        >
                            <Icon icon="iconamoon:profile-light" className="text-xl text-white" />
                            Login
                        </button>
                    </div>
                </div>
            )}
            {/* Contact Modal */}
            {contactOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]"
                    onClick={() => setContactOpen(false)}
                >
                    <div
                        className="bg-white w-full
            max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl
            rounded-3xl shadow-lg
            max-h-[90vh] overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* ❌ CLOSE BUTTON */}
                        <button
                            onClick={() => setContactOpen(false)}
                            className="absolute top-4 right-4 text-3xl text-gray-500 hover:text-black"
                        >
                            ×
                        </button>

                        {/* CONTENT */}
                        <div className="flex flex-col md:flex-row items-center justify-center px-6 py-8 md:p-12">

                            {/* LEFT IMAGE */}
                            <div className="hidden md:flex md:w-1/2 justify-center">
                                <img
                                    src="/contact.png"
                                    alt="Contact"
                                    className="w-full h-[450px] object-cover -translate-x-12"
                                />
                            </div>

                            {/* RIGHT FORM */}
                            <div className="w-full md:w-1/2 max-w-xl md:pl-12">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mt- font-rethink text-center md:text-left">
                                    CONTACT US
                                </h2>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full border-b border-black placeholder:text-[#666666] focus:outline-none py-2"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full border-b border-black placeholder:text-[#666666] focus:outline-none py-2"
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Contact No"
                                        className="w-full border-b text-[#666666] placeholder:text-[#666666] border-black focus:outline-none py-2"
                                    />
                                </div>

                                <div className="mb-8">
                                    <textarea
                                        placeholder="Message"
                                        className="w-full border-b text-[#666666] placeholder:text-[#666666] border-black focus:outline-none    placeholder:relative
            placeholder:top-3"
                                    />
                                </div>


                                <button className="w-full bg-black text-white py-3 md:mt-20 flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                                    CONTACT US <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Login Modal */}
            {loginOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setLoginOpen(false)}
                >
                    <div
                        className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg 
            p-6 sm:p-20 sm:pl-0 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLoginOpen(false)}
                            className="hidden md:block absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
                        >
                            ×
                        </button>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                            {/* LEFT IMAGE */}
                            <div className="-ml-0  overflow-hidden hidden md:block">
                                <img
                                    src="/contact.png"
                                    alt="Winter Comfort"
                                    className="w-full h-64 sm:h-96 md:w-[150%] md:h-[450px] object-cover"
                                />
                            </div>

                            {/* RIGHT LOGIN CARD */}
                            <div className="border border-[#E4E7E9] rounded-md p-6 sm:p-10 
                font-rethink sm:h-[80%] w-full relative">

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
                                        className="w-full border border-gray-200 rounded-md px-4 py-3 
                            focus:outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                {/* OTP */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <label className="text-sm text-[#191C1F]">OTP</label>
                                        <button className="text-xs text-green-500 hover:underline">
                                            Didn’t Received? Resend
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-200 rounded-md px-4 py-3 
                            focus:outline-none focus:ring-1 focus:ring-black"
                                    />
                                </div>

                                {/* LOGIN BUTTON */}
                                <button className="w-full bg-black text-white py-3 mt-8 rounded-md 
                    flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                                    LOGIN <span className="text-lg">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </nav>
    );
};

export default Navbar;
