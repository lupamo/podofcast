'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Types
interface TestimonialData {
  id: number;
  quote: string;
  author: string;
  company: string;
  image: string;
  platformIcon: string;
  platformName: string;
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
  autoScroll?: boolean;
  scrollInterval?: number;
}

const TestimonialCard: React.FC<{ testimonial: TestimonialData }> = ({ testimonial }) => {
  return (
    <div className="flex-shrink-0 w-full md:w-[500px] lg:w-[600px] p-6 mx-4 snap-center">
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="text-[#CD4631] text-6xl font-serif">"</div>
          <p className="text-lg md:text-xl mb-6">
            {testimonial.quote}
          </p>
        </div>
        
        <div className="flex items-center mt-4">
          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
            <Image 
              src={testimonial.image} 
              alt={testimonial.author} 
              width={48} 
              height={48}
              className="object-cover w-full h-full"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center">
              <span className="font-medium">{testimonial.author},</span>
              <div className="flex items-center ml-2">
                <Image 
                  src={testimonial.platformIcon} 
                  alt={testimonial.platformName} 
                  width={20} 
                  height={20}
                  className="mr-1"
                />
                <span>{testimonial.platformName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  testimonials,
  autoScroll = true,
  scrollInterval = 5000
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Auto scroll functionality
  useEffect(() => {
    if (!autoScroll) return;
    
    const interval = setInterval(() => {
      if (isDragging) return;
      
      const nextIndex = (currentIndex + 1) % testimonials.length;
      scrollToIndex(nextIndex);
      setCurrentIndex(nextIndex);
    }, scrollInterval);
    
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length, autoScroll, scrollInterval, isDragging]);
  
  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    
    const cardWidth = scrollRef.current.clientWidth;
    const scrollPosition = index * cardWidth;
    
    scrollRef.current.scrollTo({
      left: scrollPosition,
      behavior: 'smooth'
    });
  };
  
  // Mouse/touch drag scroll functionality
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };
  
  const handleDragEnd = () => {
    setIsDragging(false);
    
    if (!scrollRef.current) return;
    
    // Calculate the nearest card index after dragging
    const cardWidth = scrollRef.current.clientWidth;
    const currentScrollLeft = scrollRef.current.scrollLeft;
    const newIndex = Math.round(currentScrollLeft / cardWidth);
    
    // Snap to the nearest card
    scrollToIndex(newIndex);
    setCurrentIndex(newIndex);
  };
  
  return (
    <div className="relative w-full py-12 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
      >
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
      
      {/* Pagination dots */}
      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-[#CD4631]' : 'bg-gray-300'
            }`}
            onClick={() => {
              scrollToIndex(index);
              setCurrentIndex(index);
            }}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Example usage
const TestimonialSection: React.FC = () => {
  // Sample data - replace with your actual testimonials
  const testimonialData: TestimonialData[] = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      author: "Luna Lovegood",
      company: "",
      image: '/images/avatar-1.png', // Fixed: Use absolute path starting with /
      platformIcon: '/images/spot.png', // Fixed: Use absolute path starting with /
      platformName: "Spotify"
    },
    {
      id: 2,
      quote: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      author: "Emily Blunt",
      company: "",
      image: '/images/avatar-1.png', // Fixed: Use absolute path starting with /
      platformIcon: '/images/google-podcast.png', // Fixed: Use absolute path with real file name
      platformName: "Google Podcast"
    },
    {
      id: 3,
      quote: "Lorem ipsum dolor sit amet consectet piscing elit, sed do eiusmod tempor incidi ut labore et dolore magna aliqua.",
      author: "Michael Scott",
      company: "",
      image: '/images/avatar-2.png', // Fixed: Use absolute path starting with /
      platformIcon: '/images/apple-podcast.png', // Fixed: Use absolute path with real file name
      platformName: "Apple Podcast"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">      
      <TestimonialCarousel testimonials={testimonialData} />
    </div>
  );
};

export default TestimonialSection;