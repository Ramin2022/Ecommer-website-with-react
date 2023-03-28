import React from "react";
import ReactDOM from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "../features/cartSlice";


// Modal for cart components
const CartModal = ({ modalOpen, setModalOpen }) => {
  // the cart state
  const cart = useSelector((state) => state.cart.cart);
  // useDispatch hook
  const dispatch = useDispatch();


  // creating portal for modal
  return ReactDOM.createPortal(
    <div
      className={`bg-black/60 ${
        modalOpen ? "block" : "hidden"
      } w-full z-50 h-full top-0 left-0 fixed  duration-[0.9s]`}
    >
      {/* rendering items on modal */}
      {cart.length > 0 ? (
        <div className="relative">
          <button
            onClick={() => setModalOpen((prev) => !prev)}
            className=" m-4 hover:bg-[var(--primary-dark-text)]  rounded-full p-1 text-white border-2 "
          >
            <AiOutlineClose size={25} />
          </button>
          <div className="modal-inner flex flex-col items-start bg-white mx-auto p-3 rounded-md relative mt-10 w-[450px] md:w-[500px] h-[500px] overflow-y-scroll ">
            {cart.map((item, index) => {
              return (
                <div key={index}>
                  <div className="grid grid-cols-2 py-4">
                    <div>
                      <img
                        className="h-[125px] rounded-md"
                        src={item.img}
                        alt={item.name}
                      ></img>
                      <div className="flex flex-col items-start">
                        <h4 className="text-black text-base font-inter font-bold tracking-normal leading-none pt-2">
                          {item.name}
                        </h4>
                      </div>
                      <div className="max-w-xs">
                        <p className="text-black text-xs font-inter tracking-normal leading-none pt-2">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected size: <span className="ml-2">{item.size}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Selected color:{" "}
                        <span
                          className="ml-2 rounded-full px-2"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Amount: <span className="ml-2">{item.amount}</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Single Item Price:{" "}
                        <span className="ml-2">{item.price}$</span>
                      </p>
                      <p className="text-black text-sm font-inter tracking-normal leading-none pt-2">
                        Total Item Prices:{" "}
                        <span className="ml-2">{item.totalPrice}$</span>
                      </p>
                      <div>
                        <button
                          onClick={() => dispatch(removeFromCart(item))}
                          className="bg-[var(--primary-dark)] p-2 rounded-md mt-2 hover:bg-[var(--primary-dark-text)]"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // empty box on modal
        <div className="bg-white  w-[450px] md:w-[500px] absolute top-[30%] left-[50%] translate-x-[-50%] p-3 rounded">
          <button
            onClick={() => setModalOpen((prev) => !prev)}
            className="fixed -left-2 -top-5 hover:bg-[var(--primary-dark-text)]  rounded-full p-1 text-white bg-[var(--primary-dark)]"
          >
            <AiOutlineClose size={25} />
          </button>
          <h1 className="text-xl font-bold text-[var(--primary-dark-text)] border-b pb-2">
            Shopping Bag
          </h1>
          <div>
            <h1 className="text-2xl font-bold text-[var(--primary-dark-text)]">
              Your bag is empty
            </h1>
            <p className="text-[var(--primary-dark-text)] py-2">
              Add some product!
            </p>
          </div>
        </div>
      )}
    </div>,
    // Selecting our modal element in index.html for portal
    document.querySelector("#modal")
  );
};

export default CartModal;
