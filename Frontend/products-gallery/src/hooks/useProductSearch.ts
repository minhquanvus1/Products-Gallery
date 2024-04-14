import { useState, useEffect } from "react";
import axios, { Canceler } from "axios";
import { ProductModel } from "../models/ProductModel";
const useProductSearch = (query: string, pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [hasMore, setHasMore] = useState(false);
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    setProducts([]);
  }, [query]);
  useEffect(() => {
    console.log("current page is", pageNumber);
    setLoading(true);
    setError(false);
    let cancel: Canceler;
    let url: string;
    if (query) {
      // Use search API if query is not empty
      console.log("search is called");
      url = `https://dummyjson.com/products/search?q=${query}&limit=20&skip=${
        pageNumber * 20
      }`;
    } else {
      // Use default product list API
      console.log("default is called");
      url = `https://dummyjson.com/products?limit=20&skip=${pageNumber * 20}`;
    }

    axios({
      method: "GET",
      url: url,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        const foundProducts = response.data.products;
        console.log("found products are", foundProducts);
        // setProducts((prevProducts) => {
        //   return [...new Set([...prevProducts, ...foundProducts])];
        // });
        //     const newList = products.concat(foundProducts);
        //   setProducts(newList);
        setProducts((prevProducts) => {
          console.log("prev products are", prevProducts);
          console.log("new products are", foundProducts);
          const newProductsSet = new Set([...prevProducts, ...foundProducts]);
          console.log("new products set is", newProductsSet);

          if (prevProducts.length === 0) {
            return foundProducts;
          } else {
            // Filter out duplicates based on product ID
            const updatedProducts = foundProducts.filter(
              (product: ProductModel) =>
                !prevProducts.some(
                  (prevProduct: ProductModel) => prevProduct.id === product.id
                )
            );
            // Merge the filtered new products with existing products
            return [...prevProducts, ...updatedProducts];
          }
        });
        setHasMore(foundProducts.length > 0);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber, submit]);
  //   console.log("products are", products);
  return { loading, error, products, hasMore, submit, setSubmit };
};

export default useProductSearch;
