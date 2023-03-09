import React from "react";
import Button from "../UI/Button/Button";

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

      <Button type="success" click={props.continue}>Yes</Button>
      <Button type="danger" click={props.cancel}>NO</Button>
    </div>
  );
};

export default Order;
