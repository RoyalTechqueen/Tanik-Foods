import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "./meat.jpg",
    "./multipurpose.jpg",
    "./peppersoup2.jpg",
    "./puffpuff.jpg",
    "./yaji.jpg",
    "./fish.jpg",
    "./curry.jpg",
    "./aromatic.jpg",
    "./ginger garlic.jpg",
    "./blasmin.jpg",
    "./chocolate.jpg",
    "./cinger.jpg",
    "./ginger.jpg",
    "./oatplantain.jpg",
    "./oatwheat.jpg",
    "./pancake.jpg",
    "./red velvet.jpg",
    "./vanilla.jpg",
  ];

  const slidesToShow = 4; // Default number of slides to show at once
  const slideWidth = 100 / slidesToShow;
  const intervalDuration = 2000;
   // Duration in milliseconds between automatic slide transitions

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
          className="hidden bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="hidden bg-gray-500 text-white rounded-full w-8 h-8 flex items-center justify-center focus:outline-none"
        >
          &gt;
        </button>
      </div>
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentSlide * slideWidth}%)` }}
      >
        {duplicatedImages.map((imageUrl, index) => (
          <div
            key={index}
            className={`flex-none`}
            style={{ width: `${slideWidth}%` }}
          >
            <img
              src={imageUrl}
              className="w-full h-full object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Carousel;
