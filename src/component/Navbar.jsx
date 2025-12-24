import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ContactUs from "../pages/ContactUs";
import LoginPage from "../pages/LoginPage";

const Navbar = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const [open, setOpen] = useState(false); // mobile menu
    const [contactOpen, setContactOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

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
                    className="fixed inset-0 z-40"
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
            {/* Contact Modal */}
            {contactOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={() => setContactOpen(false)}
                >
                    <div
                        className="bg-white relative w-full 
            max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl 
            mx-auto shadow-lg overflow-y-auto 
            rounded-3xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ContactUs />
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
                        className="bg-white relative w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-6xl mx-auto shadow-lg overflow-y-auto rounded-2xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <LoginPage />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
