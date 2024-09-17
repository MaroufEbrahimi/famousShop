import React from "react";

const ProductRate = ({ rate }) => {
  return (
    <>
      <p className="text_align_center">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={{
              color: rate >= star ? "gold" : "gray",
            }}
          >
            ★
          </span>
        ))}
      </p>
    </>
  );
};

export default ProductRate;
