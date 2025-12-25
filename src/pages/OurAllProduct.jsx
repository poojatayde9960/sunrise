import React from "react";
import { Link } from "react-router-dom";

// Individual Product Card Component
const ProductCard = ({ name, price, productImg }) => {
  return (
    <div className="flex flex-col font-rethink items-center w-full group">
      {/* 3-Layer Image Container */}
      <div className="relative w-full aspect-[5/6]  flex items-end justify-center overflow-hidden bg-[#f8f8f8]">

        {/* Layer 1: Background (Wave/Gradient Effect) */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="./product.png" className="w-full h-full" alt="stand" />
        </div>

        {/* Layer 3: Main Product Image */}
        <img
          src={productImg}
          alt={name}
          className="relative z-20 w-[70%] mb-5 transform transition-transform duration-500 "
        />
      </div>

      {/* Product Details */}
      <div className="mt-6 text-center w-full">
        <h3 className="text-gray-900 font-bold text-[18px] leading-tight">
          {name}
        </h3>
        <p className="text-gray-900 font-medium text-[30px] mt-2">
          ₹{price.toLocaleString("en-IN")}
        </p>

        {/* Add to Cart Button */}
        <Link to="/details">
          <button className="mt-4 w-[280px]  px-12 py-3 border border-gray-400 text-gray-700 font-medium text-xs lg:text-[20px] uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-300">
            + Add to Cart
          </button>
        </Link>
      </div>
    </div>
  );
};

// Main Page Component
export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Lakshmisun Instant Geyser",
      price: 25000,
      productImg: "./1 (3).png", // Yaha apni image ka link dalein
    },
    {
      id: 2,
      name: "Lakshmisun Storage Geyser",
      price: 20000,
      productImg: "1 (1).png",
    },
    {
      id: 3,
      name: "Lakshmisun Room Heater",
      price: 15000,
      productImg: "1 (4).png",
    },
  ];

  return (
    <div className="bg-white  font-rethink py-8 px-4 sm:px-6 md:px-[64px]">
      <div className="max-w-10xl mx-auto">

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tight">
            OUR <span className="border-b-4 border-black pb-1">ALL </span>PRODUCTS
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              productImg={product.productImg}
            />
          ))}
        </div>

        {/* Footer Swipe Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-800 font-semibold text-sm flex items-center justify-center gap-2">
            Swipe To See other products
            <span className="tracking-tighter font-rethink">{" >>>"}</span>
          </p>
        </div>

      </div>
    </div>
  );
}