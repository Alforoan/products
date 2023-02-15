import React from "react";
import { links } from "../utils/links";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <main>
      <ul className="list-none">
        {links.map((link) => {
          const { id, text, url } = link;
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Navbar;
