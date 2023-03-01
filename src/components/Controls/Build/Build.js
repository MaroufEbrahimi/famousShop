import React from "react";

import "./Build.css";

const Build = ({ img, price, add }) => {
  return (
    <div className="builder">
      <img src={img} />
      <div className="builder_content">
        <p>{price}</p>
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
};

export default Build;
