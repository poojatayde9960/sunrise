import React from "react";

const OrderSuccess = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">

            <div className="text-center">

                {/* Celebration Icon */}
                <div className="text-5xl mb-6">
                    🎉
                </div>

                {/* Heading */}
                <h2 className="text-xl font-semibold mb-2">
                    Congratulations !!
                </h2>

                {/* Sub Text */}
                <p className="text-sm text-gray-700 mb-1">
                    🎉 <span className="font-medium">Order Placed Successfully!</span>
                </p>

                <p className="text-sm text-gray-500">
                    Your warm journey begins now. Order ID: <span className="font-medium">#TS984562</span>
                </p>

            </div>
        </div>
    );
};

export default OrderSuccess;
