import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/links";
import { RxCross2 } from "react-icons/rx";

function Sidebar() {
  return (
    <main className="py-8 bg-pink fixed left-0 top-0 w-screen h-screen pt-20">
      <div className="flex items-center justify-between max-w-3xl w-7/12 m-auto tablet:w-8/12">
        <button type="button">
          <RxCross2 className="text-3xl font-extralight" />
        </button>
        <div className="absolute left-1/2">
          <Link className=" text-2xl font-bold" to="/">
            A .M
          </Link>
        </div>
      </div>
      <div className="flex justify-between m-auto bg-pink max-w-3xl w-7/12 tablet:w-8/12">
        <ul className=" list-none flex flex-col justify-center ">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id} className="py-4">
                <Link
                  to={url}
                  className={`${({ isActive }) =>
                    isActive
                      ? "text-hoverblue"
                      : "text-black"} text-6xl hover:text-hoverblue transition duration-300 tablet:text-4xl mobile:text-4xl `}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>

        <article className="mobile:hidden">
          <p className="mt-8 mb-8">Shop Collections:</p>
          <ul className="text-2xl font-bold tablet:text-xl">
            <li>
              <Link>Kitchen</Link>
            </li>
            <li className="mt-4">
              <Link>Bath</Link>
            </li>
            <li className="mt-4">
              <Link>Jewelry</Link>
            </li>
            <li className="mt-4">
              <Link>Kitchen</Link>
            </li>
          </ul>
        </article>
      </div>
    </main>
  );
}

export default Sidebar;
