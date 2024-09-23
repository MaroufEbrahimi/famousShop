import React from "react";
import "./CartProduct.css";
import img1 from "../../../../assets/product_img/product1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSubtract } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartProduct = () => {
  return (
    <div className="cart_product_list display_flex align_items_center justify_content_space_between">
      <div className="cart_product_info display_flex align_items_center gap_20">
        <img src={img1} alt="" />
        <span>prodcut meessage should be here</span>
      </div>
      <div className="cart_product_inc_dec display_flex align_items_center gap_10">
        <FontAwesomeIcon icon={faPlus} className="fa_icon" />
        <div className="cart_pro_inc_box display_flex align_items_center justify_content_center">
          1
        </div>
        <FontAwesomeIcon icon={faSubtract} className="fa_icon" />
        <FontAwesomeIcon icon={faTrash} className="fa_icon" />
      </div>
      <div className="cart_product_amount">
        <p>Total amount</p>
        <p className="bold">
          <sup>$ </sup>3,124
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
