import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="pt-10 text-center">
      <Link to="/">
        <button className="mr-8 text-white text-xl font-bold focus:outline-none hover:text-gray-300 ">
          Add
        </button>
      </Link>
      <Link to="/show">
        <button className="text-white text-xl font-bold focus:outline-none hover:text-gray-300">
          Show
        </button>
      </Link>
    </header>
  );
}

export default Nav;
