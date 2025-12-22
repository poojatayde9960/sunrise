import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=" p-5">
            {/* Top Section */}
            <div className="bg-gray-900  text-white px-6 py-10 md:flex md:justify-between md:items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold mb-5">
                        READY FOR A WARMER,<br />MORE COMFORTABLE <br /> WINTER?
                    </h2>
                    <button className="bg-white text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                        Shop Now
                    </button>
                </div>
                <div className="max-w-sm mt-20">
                    <h3 className="font-semibold mb-2">Between Comfort & Care</h3>
                    <p className="text-gray-300 text-sm">
                        Explore safe, reliable room heaters and geysers designed for everyday Indian homes.
                    </p>
                </div>
            </div>

            {/* Middle Section */}
            <div className="px-6 py-10 md:flex md:justify-between md:items-start">
                {/* Information */}
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-3">Information</h3>
                    <ul className="space-y-1 text-gray-700">
                        <li className="hover:underline cursor-pointer">Home</li>
                        <li className="hover:underline cursor-pointer">About</li>
                        <li className="hover:underline cursor-pointer">Products</li>
                        <li className="hover:underline cursor-pointer">How to Order?</li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="mb-6 md:mb-0">
                    <h3 className="font-semibold mb-3">Contact</h3>
                    <ul className="space-y-1 text-gray-700">
                        <li>+91 6565 655 555</li>
                        <li>laxmisun@gmail.com</li>
                        <li>Golden City Center, Chhatrapati sambhajinagar, 431001</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="font-semibold mb-3">Social Media Links</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition">
                            <FaWhatsapp />
                        </a>
                        <a href="#" className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="bg-gray-700 text-white p-2 rounded hover:bg-gray-600 transition">
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-sm text-gray-500">
                <p>©2025 All Rights Reserved</p>
                <p className="mt-2 md:mt-0 flex items-center space-x-2">
                    <span className="text-gray-900 font-semibold">Developed By</span>
                    <img src="./techsurya.png" className="h-16 w-20 object-contain" alt="TechSurya Logo" />
                </p>

            </div>
        </footer>
    );
};

export default Footer;
