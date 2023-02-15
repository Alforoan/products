import React from "react";
import { links } from "../utils/links";
import { Link } from "react-router-dom";
import CartPage from "../pages/CartPage";
import Login from "../pages/LoginPage";

function Navbar() {
  return (
    <section className=" py-12  ">
      <div className="flex m-auto justify-between desktop:w-8/12 tablet:w-9/12 mobile:w-11/12">
        <button type="button" className="px-4">
          Menu
        </button>
        <Link to="/">Alforoan</Link>
        <div className="px-4 flex">
          <Link to="/cart">Cart(0)</Link>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
