import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg",
    "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg",
    "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg",
    "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg",
    "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg",
    "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg",
    "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg",
  ];

  const slidesToShow = 4; // Number of slides to show at once
  const slideWidth = 100 / slidesToShow;
  const intervalDuration = 2000; // Duration in milliseconds between automatic slide transitions

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, intervalDuration);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  // Duplicate images to ensure continuous scrolling
  const duplicatedImages = images.concat(images).concat(images);

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === duplicatedImages.length - slidesToShow
        ? 0
        : currentSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0
        ? duplicatedImages.length - slidesToShow
        : currentSlide - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex absolute top-0 left-0 right-0 justify-between px-4 py-2 z-10">
        <button
          onClick={prevSlide}
          className=" hidden bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className=" hidden bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
      >
        {duplicatedImages.map((imageUrl, index) => (
          <div key={index} className={`w-${slideWidth} flex-none`}>
            <img src={imageUrl} className="w-full" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
