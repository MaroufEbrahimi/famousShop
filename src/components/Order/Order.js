import React from "react";

const Order = (props) => {
  return (
    <div>
      <h3>Checkout</h3>
      <ul></ul>
      <p>Total Price: {props.totalPrice}</p>
      <p>Continue?</p>
    </div>
  );
};

export default Order;
