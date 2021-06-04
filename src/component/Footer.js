import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-10">
      <Link to="/show/all">
        <button className="mr-8 text-white text-xl font-bold focus:outline-none hover:text-gray-300 ">
          All
        </button>
      </Link>
      <Link to="/show/completed">
        <button className="mr-8 text-white text-xl font-bold focus:outline-none hover:text-gray-300 ">
          Completed
        </button>
      </Link>
    </div>
  );
}

export default Footer;
