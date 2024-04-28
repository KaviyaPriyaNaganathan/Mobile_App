import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <div className="carousel-slide">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <button className="carousel-button next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
