import React from "react";
import "../css/product.css";
import RoundRating from "../functions/RoundRating";
import StarsReview from "./StarsReview";
const ProductCard = ({
  productTitle,
  productImage,
  productCategory,
  productDescription,
  productRating,
  productPrice,
}) => {
  const roundedRating = RoundRating(productRating);
  return (
    <div className="product-card">
      <img className="product-image" src={productImage} alt="product-image" />
      <div className="product-details">
        <h3 className="product-title">{productTitle}</h3>
        <p className="product-price">$ {productPrice}</p>
        <p className="product-description">{productDescription}</p>
        <p className="product-category">{productCategory}</p>
        <div className="product-rating">
          <span className="rating-value">
            {productRating} : {Math.round(productRating * 10) / 10} :{" "}
            {roundedRating}
          </span>
          <StarsReview roundedRating={roundedRating} size={32}></StarsReview>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
