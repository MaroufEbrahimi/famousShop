import React from "react";
import "./Cart.css";
import CartProduct from "../../components/Controls/Product/CartProduct/CartProduct";

const Cart = () => {
  return (
    <div className="cart display_flex gap_40 dummy_margin">
      <div className="cart_list">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>
      <div className="cart_summary">1</div>
    </div>
  );
};

export default Cart;
