import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Mission from "./pages/MissionPage";
import Shop from "./pages/ProductsPage";
import Cart from "./pages/CartPage";
import Login from "./pages/LoginPage";
import MobileView from "./components/MobileView";
import Heading from "./components/Heading";
import Sidebar from "./components/Sidebar";
import Contact from "./pages/ContactPage";
import Faq from "./pages/FaqPage";

function App() {
  return (
    <>
      <Heading />
      <Navbar />
      <MobileView />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
