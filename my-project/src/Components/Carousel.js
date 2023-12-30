import React, { useEffect, useState } from 'react';
import img1 from "../Assets/Images/Carouselimg1.jpg";
import img2 from "../Assets/Images/Carouselimg2.jpg";
import img3 from "../Assets/Images/Carouselimg3.jpg";

const Carousel = () => {
  const images = [img1, img2, img3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <>
      <div className="relative w-full" data-carousel="static">
        <div className="relative h-56 overflow-hidden md:h-96">
          {images.map((image, index) => (
            <div
              key={index}
              className={`duration-700 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
              data-carousel-item={index === activeIndex ? 'active' : ''}
              style={{
                position: 'absolute',
                width: '100%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'opacity 0.7s ease-in-out',
              }}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="block w-full"
              />
            </div>
          ))}
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          {/* Previous button content */}
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          {/* Next button content */}
        </button>
      </div>
    </>
  );
};

export default Carousel;
