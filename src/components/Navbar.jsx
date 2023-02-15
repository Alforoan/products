import React from "react";
import { links } from "../utils/links";
import { Link } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Login from "../pages/LoginPage";

function Navbar() {
  return (
    <section>
      <h2>Menu</h2>
      <h1>Alforoan</h1>
      <CartPage />
      <Login />
    </section>
  );
}

export default Navbar;
