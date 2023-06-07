'use client'
import { useState, useEffect } from 'react';

const CarouselSlider = ({ slides, interval, slidesToShow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [slides.length, interval]);

  return (
    <div className="carousel-slider relative">
      <div className="flex overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide w-${100 / slidesToShow} transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}
          >
            <div className='w-full bg-red-400'>{slide}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;
