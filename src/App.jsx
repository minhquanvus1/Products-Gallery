// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import './App.css'
import ProductsGalleryPage from "./components/ProductsGalleryPage";
import React from "react";
import TestProductsList from "./components/TestProductsList";
import LearnInfScroll from "./components/LearnInfScroll";
import LearnReactScroll from "./components/LearnReactScroll";
import LearnPage from "./components/ProductsGalleryPage";
const App = () => {
  return (
    <div>
      {/* <LearnPage></LearnPage> */}
      {/* <LearnReactScroll></LearnReactScroll> */}
      {/* <LearnInfScroll></LearnInfScroll> */}
      {/* <TestProductsList></TestProductsList> */}
      <ProductsGalleryPage></ProductsGalleryPage>
    </div>
  );
};

export default App;
