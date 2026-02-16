import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />
      <div className="card-content">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
