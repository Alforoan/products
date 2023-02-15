import React from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

function MobileView() {
  return (
    <section className=" py-8 desktop:hidden tablet:hidden">
      <div className="flex m-auto justify-between mobile:w-11/12 ">
        <Link className="" to="/cart">
          Cart(0)
        </Link>
        <Link className="" to="/">
          A .M
        </Link>
        <button type="button">
          <BiMenu />
        </button>
      </div>
    </section>
  );
}

export default MobileView;
