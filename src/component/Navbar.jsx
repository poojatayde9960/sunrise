import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 bg-transparent px-4 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold">
                    <img src="/logo.png" alt="Logo" className="h-14" />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 font-medium text-white">
                    <li>
                        <Link to="/producs" className="text-black">
                            Product
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-black">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-black">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Login Button */}
                <div className="hidden md:block">
                    <Link
                        to="/login"
                        className="border bg-white  text-black rounded-full px-6 py-2  transition"
                    >
                        Login
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={
                                open
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                            }
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden mt-4 bg-white/90 backdrop-blur rounded-lg p-4 space-y-2">
                    <Link to="/" className="block px-2 py-2 hover:bg-gray-100 rounded">
                        Product
                    </Link>
                    <Link to="/about" className="block px-2 py-2 hover:bg-gray-100 rounded">
                        About
                    </Link>
                    <Link to="/contact" className="block px-2 py-2 hover:bg-gray-100 rounded">
                        Contact
                    </Link>
                    <Link
                        to="/login"
                        className="block bg-indigo-600 text-white text-center py-2 rounded-md"
                    >
                        Login
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
