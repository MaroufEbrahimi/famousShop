import React, { useState } from "react";
import "./Cart.css";
import CartProduct from "../../components/Controls/Product/CartProduct/CartProduct";

const Cart = () => {
  const [productCount, setProductCount] = useState(1);
  const unitPrice = 290;
  const [productPrice, setProductPrice] = useState(unitPrice);

  const increaseProduct = () => {
    setProductCount((p) => p + 1);
    setProductPrice((productCount + 1) * unitPrice);
  };
  const decreaseProduct = () => {
    setProductCount((p) => (p > 0 ? p - 1 : 0));
    setProductPrice(
      productCount > 1 ? (productCount - 1) * unitPrice : unitPrice
    );
  };

  // format the price bigger than 1000
  const formattedPrice =
    productPrice >= 1000 ? productPrice.toLocaleString() : productPrice;

  return (
    <div className="cart display_flex gap_40 dummy_margin">
      <div className="cart_list">
        <CartProduct
          productCount={productCount}
          increaseProduct={() => increaseProduct()}
          decreaseProduct={() => decreaseProduct()}
          productPrice={formattedPrice}
        />
      </div>
      <div className="cart_summary">1</div>
    </div>
  );
};

export default Cart;
