import React from "react";
import Header from "src/components/pages/Main/Header";
import Navbar from "src/components/pages/Main/Navbar";
import ProductDetails from "src/components/pages/Main/ProductDetails";
import ProductList from "src/components/pages/Main/ProductList";

export const Main = () => {
  return [
    <Navbar key={0} />,
    <Header key={1} />,
    <ProductDetails key={2} />,
    <ProductList key={3} />,
  ];
};
