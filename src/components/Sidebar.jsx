import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/links";

function Sidebar() {
  return (
    <main className="py-8 bg-pink ">
      <ul className="max-w-5xl list-none flex flex-col justify-center m-auto">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="py-4">
              <Link
                to={url}
                className={`${({ isActive }) =>
                  isActive
                    ? "text-hoverblue"
                    : "text-black"} text-6xl hover:text-hoverblue transition duration-300`}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>

      <ul>
        <li>Kitchen</li>
        <li>Bath</li>
        <li>On the Go</li>
        <li>Sale</li>
      </ul>
    </main>
  );
}

export default Sidebar;
