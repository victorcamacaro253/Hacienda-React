import { useState,useEffect } from 'react';
import './BreedCarousel.css'; // Make sure to create this CSS file for carousel-specific styles

const BreedCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

    // Automatically transition every 5 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        goToNext(); // Go to the next slide automatically
      }, 4000); // 5000ms = 5 seconds
  
      return () => clearInterval(interval); // Clean up interval on component unmount
    }, [images.length]); // Re-run effect if images length changes
  

  return (
    <div className="breed-carousel">
      <div className="carousel-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Breed Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <button className="carousel-button prev" onClick={goToPrevious} aria-label="Previous slide">
        &#10094; {/* Left arrow */}
      </button>
      <button className="carousel-button next" onClick={goToNext} aria-label="Next slide">
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default BreedCarousel;
