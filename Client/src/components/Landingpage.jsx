// LandingPage.jsx
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const slides = [
  { id: 1, content: "Welcome to Our Website", description: "Discover amazing features and services.", image: "https://i.postimg.cc/GtWN8w7F/masaaki-komori-y-IHr-Ngky-TGc-unsplash.webp" },
  { id: 2, content: "Our Services", description: "Explore our range of professional services.", image: "https://i.postimg.cc/kG6zgXcM/michael-schaffler-m-RTJ1jp-H8-XQ-unsplash.webp" },
  { id: 3, content: "Get In Touch", description: "Contact us for more information and inquiries.", image: "https://i.postimg.cc/1Rb5c8bH/engin-akyurt-M2-W0-J6-Sqi-Sg-unsplash-1.webp" }
];

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-gray-900 text-white">
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="flex flex-col items-center justify-center h-full p-8 bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.content}</h1>
              <p className="text-lg md:text-2xl mb-6">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute bottom-8 text-white bg-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Learn More
      </button>
    </div>
  );
};

export default LandingPage;
