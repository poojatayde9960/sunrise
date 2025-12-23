import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import ContactUs from "../pages/ContactUs";
import LoginPage from "../pages/LoginPage";

const Navbar = () => {
    const [loginOpen, setLoginOpen] = useState(false);

    const [open, setOpen] = useState(false);
    const [contactOpen, setContactOpen] = useState(false); // 
    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center">
                    <Link to="/" className="text-2xl font-bold">
                        <img src="/logo.png" alt="Logo" className="h-14" />
                    </Link>
                </div>

                {/* Menu - center */}
                <ul className="hidden md:flex items-center gap-12 font-medium text-black">
                    <li>
                        <Link to="/producs" className=" transition">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="transition">
                            About
                        </Link>
                    </li>
                    <li>
                        {/* Open Contact Modal */}
                        <button
                            onClick={() => setContactOpen(true)}
                            className="text-black"
                        >
                            Contact
                        </button>
                    </li>
                </ul>

                {/* Right buttons */}
                {/* Right buttons */}
                <div className="flex items-center gap-4">
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

            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 bg-white/90 backdrop-blur rounded-lg p-4 space-y-2">
                    <Link to="/producs" className="block px-2 py-2 hover:bg-gray-100 rounded">
                        Product
                    </Link>
                    <Link to="/about" className="block px-2 py-2 hover:bg-gray-100 rounded">
                        About
                    </Link>
                    <button
                        onClick={() => setContactOpen(true)}
                        className="block px-2 py-2 hover:bg-gray-100 rounded"
                    >
                        Contact
                    </button>
                    <Link
                        to="/login"
                        className="flex items-center justify-center gap-2  text-white py-2 rounded-md"
                    >
                        <Icon icon="iconamoon:profile-light" className="text-xl text-white" />
                        Login
                    </Link>
                </div>
            )}

            {/* Contact Modal */}
            {contactOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
                    onClick={() => setContactOpen(false)} // overlay pe click → close modal
                >
                    <div
                        className="bg-white  relative w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto shadow-lg overflow-y-auto max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()} // modal ke andar click → close na ho
                    >
                        {/* Contact Component */}
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
                        className="bg-white relative w-full max-w-sm sm:max-w-md md:max-w-3xl lg:max-w-5xl mx-auto shadow-lg overflow-y-auto rounded-2xl max-h-[90vh]"
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



