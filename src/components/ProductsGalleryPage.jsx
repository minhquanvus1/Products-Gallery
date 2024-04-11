import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import SearchBarTest from "./SearchBarTest";

function ProductsGalleryPage() {
  const [page, setPage] = useState(0);
  const [products, setProducts] = useState([]);
  const [searchMode, setSearchMode] = useState(false);
  const [foundProducts, setFoundProducts] = useState([]);
  const [noData, setNoData] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [total, setTotal] = useState(0);

  const fetchData = async () => {
    console.log("fetch data called");
    try {
      // console.log("page is", page);
      const url = `https://dummyjson.com/products?limit=20&skip=${page}`;
      const response = await fetch(url);
      const data = await response.json();
      const newProducts = data.products;
      console.log("new products are", newProducts);

      const newList = products.concat(newProducts);
      setProducts(newList);
      if (newProducts.length === 0) {
        setNoData(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const handleScroll = async (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      setTrigger(false);
      // console.log("scroll height is", scrollHeight);
      // console.log("current height is", currentHeight);
      console.log("current page in hadle scroll is", page);
      console.log("search mode is", searchMode);
      console.log("total is", total);
      if (currentHeight + 1 >= scrollHeight) {
        // console.log("always skibidi");
        if (!noData && !searchMode) {
          setPage((prevPage) => prevPage + 20);
        }
        if (searchMode && !noData && total > 20) {
          setPage((prevPage) => prevPage + 20);
          setTrigger(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page, products, searchTerm, searchMode, noData, total]);
  useEffect(() => {
    if (!noData && !searchMode) {
      fetchData();
    }
  }, [page, searchMode, searchTerm, noData]);

  return (
    <>
      {/* <SearchBar
        products={products}
        setProducts={setProducts}
        setSearchMode={setSearchMode}
        setPage={setPage}
        page={page}
        trigger={trigger}
        setTrigger={setTrigger}
        total={total}
        setTotal={setTotal}
      ></SearchBar> */}
      <SearchBarTest
        foundProducts={foundProducts}
        setFoundProducts={setFoundProducts}
        page={page}
        setPage={setPage}
        searchMode={searchMode}
        setSearchMode={setSearchMode}
        setProducts={setProducts}
        noData={noData}
        setNoData={setNoData}
        setTrigger={setTrigger}
        trigger={trigger}
        total={total}
        setTotal={setTotal}
      ></SearchBarTest>
      {!searchMode &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productTitle={product.title}
              productImage={product.images[0]}
              productCategory={product.category}
              productDescription={product.description}
              productRating={product.rating}
              productPrice={product.price}
            ></ProductCard>
          );
        })}
      {searchMode &&
        foundProducts.length > 0 &&
        foundProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              productTitle={product.title}
              productImage={product.images[0]}
              productCategory={product.category}
              productDescription={product.description}
              productRating={product.rating}
              productPrice={product.price}
            ></ProductCard>
          );
        })}
    </>
  );
}

export default ProductsGalleryPage;
