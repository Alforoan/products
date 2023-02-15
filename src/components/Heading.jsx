import React from "react";
import { Link } from "react-router-dom";

function Heading() {
  return (
    <main className="bg-background py-4">
      <div className="flex justify-center text-center w-11/12 m-auto">
        <p>
          Free shipping on all internationl orders over $25{" "}
          <span>
            <Link className="decoration-solid" to="/products">
              Shop Now
            </Link>
          </span>
        </p>
      </div>
    </main>
  );
}

export default Heading;
