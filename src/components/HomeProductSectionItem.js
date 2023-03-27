import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const HomeProductSectionItem = ({
  id,
  img,
  name,
  text,
  size,
  price,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  console.log(img)

  const defaultSize = size[0];
  const defaultColor = color[0];

  return (
    <div className="bg-[var(--primary-dark)] w-[60%] rounded-lg shadow-white mx-auto">
      <div className="h-[400px]">
        <img src={img} className="h-full w-full rounded-lg" alt={name} />
      </div>
      <div className="p-2">
        <h2 className="text-white text-xl">{name}</h2>
        <p className="font-serif text-white">{text}</p>
      </div>
      <div className="flex justify-between items-center p-1">
        <p className="text-white">{price}$</p>
        <button
          onClick={() =>
            dispatch(
              addToCart({
                id: id,
                img: img,
                text: text,
                amount: 1,
                price: price,
                totalPrice: totalPrice,
                name: name,
                size: defaultSize,
                color: defaultColor,
              })
            )
          }
          className="bg-white p-2 rounded-md mb-2 mr-2 text-[var(--primary-dark-text)] font-serif"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default HomeProductSectionItem;
