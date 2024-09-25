import React from "react";
import "./CartProduct.css";
import img1 from "../../../../assets/product_img/product1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSubtract } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartProduct = ({
  productCount,
  increaseProduct,
  decreaseProduct,
  productPrice,
}) => {
  return (
    <div className="cart_product_list display_flex align_items_center justify_content_space_between">
      <div className="cart_product_info display_flex align_items_center gap_20">
        <img src={img1} alt="" />
        <span>prodcut meessage should be here</span>
      </div>
      <div className="cart_product_inc_dec display_flex align_items_center gap_10">
        <FontAwesomeIcon
          icon={faPlus}
          className="fa_icon"
          onClick={increaseProduct}
        />
        <div className="cart_pro_inc_box display_flex align_items_center justify_content_center">
          {productCount}
        </div>
        {productCount > 1 ? (
          <FontAwesomeIcon
            icon={faSubtract}
            className="fa_icon"
            onClick={decreaseProduct}
          />
        ) : (
          <FontAwesomeIcon icon={faTrash} className="fa_icon red_color" />
        )}
      </div>
      <div className="cart_product_amount">
        <p>Total amount</p>
        <p className="bold">
          <sup>$ </sup>
          {productPrice}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
