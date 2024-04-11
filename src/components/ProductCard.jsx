import React from "react";
import "../css/product.css";
const ProductCard = ({
  productTitle,
  productImage,
  productCategory,
  productDescription,
  productRating,
  productPrice,
}) => {
  return (
    <div className="product-card">
      <img className="product-image" src={productImage} alt="product-image" />
      <div className="product-details">
        <h3 className="product-title">{productTitle}</h3>
        <p className="product-price">$ {productPrice}</p>
        <p className="product-description">{productDescription}</p>
        <p className="product-category">{productCategory}</p>
        <div className="product-rating">
          <span className="rating-value">{productRating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
