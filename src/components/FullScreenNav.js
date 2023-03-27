import React from "react";
import { Link } from "react-router-dom";
const FullScreenNav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div
      id="myNav"
      className={`h-full ${
        isNavOpen ? "w-full" : "w-0"
      }  fixed top-0 left-0 z-50 bg-[var(--primary-dark-modal)] overflow-x-hidden duration-[0.5s]`}
    >
      <button
        onClick={() => {
          setIsNavOpen((prev) => !prev);
        }}
        className="absolute top-5 right-11 text-6xl duration-[0.3s] text-white"
      >
        &times;
      </button>

      <div className="relative w-full top-[25%] text-center mt-8">
        <Link
          className="p-2 text-3xl text-white hover:bg-purple-700 duration-[0.3s] block  w-1/2 mx-auto rounded-tr-xl rounded-bl-xl"
          to="/"
        >
          Home
        </Link>
        <Link to='/about' className="p-2 text-3xl text-white hover:bg-purple-700 duration-[0.3s] block  w-1/2 mx-auto rounded-tr-xl rounded-bl-xl">
          About
        </Link>
      </div>
    </div>
  );
};

export default FullScreenNav;
