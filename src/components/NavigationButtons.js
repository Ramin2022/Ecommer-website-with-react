import React from "react";
import clothes from "../assets/images/clothes.jpg";
import { filterProducts } from "../features/productsSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// navigation buttons component of home page
const NavigationButtons = () => {
  // useDispatch hook
  const dispatch = useDispatch();
  // typoes of clothes for buttons
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];
  return (
    <div>
      <div className="flex justify-around py-8 flex-col md:flex-row px-3">
        {/* rendering buttons */}
        {buttons.map((btn, index) => {
          return (
            <Link
            key={index}
            to={"/filteredProducts/" + btn}
            >
              <button 
              
              className="py-3 w-full mt-3 md:mt-0 ease-in-out duration-200 px-4 bg-[var(--primary-dark)] text-white text-sm font-semibold rounded-md hover:bg-purple-700 focus:outline-none"
              onClick={() => dispatch(filterProducts(btn))}>
                {btn}
              </button>
            </Link>
          );
        })}
      </div>
      {/* banner text */}
      <div className="bg-[var(--primary-dark)] w-[70%] mx-auto text-center rounded-sm py-1">
        <h3 className="text-white text-lg text-center font-mono ">
          Brand Products
        </h3>
      </div>
      {/* banner image */}
      <div className="flex justify-center p-4">
        <div className="shadow-lg  shadow-black/60 border-8 border-white h-[400px] w-[600px]">
          <img className="h-full w-full" src={clothes} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default NavigationButtons;
