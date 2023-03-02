import React, { useState, useEffect } from "react";

import "./ImageSlider.css";

const Indicator = ({ currenSlide, amountSlides, nextSlide }) => {
  return (
    <div className="indicatorWrapper">
      {Array(amountSlides)
        .fill(1)
        .map((_, i) => (
          <div
            className="dot"
            key={i}
            style={{
              background: currenSlide === i ? `#ee82ee` : `transparent`,
            }}
            onClick={() => nextSlide(i)}
          ></div>
        ))}
    </div>
  );
};

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
      <Indicator
        currenSlide={currenSlide}
        amountSlides={images.length}
        nextSlide={nextSlide}
      />
    </div>
  );
};

export default ImageSlider;
