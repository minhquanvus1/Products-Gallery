import React from "react";
import "../css/product.css";
import RoundRating from "../functions/RoundRating";
import StarsReview from "./StarsReview";
import { Link } from "react-router-dom";

interface ProductCardProps {
  productId: number;
  productTitle: string;
  productImage: string;
  productCategory: string;
  productDescription: string;
  productRating: number;
  productPrice: number;
}
const ProductCard: React.FC<ProductCardProps> = ({
  productId,
  productTitle,
  productImage,
  productCategory,
  productDescription,
  productRating,
  productPrice,
}) => {
  const roundedRating = RoundRating(productRating);
  const handleClick = () => {
    sessionStorage.setItem("productId", productId.toString());
    sessionStorage.setItem("productTitle", productTitle);
    sessionStorage.setItem("productPrice", productPrice.toString());
  };
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
            <StarsReview roundedRating={roundedRating} size={32}></StarsReview>
            {/* {productRating} : {Math.round(productRating * 10) / 10} :{" "}
            {roundedRating} */}
          </span>
        </div>
        <Link
          to={`/products/${productId}/check-out`}
          // state={{ productTitle: "productTitle" }}
          className="btn btn-info"
          style={{ marginTop: "12px" }}
          onClick={handleClick}
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
