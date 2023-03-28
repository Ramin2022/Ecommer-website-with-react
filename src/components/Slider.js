import React from "react";
import { sliderData } from "../assets/data/dummyData";
import { nextSlide, prevSlide } from "../features/sliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import showcase from "../assets/images/showcase.jpg";

// Slider Component
const Slider = () => {
  // getting index of the item rendered on slider
  const slideIndex = useSelector((state) => state.slider.value);
  // useDispatch hook
  const dispatch = useDispatch();
  return (
    <div className="mt-20  relative pb-4 flex justify-center items-center px-3">
      <div className="flex py-4 justify-center items-center">
        {/* rendering items on slider */}
        {sliderData.map((item) => {
          return (
            <div
              key={item.id}
              className={
                parseInt(item.id) === slideIndex
                  ? "opacity-100 block  duration-200 ease-in-out scale-100"
                  : "opacity-0 hidden  duration-200 ease-in-out scale-95"
              }
            >
              <div className="shadow-lg flex justify-center items-center shadow-black/60 border-8 border-white">
                {parseInt(item.id) === slideIndex && (
                  <img
                    className="w-full h-[400px]"
                    src={item.img}
                    alt="shoes"
                  ></img>
                )}
              </div>
              
            </div>
          );
        })}
      </div>
      {/* slider buttons */}

      <button
        className="hidden md:block absolute top-[50%] left-4 bg-[var(--primary-dark)] text-white p-2 rounded-full"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <HiOutlineChevronLeft size={20} />
      </button>
      <button
        className="hidden md:block absolute top-[50%] right-4 bg-[var(--primary-dark)] text-white p-2 rounded-full"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <HiOutlineChevronRight size={20} />
      </button>
    </div>
  );
};

export default Slider;
