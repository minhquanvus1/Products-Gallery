import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const SearchBarTest = ({
  foundProducts,
  setFoundProducts,
  page,
  setPage,
  searchMode,
  setSearchMode,
  setProducts,
  noData,
  setNoData,
  setTrigger,
  trigger,
  total,
  setTotal,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  //   const [cancelToken, setCancelToken] = useState(null);
  //   let cancelToken;
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0);
    setTotal(0);
    console.log(searchTerm);
  };
  const searchForProduct = async () => {
    console.log("search term is", searchTerm);
    console.log("products in search bar skibidi", foundProducts);
    try {
      //Save the cancel token for the current request
      //   let newCancelToken;
      //   if (cancelToken) {
      //     cancelToken.cancel("Request canceled");
      //   }
      //   newCancelToken = axios.CancelToken.source();
      //   setCancelToken(newCancelToken);
      console.log("current page in searcbar is", page);
      //   const response = await fetch(
      //     `https://dummyjson.com/products/search?q=${searchTerm}&limit=20&skip=${page}`
      //   );
      //   const data = await response.json();

      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchTerm}&limit=20&skip=${page}`
        // `https://dummyjson.com/products/search?q=${searchTerm}&limit=20&skip=${page}`,
        // {
        //   cancelToken: newCancelToken.token,
        // }
      );
      const data = response.data;
      console.log("data is", data);
      //   console.log("total is", data.total);
      setTotal(data.total);
      const foundProductss = data.products;
      //   setFoundProducts(foundProductss);
      console.log("products found earlier are", foundProducts);
      console.log("products found are", foundProductss);
      const newFoundProductList = foundProducts.concat(foundProductss);
      console.log("new found product list is", newFoundProductList);
      setFoundProducts(foundProductss);
      //   setFoundProducts((prevProducts) => {
      //     // Filter out the duplicates
      //     const newProducts = foundProductss.filter((newProduct) => {
      //       return !prevProducts.some(
      //         (prevProduct) => prevProduct.id === newProduct.id
      //       );
      //     });

      //     // Concatenate the new products with the old ones
      //     return [...prevProducts, ...newProducts];
      //   });

      if (foundProductss.length === 0) {
        setNoData(true);
      }
      console.log("foundprodcts length is", foundProductss.length);
      console.log("no data in searchprodcut is", noData);
    } catch (error) {
      //   if (axios.isCancel(error)) {
      //     console.log("Request canceled:", error.message);
      //   } else {
      //     console.error("An error occurred:", error);
      //   }
      console.error(error);
    }
  };
  useEffect(() => {
    console.log("products in search bar", foundProducts);
  }, [foundProducts]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    searchForProduct();
  };
  useEffect(() => {
    if (searchTerm !== "" && !noData) {
      setSearchMode(true);
      setProducts([]);
      searchForProduct();
      //   return () => {
      //     if (cancelToken) {
      //       cancelToken.cancel("Request canceled");
      //     }
      //   };
      // } else if (searchTerm !== "" && noData) {
      //   return;
    } else if (searchTerm === "" && noData) {
      return;
    } else {
      console.log("search Term is empty string");
      console.log("no data is in useeffect", noData);
      setSearchMode(false);
      setTotal(0);
      setNoData(false);
      setProducts([]);
      setFoundProducts([]);
    }
  }, [searchTerm, noData]);
  useEffect(() => {
    if (trigger && !noData) {
      searchForProduct();
    }
    // return () => {
    //   if (cancelToken) {
    //     cancelToken.cancel("Request canceled");
    //   }
    // };
  }, [trigger, noData]);
  //   useEffect(() => {
  //     return () => {
  //       if (cancelToken) {
  //         cancelToken.cancel("Request canceled");
  //       }
  //     };
  //   }, [cancelToken]);
  return (
    <div style={{ marginTop: "0.5%" }}>
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search Product"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
          style={{ width: "80%" }}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBarTest;
