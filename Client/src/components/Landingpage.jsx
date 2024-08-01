// LandingPage.jsx
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

const slides = [
  { id: 1, content: "क्या आपके पास बेचने के लिए कबाड़ है?", description: " हमें कॉल करें ", image: "https://i.postimg.cc/GtWN8w7F/masaaki-komori-y-IHr-Ngky-TGc-unsplash.webp" },
  { id: 2, content: "कुछ भी बेचें।", description: " पुराने कपड़े, अखबार, किताबें, धातुएं, प्लास्टिक।", image: "https://i.postimg.cc/kG6zgXcM/michael-schaffler-m-RTJ1jp-H8-XQ-unsplash.webp" },
  { id: 3, content: "और अपने कबाड़ के लिए सबसे अच्छे दाम पाएं।", description: "सिर्फ The Scrappers पे", image: "https://i.postimg.cc/1Rb5c8bH/engin-akyurt-M2-W0-J6-Sqi-Sg-unsplash-1.webp" }
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
              <h1 className="text-4xl md:text-6xl font-bold mb-8">{slide.content}</h1>
              <p className="text-lg md:text-2xl mb-6 bg-white opacity-75 p-4 rounded-2xl font-bold text-lime-700">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="relative top-32 text-white bg-lime-700 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
        Sell Your Scrap Now !
      </button>
    </div>
  );
};

export default LandingPage;
