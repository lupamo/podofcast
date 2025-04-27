import React, { useState, useEffect, useRef } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1); // Initial number of visible slides
  const carouselRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateVisibleSlides = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        // Adjust these breakpoints and calculations as needed
        if (width >= 1200) {
          setVisibleSlides(3);
        } else if (width >= 768) {
          setVisibleSlides(2);
        } else {
          setVisibleSlides(1);
        }
      }
    };

    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);

    return () => {
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, []);

  useEffect(() => {
    const resetTimer = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    if (interval > 0 && images.length > visibleSlides) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      resetTimer();
    };
  }, [currentIndex, interval, images.length, visibleSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const calculateTransform = () => {
    return `translateX(-${currentIndex * (100 / visibleSlides)}%)`;
  };

  return (
    <div className={styles.carousel} ref={carouselRef}>
      <div
        className={styles.slides}
        style={{
          transform: calculateTransform(),
          width: `${images.length * (100 / visibleSlides)}%`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.slide}
            style={{ width: `${100 / visibleSlides}%` }}
          >
            <img src={image} alt={`Carousel Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {images.length > visibleSlides && (
        <>
          <button className={styles.prevButton} onClick={goToPrevious}>
            &#10094;
          </button>
          <button className={styles.nextButton} onClick={goToNext}>
            &#10095;
          </button>
          <div className={styles.dots}>
            {Array.from({ length: images.length }).map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Carousel;