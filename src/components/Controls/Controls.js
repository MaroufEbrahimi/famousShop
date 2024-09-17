import React from "react";

import "./Controls.css";

import products from "../../constants/products.js";
import Product from "./Product/Product";

const Controls = (props) => {
  return (
    <div className="controls">
      {products.map((item) => {
        return (
          <Product
            key={item.type}
            price={item.price}
            img={item.img}
            rate={item.rating}
            text={item.productTxt}
            add={() => props.productAdd(item.type)}
          />
        );
      })}

      <div className="checkout">
        <button onClick={props.checkout}>Check List</button>
      </div>
    </div>
  );
};

export default Controls;
