import React, { useState } from "react";

const ImageSlider = ({ images = [] }) => {
  const [currenSlide, setCurrentSlide] = useState(0);

  return (
    <div className="image_slider" {...props}>
      {images.map((item, index) => (
        <div className="slide" key={index}></div>
      ))}
    </div>
  );
};

export default ImageSlider;
