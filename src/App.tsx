// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'
import ProductsGalleryPage from "./components/ProductsGalleryPage";
import React from "react";
// import TestProductsList from "./components/TestProductsList";
// import LearnInfScroll from "./components/LearnInfScroll";
// import LearnReactScroll from "./components/LearnReactScroll";
// import LearnPage from "./components/ProductsGalleryPage";
import NewProductsGallery from "./components/NewProductsGallery";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import MapBox from "./components/MapBox";
const App = () => {
  return (
    <>
      {/* <LearnPage></LearnPage> */}
      {/* <LearnReactScroll></LearnReactScroll> */}
      {/* <LearnInfScroll></LearnInfScroll> */}
      {/* <TestProductsList></TestProductsList> */}
      {/* <ProductsGalleryPage></ProductsGalleryPage> */}

      {/* <NewProductsGallery></NewProductsGallery> */}
      {/* <Map></Map> */}
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/map" element={<MapBox></MapBox>}></Route>
        <Route
          path="/product-gallery"
          element={<NewProductsGallery></NewProductsGallery>}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
