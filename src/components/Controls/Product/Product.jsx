import React from "react";

import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import ProductRate from "../../UI/Rating/ProductRate/ProductRate";

const Product = ({ img, price, rate, text }) => {
  return (
    <div className="products border_radius_10 position_relative">
      <div className="product_img_content position_relative">
        <img src={img} />
        <div className="product_img_content_side position_absolute display_flex flex_direction_column gap_15">
          <FontAwesomeIcon icon={faHeartCirclePlus} className="product_icon" />
          <FontAwesomeIcon icon={faShareNodes} className="product_icon" />
          <FontAwesomeIcon icon={faCartShopping} className="product_icon" />
        </div>
      </div>
      <div className="product_content">
        <div className="product_rating"></div>
        <ProductRate rate={rate} />
        <p className="product_txt text_align_center">{text}</p>
        <p className="product_price bold">
          <sup>$ </sup>
          {price}
        </p>
      </div>
    </div>
  );
};

export default Product;
