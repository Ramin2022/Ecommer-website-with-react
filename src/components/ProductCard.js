import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../features/productsSlice";

// products card component 
const ProductCard = ({ img, id, name, text, price, colors }) => {
  // useDispatch hook
  const dispatch = useDispatch();
  // getting types of products
  const { type } = useParams();

  return (
    // passing type & ID of the product
    <Link to={`/filteredProducts/${type}/` + id}>
      <div
        onClick={() => dispatch(singleProduct(id))}
        className="bg-[var(--primary-dark)]  shadow-lg shadow-white/80 h-[450px] md:h-[475px] w-96 md:w-72 mx-auto rounded-lg"
      >
        <div className="h-64 w-96 md:w-72 rounded-lg shadow-md shadow-white/25">
          <img src={img} className="h-full w-full rounded-lg" alt={name} />
        </div>
        <div className="p-2">
          <h2 className="text-white py-1 text-3xl text-center">{name}</h2>
          <p className="text-white py-1 text-center textjstify">{text}</p>
        </div>
        <div className="flex justify-between border-t">
          <p className="px-2 text-white font-bold">{price}$</p>
          <ul className="px-2 flex text-white ">
            {colors.map((color, index) => (
              <li
                style={{ backgroundColor: color }}
                className=" h-4 w-4 m-2 rounded-full"
                key={index}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
