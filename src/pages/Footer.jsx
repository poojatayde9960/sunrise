import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#F7F7F7] font-rethink px-4 py-8">

            {/* Top Section */}
            <div className="bg-[#1A1919] text-white px-6 py-10 flex flex-col md:flex-row md:justify-between md:items-center">
                {/* Left */}
                <div className="mb-8 md:mb-0 md:ml-7 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-5">
                        READY FOR A WARMER,<br />
                        MORE COMFORTABLE <br />
                        WINTER?
                    </h2>
                    <Link to="/producs">
                        <button className="bg-white text-gray-900 px-10 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                            Shop Now
                        </button>
                    </Link>
                </div>

                {/* Right */}
                <div className="max-w-sm text-center md:mt-28 md:text-left">
                    <h3 className="font-semibold mb-2 text-lg">
                        Between Comfort & Care
                    </h3>
                    <p className="text-[#FFFFFF8F] text-sm">
                        Explore safe, reliable room heaters and geysers designed for everyday Indian homes.
                    </p>
                </div>
            </div>

            {/* Middle Section */}
            <div className="px-6 py-10 flex md:ml-12 flex-col md:flex-row md:justify-between gap-10">

                {/* Information */}
                <div className="text-center md:text-left">
                    <h3 className="font-bold text-xl mb-3">Information</h3>
                    <ul className="space-y-1 text-black font-medium">
                        <li><Link to="/" className="hover:underline">Home</Link></li>
                        <li><Link to="/about" className="hover:underline">About</Link></li>
                        <li><Link to="/producs" className="hover:underline">Products</Link></li>
                        <li><Link to="/contact" className="hover:underline">How to Order?</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-center md:text-left md:mr-[35%]">
                    <h3 className="font-bold text-xl mb-3">Contact</h3>
                    <ul className="space-y-1 text-black font-medium">
                        <li>
                            <a
                                href="tel:+916565655555"
                                className="hover:underline cursor-pointer"
                            >
                                +91 6565 655 555
                            </a>
                        </li>

                        <li>
                            <a
                                href="mailto:laxmisun@gmail.com"
                                className="hover:underline cursor-pointer"
                            >
                                laximsun@gmail.com
                            </a>
                        </li>

                        <li>
                            Golden City Center,<br />
                            Chhatrapati Sambhajinagar,<br />
                            431001
                        </li>
                    </ul>

                </div>

                {/* Social Media */}
                <div className="text-center md:mt-20">
                    <h3 className="font-semibold text-base mb-4">
                        SOCIAL MEDIA LINKS
                    </h3>
                    <div className="flex justify-center gap-4">
                        <a className="bg-[#1A1919] flex items-center justify-center text-white h-12 w-12 hover:bg-gray-600 transition" href="https://wa.me/919999999999" target="_blank">
                            <Icon icon="ri:whatsapp-fill" width={26} />
                        </a>
                        <a className="bg-[#1A1919] flex items-center justify-center text-white h-12 w-12 hover:bg-gray-600 transition" href="https://instagram.com" target="_blank">
                            <Icon icon="ri:instagram-fill" width={26} />
                        </a>
                        <a className="bg-[#1A1919] flex items-center justify-center text-white h-12 w-12 hover:bg-gray-600 transition" href="https://facebook.com" target="_blank">
                            <Icon icon="ic:baseline-facebook" width={26} />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="border-t border-[#1A1919] px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center text-center gap-4">
                <p className="text-[#1A1919] text-base lg:ml-12 font-semibold">
                    ©2025 All Rights Reserved
                </p>

                <div className="flex items-center justify-center gap-2">
                    <span className="text-gray-900 font-semibold">Developed By</span>
                    <img
                        src="./techsurya.png"
                        className="h-12 w-20 object-contain"
                        alt="TechSurya Logo"
                    />
                </div>
            </div>

        </footer>
    );
};

export default Footer;
