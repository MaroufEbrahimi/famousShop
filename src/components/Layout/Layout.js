import React from "react";

import Wrapper from "../../HOC/Wrapper";
import ImageSlider from "../ImageSlider/ImageSlider";

import image1 from "../../assets/slideShow_img/slideshow1.jpg";
import image2 from "../../assets/slideShow_img/slideshow2.jpg";
import image3 from "../../assets/slideShow_img/slideshow3.jpg";
import image4 from "../../assets/slideShow_img/slideshow4.jpg";

const Layout = (props) => {
  return (
    <Wrapper>
      <ImageSlider images={[image1, image2, image3, image4]} />
      <main className="content">{props.children}</main>
    </Wrapper>
  );
};

export default Layout;
