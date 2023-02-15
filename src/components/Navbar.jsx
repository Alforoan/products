import React from "react";
import { FaUserCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <section className=" py-8 mobile:hidden">
      <div className="flex m-auto justify-between desktop:w-8/12 tablet:w-10/12 ">
        <button type="button" className="px-4">
          Menu
        </button>
        <Link className="pl-6 " to="/">
          A .M
        </Link>
        <div className="px-4 flex">
          <Link className="pr-2" to="/cart">
            Cart(0)
          </Link>
          <Link className="pl-2 flex items-center" to="/login">
            <FaUserCircle className="mr-1 text-xl " />
            Log In
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
