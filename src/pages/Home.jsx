import React, { useEffect, useState } from "react"
import bg from "../../public/backimg.png"
import geyserImg from "../../public/1 (3).png"
import heaterImg from "../../public/1 (4).png"

const slides = [
    {
        title: "GEYSER",
        heading: "Smart Hot Water. Smarter Living.",
        image: geyserImg,
        leftTag: "Smart Temperature Control",
        rightTag: "Energy Efficient Technology",
        desc: "Control temperature, save energy, and enjoy comfort with next-gen smart geysers."
    },
    {
        title: "HEATER",
        heading: "Room Heaters That Care for Comfort",
        image: heaterImg,
        leftTag: "Auto Cut-Off Safety",
        rightTag: "Shockproof Design",
        desc: "Warmth that protects your family, saves energy, and lasts longer."
    }
]

const Home = () => {
    const [current, setCurrent] = useState(0)
    const [animate, setAnimate] = useState(false)

    // 🔁 AUTO CAROUSEL – 5 SECONDS
    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(true)
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % slides.length)
                setAnimate(false)
            }, 700) // animation duration
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    const slide = slides[current]

    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* BACKGROUND */}
            <img
                src={bg}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* DOTS */}
            <div className="absolute top-6 left-1/2 mt-20 -translate-x-1/2 z-20 flex gap-2">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`w-2.5 h-2.5 rounded-full transition
                        ${current === i ? "bg-black" : "bg-black/30"}`}
                    />
                ))}
            </div>

            {/* WATERMARK */}
            <h1
                className="absolute top-20 md:top-10 left-1/2 -translate-x-1/2
                text-[60px] sm:text-[100px] md:text-[180px] lg:text-[220px] xl:text-[250px] 2xl:text-[300px]
                font-bold tracking-widest text-black/5 select-none"
            >
                {slide.title}
            </h1>

            {/* MAIN CONTENT */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 h-full">
                <div className="grid grid-cols-1 md:grid-cols-3 items-center h-full gap-6 sm:gap-8 md:gap-10">

                    {/* LEFT CONTENT */}
                    <div
                        className={`order-2 md:order-1 text-center md:text-left
                        transition-all duration-700
                        ${animate ? "-translate-x-10 opacity-0" : "translate-x-0 opacity-100"}`}
                    >
                        <h4 className="font-semibold mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
                            {slide.heading}
                        </h4>

                        <button className="px-5 py-2 sm:px-6 sm:py-3 bg-white rounded-full text-xs sm:text-sm md:text-base mb-8">
                            Shop Now
                        </button>

                        <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
                            <span className="bg-white px-3 sm:px-4 py-1 border-2 border-amber-400 rounded-full text-[10px] sm:text-xs">
                                {slide.leftTag}
                            </span>
                            <div className="w-10 sm:w-16 h-[2px] bg-amber-400" />
                        </div>
                    </div>

                    {/* CENTER IMAGE */}
                    <div className="order-1 md:order-2 flex justify-center relative overflow-hidden">
                        <img
                            src={slide.image}
                            alt="product"
                            className={`transition-all duration-700 ease-in-out
                                ${animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}
                                ${current === 1
                                    ? `
                                        w-[180px] sm:w-[260px] md:w-[360px] lg:w-[690px] xl:w-[560px] 2xl:w-[1080px]
                                        h-auto lg:h-[580px] xl:h-[500px] 2xl:h-[650px]
                                    `
                                    : `
                                        w-[140px] sm:w-[180px] md:w-[220px] lg:w-[280px] xl:w-[320px] 2xl:w-[500px]
                                        h-auto lg:h-[360px] xl:h-[320px] 2xl:h-[500px]
                                    `
                                }
                            `}
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        className={`order-3 text-center md:text-right
                        transition-all duration-700
                        ${animate ? "translate-x-10 opacity-0" : "translate-x-0 opacity-100"}`}
                    >
                        <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-end mb-4 sm:mb-6">
                            <div className="w-10 sm:w-16 h-[2px] bg-amber-400" />
                            <span className="bg-white px-3 sm:px-4 py-1 border-2 border-amber-400 rounded-full text-[10px] sm:text-xs">
                                {slide.rightTag}
                            </span>
                        </div>

                        <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700 leading-relaxed">
                            {slide.desc}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home