import React from "react";

const Order = (props) => {
  const summery = Object.keys(props.products).map((item) => {
    return (
      <li key={item}>
        {item} : {props.products[item]}
      </li>
    );
  });

  return (
    <div>
      <h3>Checkout</h3>
      <ul>{summery}</ul>
      <p>Total Price: {props.totalPrice}</p>
      <p>Continue?</p>
    </div>
  );
};

export default Order;
