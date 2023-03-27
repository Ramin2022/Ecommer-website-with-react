import React from "react";
import { AiOutlinePhone, AiOutlineShoppingCart } from "react-icons/ai";
import {
  HiOutlineShoppingBag,
  HiOutlineMenuAlt2,
  HiOutlineUser,
} from "react-icons/hi";
import { useSelector } from "react-redux";
// Header component
const Header = ({ setIsNavOpen, setModalOpen }) => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <div className="h-20 fixed z-30 bg-[var(--primary-dark)] text-white shado top-0 left-0 px-5  items-center w-full flex justify-between">
      {/* nav bar brand */}
      <div className="flex  w-48 justify-around items-center">
        <div className="flex justify-around items-center">
          <div>
            <HiOutlineShoppingBag size={30} />
          </div>
          <h2 className="text-xl ml-3 uppercase tracking-widest">Shopy</h2>
        </div>
        <button
          className="hover:text-purple-900"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <HiOutlineMenuAlt2 size={30} />
        </button>
      </div>
      {/* basket and contact part */}
      <div className="flex w-72 justify-end md:justify-center">
        <div className="ml-2 relative cursor-pointer mr-4" 
        onClick={() => setModalOpen((prev) => !prev)}
        >
          <span className="  bg-[var(--primary-dark-text)] absolute left-4 -top-1  rounded-full flex justify-center items-center text-center h-5 w-5">
            <span>{totalAmount}</span>
          </span>
          <AiOutlineShoppingCart size={45} />
        </div>
        
        <div className="hidden md:flex md:justify-center md:items-center">
          <p>+1 789-234-232</p>
          <AiOutlinePhone className="ml-3" size={30} />
        </div>
      </div>
    </div>
  );
};

export default Header;
