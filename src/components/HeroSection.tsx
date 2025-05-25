'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://ext.same-assets.com/1977637929/371985817.jpeg',
      title: 'The Lost Chambers Aquarium',
      subtitle: "Water meets wonder at Atlantis Sanya's incredible open-air aquarium",
      buttonText: 'EXPLORE',
      buttonLink: '#'
    },
    {
      id: 2,
      image: 'https://ext.same-assets.com/1977637929/782375640.jpeg',
      title: 'Atlantis Sanya',
      subtitle: 'Where Water Meets Wonder',
      buttonText: 'Play Video',
      buttonLink: '#',
      hasPlayButton: true
    },
    {
      id: 3,
      image: 'https://ext.same-assets.com/1977637929/4277641948.jpeg',
      title: 'Stay With Us',
      subtitle: 'Escape to a world where water meets wonder.',
      buttonText: 'EXPLORE',
      buttonLink: '#'
    },
    {
      id: 4,
      image: 'https://ext.same-assets.com/1977637929/4285903430.jpeg',
      title: 'A World Of Restaurants',
      subtitle: 'Indulge in extraordinary dining experiences at Atlantis Sanya',
      buttonText: 'EXPLORE',
      buttonLink: '#'
    },
    {
      id: 5,
      image: 'https://ext.same-assets.com/1977637929/399400618.jpeg',
      title: 'Aquaventure Waterpark',
      subtitle: 'Plan the ultimate day of thrills and spills at Aquaventure Waterpark',
      buttonText: 'EXPLORE',
      buttonLink: '#'
    },
    {
      id: 6,
      image: 'https://ext.same-assets.com/1977637929/399400618.jpeg',
      title: 'Dolphin Cay',
      subtitle: 'Have an up-close and personal meet-and-greet with our dolphins and sea lions through our animal interaction programmes!',
      buttonText: 'EXPLORE',
      buttonLink: '#'
    }
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-4xl mx-auto px-4">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl luxury-text mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded transition-colors duration-300 flex items-center justify-center mx-auto space-x-2">
                    {slide.hasPlayButton && <Play className="w-5 h-5" />}
                    <span>{slide.buttonText}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;