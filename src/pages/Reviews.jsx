import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, PlayCircle, Star } from 'lucide-react';

const TestimonialCard = ({ name, image, text }) => (
  <div className="relative mt-12 w-full px-4">
    <div className="bg-white border border-gray-100 shadow-sm p-8 pt-16 rounded-sm text-left h-full flex flex-col justify-between min-h-[280px]">
      <div>
        <h4 className="font-bold text-gray-900 text-lg leading-tight">{name}</h4>
        <p className="text-gray-600 text-[14px] leading-relaxed italic mt-4 mb-6 line-clamp-4">
          "{text}"
        </p>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
    {/* Floating Profile Image */}
    <div className="absolute -top-10 left-12">
      <div className="w-20 h-20 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

export default function SimpleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Neha S. Mumbai",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      text: "Modern look and smart performance. The smart geyser looks stylish and works efficiently. Temperature control is very smooth. Happy with the purchase."
    },
    {
      name: "Amit R. Pune",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      text: "Excellent heating and very safe to use. The room heater warms the room quickly and feels very safe. Perfect for winter nights. Totally worth the price."
    },
    {
      name: "Suresh K. Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      text: "The build quality is amazing. I've been using the geyser for 3 months now, and it's very energy efficient. Highly recommended for families."
    },
    {
      name: "Suresh K. Delhi",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      text: "The build quality is amazing. I've been using the geyser for 3 months now, and it's very energy efficient. Highly recommended for families."
    }
  ];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-6 md:px-[64px] font-sans">
      <div className="max-w-10xl mx-auto relative">
        
        {/* Header Section */}
        <div className="flex items-center gap-2 mb-6">
          <PlayCircle size={18} className="text-gray-800" />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-800">Testimonials</span>
        </div>

        <h2 className="text-4xl md:text-7xl font-semibold text-gray-900 mb-12 leading-tight">
          WHAT OUR <br /> CUSTOMERS SAY ?
        </h2>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Slider Wrapper */}
          <div 
            className="flex transition-transform duration-500 p-10 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, index) => (
              <div key={index} className="w-full flex-shrink-0 md:w-1/2">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>

          {/* Controls - Left Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-black rounded-full p-2 hover:bg-black hover:text-white transition-all shadow-md"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Controls - Right Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white border border-black rounded-full p-2 hover:bg-black hover:text-white transition-all shadow-md"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <div 
              key={i} 
              className={`h-2 w-2 rounded-full transition-all ${currentIndex === i ? 'bg-black w-6' : 'bg-gray-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}