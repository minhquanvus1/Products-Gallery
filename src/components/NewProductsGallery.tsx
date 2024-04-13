import React from "react";
import useProductSearch from "../hooks/useProductSearch";
import { useState, useRef, useCallback } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const NewProductsGallery: React.FC<{}> = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const { loading, error, products, hasMore, submit, setSubmit } =
    useProductSearch(query, pageNumber);

  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log("node is", node);
    },
    [loading, hasMore]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPageNumber(0);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("query now is", query);
    setPageNumber(0);
    // console.log("submit is", submit);
    // setQuery(prevquery);
    if (!query) return;
    setSubmit(true);
    // console.log("submit after set to true", submit);
  };

  return (
    <div style={{ marginTop: "10vh" }}>
      <form
        className="d-flex"
        onSubmit={handleSubmit}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#ffffff",
          padding: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          zIndex: 999,
        }}
      >
        <input
          id="search"
          className="form-control me-2"
          type="search"
          placeholder="Search Product"
          aria-label="Search"
          value={query}
          onChange={handleChange}
          style={{ width: "80%" }}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
        &nbsp;&nbsp;
        <Link to="/" className="btn btn-success btn-sm">
          Home Page
        </Link>
        &nbsp;&nbsp;
        <Link to="/map" className="btn btn-success btn-sm">
          View Map
        </Link>
      </form>

      {products.length > 0 &&
        products.map((product, index) => {
          if (products.length === index + 1) {
            // If it's the last product, attach the ref
            return (
              <div ref={lastProductElementRef} key={product.id}>
                <ProductCard
                  productTitle={product.title}
                  productImage={product.images[0]}
                  productCategory={product.category}
                  productDescription={product.description}
                  productRating={product.rating}
                  productPrice={product.price}
                />
              </div>
            );
          } else {
            return (
              <ProductCard
                key={product.id}
                productTitle={product.title}
                productImage={product.images[0]}
                productCategory={product.category}
                productDescription={product.description}
                productRating={product.rating}
                productPrice={product.price}
              />
            );
          }
        })}
      {!loading && products.length <= 0 && <div>No Products Found</div>}
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </div>
  );
};

export default NewProductsGallery;
