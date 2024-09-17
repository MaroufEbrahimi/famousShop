import React from "react";

import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = ({ img, price, rate, text }) => {
  return (
    <div className="products">
      <div className="product_img_content">
        <img src={img} />
        <div className="product_img_content_side">
          <FontAwesomeIcon icon={faHeartCirclePlus} className="product_icon" />
          <FontAwesomeIcon icon={faShareNodes} className="product_icon" />
          <FontAwesomeIcon icon={faCartShopping} className="product_icon" />
        </div>
      </div>
      <div className="product_content">
        <div className="product_rating"></div>
        <p>{text}</p>
        <p>{rate}</p>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default Product;
