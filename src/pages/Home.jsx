import React, { useEffect, useState } from "react"
import bg from "../../public/backimg.png"
import geyserImg from "../../public/1 (3).png"
import heaterImg from "../../public/1 (4).png"

const slides = [
    {
        title: "GEYSER",
        heading: "Smart Hot Water. Smarter Living.",
        image: geyserImg,
        imageClass: "w-[200px] sm:w-[260px] md:w-[340px] lg:w-[380px]",
        leftTag: "Smart Temperature Control",
        rightTag: "Energy Efficient Technology",
        desc: "Control temperature, save energy, and enjoy comfort with next-gen smart geysers."
    },
    {
        title: "HEATER",
        heading: "Room Heaters That Care for Comfort",
        image: heaterImg,
        // ⬇️ HEATER image mothi
        imageClass: "w-[240px] sm:w-[320px] md:w-[420px] lg:w-[480px]",
        leftTag: "Auto Cut-Off Safety",
        rightTag: "Shockproof Design",
        desc: "Warmth that protects your family, saves energy, and lasts longer."
    }
]


const Home = () => {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const slide = slides[current]

    return (
        <section className="relative w-full  min-h-screen overflow-hidden">

            {/* BACKGROUND */}
            <img
                src={bg}
                className="absolute inset-0 w-full h-full object-cover"
                alt="bg"
            />

            {/* DOTS (TOP CENTER – screenshot same) */}
            <div className="absolute top-6 left-1/2 mt-20 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`w-2.5 h-2.5 rounded-full cursor-pointer transition
                        ${current === i ? "bg-black" : "bg-black/30"}`}
                    />
                ))}
            </div>

            {/* WATERMARK TEXT */}
            <h1 className="
                absolute top-20 md:top-10 left-1/2 -translate-x-1/2
                text-[80px] sm:text-[120px] md:text-[220px]
                font-bold tracking-widest text-black/5 select-none
            ">
                {slide.title}
            </h1>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full">

                <div className="
                    grid grid-cols-1 md:grid-cols-3
                    items-center
                    min-h-screen
                    gap-10
                ">

                    {/* LEFT CONTENT */}
                    <div className="order-2 md:order-1 text-center md:text-left">
                        <h4 className="font-semibold text-base sm:text-lg mb-4">
                            {slide.heading}
                        </h4>

                        <button className="px-6 py-2 bg-white rounded-full text-sm mb-8">
                            Shop Now
                        </button>

                        <div className="flex items-center justify-center md:justify-start gap-3">
                            <span className="bg-white px-4 py-1 border-2 border-amber-400 rounded-full text-xs">
                                {slide.leftTag}
                            </span>
                            <div className="w-16 h-[2px] bg-amber-400" />
                        </div>
                    </div>

                    {/* CENTER IMAGE (PEDESTAL STYLE – FIXED) */}
                    <div className="order-1 md:order-2 flex justify-center relative">
                        <img
                            key={current}
                            src={slide.image}
                            alt="product"
                            className={`
            transition-all duration-700
            ${current === 1
                                    ? "w-[340px] sm:w-[440px] md:w-[600px] lg:w-[680px]"   // 🚀 HEATER BIG
                                    : "w-[160px] sm:w-[200px] md:w-[240px] lg:w-[220px]"   // 🔽 GEYSER SMALLER (DESKTOP)
                                }
        `}
                        />
                    </div>




                    {/* RIGHT CONTENT */}
                    <div className="order-3 text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end gap-3 mb-6">
                            <div className="w-16 h-[2px] bg-amber-400" />
                            <span className="bg-white px-4 py-1 border-2 border-amber-400 rounded-full text-xs">
                                {slide.rightTag}
                            </span>
                        </div>

                        <p className="text-sm font-semibold text-gray-700 leading-relaxed">
                            {slide.desc}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home
