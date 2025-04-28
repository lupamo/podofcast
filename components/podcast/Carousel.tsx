// components/Carousel.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CarouselItem {
  id: string;
  image: string;
  title: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoplaySpeed?: number;
}

const Carousel = ({ items, autoplaySpeed = 1000 }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Setup auto-scrolling
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoplaySpeed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [items.length, autoplaySpeed]);

  // Scroll carousel to current index
  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.scrollWidth / items.length * currentIndex;
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }, [currentIndex, items.length]);

  return (
    <div className="w-full overflow-hidden relative">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="min-w-[250px] sm:min-w-[300px] md:min-w-[320px] h-[400px] mx-3 flex-shrink-0 snap-center relative rounded-lg overflow-hidden group"
          >
            <Image 
              src={item.image}
              alt={item.title}
              fill
              className="width-[250px] object-cover brightness-90 group-hover:brightness-75 transition-all duration-300"
              sizes="(max-width: 768px) 250px, 320px"
            />
            
            {/* Decorative elements like in your image */}
            <div className="absolute bottom-1/2 left-1/4 w-8 h-8 bg-black opacity-80 rotate-45"></div>
            {item.title === "Perplexed Mind" && (
              <div className="absolute top-1/3 left-1/4 w-16 h-8 bg-[#FF5C5C] rounded-full opacity-90"></div>
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-[#CD4631]' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;