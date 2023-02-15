import React from "react";
import { Link } from "react-router-dom";
import { links } from "../utils/links";

function Sidebar() {
  return (
    <main className="py-8 bg-primary ">
      <ul className="max-w-5xl list-none flex justify-center m-auto">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id} className="px-8">
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Sidebar;
