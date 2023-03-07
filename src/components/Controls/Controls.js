import React from "react";

import "./Controls.css";
import Build from "./Build/Build";

import img1 from "../../assets/product_img/product1.jpg";
import img2 from "../../assets/product_img/product2.jpg";
import img3 from "../../assets/product_img/product3.jpg";
import img4 from "../../assets/product_img/product4.jpg";
import img5 from "../../assets/product_img/product5.jpg";
import img6 from "../../assets/product_img/product6.jpg";
import img7 from "../../assets/product_img/product7.jpg";
import img8 from "../../assets/product_img/product8.jpg";
import img9 from "../../assets/product_img/product9.jpg";
import img10 from "../../assets/product_img/product10.jpg";
import img11 from "../../assets/product_img/product11.jpg";
import img12 from "../../assets/product_img/product12.jpg";
import img13 from "../../assets/product_img/product13.jpg";
import img14 from "../../assets/product_img/product14.jpg";
import img15 from "../../assets/product_img/product15.jpg";
import img16 from "../../assets/product_img/product16.jpg";

const products = [
  { price: "$ 12.5", img: img1, type: "product1" },
  { price: "$ 10", img: img2, type: "product2" },
  { price: "$ 22.5", img: img3, type: "product3" },
  { price: "$ 8", img: img4, type: "product4" },
  { price: "$ 85", img: img5, type: "product5" },
  { price: "$ 102", img: img6, type: "product6" },
  { price: "$ 71", img: img7, type: "product7" },
  { price: "$ 108", img: img8, type: "product8" },
  { price: "$ 20", img: img9, type: "product9" },
  { price: "$ 307", img: img10, type: "product10" },
  { price: "$ 11", img: img11, type: "product11" },
  { price: "$ 18", img: img12, type: "product12" },
  { price: "$ 8", img: img13, type: "product13" },
  { price: "$ 140", img: img14, type: "product14" },
  { price: "$ 15000", img: img15, type: "product15" },
  { price: "$ 10060", img: img16, type: "product16" },
];

const Controls = (props) => {
  return (
    <div className="controls">
      {products.map((item) => {
        return (
          <Build
            key={item.type}
            price={item.price}
            img={item.img}
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
