import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Cart from "./pages/CartPage";
import Login from "./pages/LoginPage";
import MobileView from "./components/MobileView";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading />
      <Navbar />
      <MobileView />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
