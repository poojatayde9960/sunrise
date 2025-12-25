import React from 'react';
import { CheckCircle, ShoppingCart, CreditCard, Truck, PlayCircle } from 'lucide-react';
import { GiPayMoney } from 'react-icons/gi';

const OrderingProcess = () => {
  const steps = [
    {
      id: "01",
      title: "Select Your Product",
      description: "Browse Our Range Of Room Heaters And Geysers And Choose The Product That Fits Your Needs.",
      icon: <CheckCircle className="w-5 h-5 text-white" />,
    },
    {
      id: "02",
      title: "Add To Cart",
      description: "Add The Selected Product To Your Cart And Proceed To Checkout.",
      icon: <ShoppingCart className="w-5 h-5 text-white" />,
    },
    {
      id: "03",
      title: "Make Payment",
      description: "Choose Cash On Delivery Or Prepaid Payment For A Secure Checkout Experience.",
      icon: <GiPayMoney className="w-5 h-5 text-white" />,
    },
    {
      id: "04",
      title: "Get It Delivered",
      description: "We Deliver Your Product Safely To Your Doorstep Anywhere In India.",
      icon: <Truck className="w-5 h-5 text-white" />,
    },
  ];

  return (
    <section className="bg-white   py-8 px-6 sm:px-6 md:px-[64px] font-rethink text-black">
      <div className="max-w-10xl mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-28">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-gray-400" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] border-b-2 border-black pb-0.5">
                How to Order
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold uppercase leading-[0.95] tracking-tighter">
              Easy Ordering <br /> Process
            </h2>
          </div>

          <p className="text-[#666666] text-[10px] sm:text-xs lg:text-[15xl]   md:max-w-[240px] 
                        mt-6 md:mt-10 font-semibold uppercase leading-tight tracking-tight">
            From Selection To Delivery — Simple, Fast, And Secure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="

          grid 
          grid-cols-1 
          md:grid-cols-2 
          gap-y-20 sm:gap-y-28 md:gap-y-32 
          gap-x-12 md:gap-x-20
          ml-0 sm:ml-0 lg:ml-16 
        ">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`
                flex items-start gap-6 sm:gap-10
                ${index < 2 ? "lg:ml-12" : "lg:-ml-10"}
              `}
            >

              {/* Step Number */}
              <div className="relative shrink-0 pt-2">
                <span className="text-5xl sm:text-6xl md:text-7xl 
                                font-semibold tracking-tighter leading-none ">
                  {step.id}
                </span>
                <div className="absolute -bottom-1 left-0 w-full h-[4px] bg-black"></div>
              </div>

              {/* Card Container */}
              <div className="relative w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px]">

                {/* Back Gray Box */}
                <div className="absolute top-2 rotate-6 left-3 sm:left-4 
                                w-full h-full bg-gray-200 border border-gray-300">
                </div>

                {/* Main White Card */}
                <div className="relative -rotate-3 ml-4 sm:ml-5 
                                bg-white border border-gray-200 
                                p-6 sm:p-7 md:p-8 shadow-sm">
                  <div className="bg-black w-9 h-9 sm:w-10 sm:h-10 
                                  flex items-center justify-center mb-5 sm:mb-6">
                    {step.icon}
                  </div>

                  <h4 className="text-base sm:text-lg font-semibold mb-3 uppercase tracking-tight">
                    {step.title}
                  </h4>

                  <p className="text-[#666666] text-[11px] sm:text-[12px] lg:text-[15px]
                                font-medium leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OrderingProcess;