import React from "react";

import "./Controls.css";

import products from "../../constants/products.js";
import Product from "./Product/Product";

const Controls = (props) => {
  return (
    <div className="controls">
      <h1 className="text_align_center">Newest Goods</h1>
      <div className="controls_content">
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
          {/* <button onClick={props.checkout}>Check List</button> */}
        </div>
      </div>
    </div>
  );
};

export default Controls;
