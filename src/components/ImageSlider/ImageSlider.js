import React, { useState, useEffect } from "react";

import "./ImageSlider.css";

const ImageSlider = ({ images = [], autoPlayTime = 3000, ...props }) => {
  const [currenSlide, setCurrentSlide] = useState(0);

  const nextSlide = (slideIndex = currenSlide + 1) => {
    const currenSlideIndex = slideIndex >= images.length ? 0 : slideIndex;
    setCurrentSlide(currenSlideIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, autoPlayTime);

    return () => clearTimeout(timer);
  }, [currenSlide]);

  return (
    <div className="image_slider" {...props}>
      {images.map((item, index) => (
        <div
          className="slide"
          key={index}
          style={{
            backgroundImage: `url(${item})`,
            marginLeft: index === 0 ? `-${currenSlide * 100.9}%` : null,
          }}
        ></div>
      ))}
    </div>
  );
};

export default ImageSlider;
