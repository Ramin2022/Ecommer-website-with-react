import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../features/cartSlice";
import { Link } from "react-router-dom";
const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];
  const [color, setColor] = useState(productColor);

  const dispatch = useDispatch();

  const [size, setSize] = useState(productSize);

  const { id } = useParams();

  const addToCartHandler = (item) => {
    dispatch(
      addToCart({
        id: item.id,
        name: item.name,
        img: item.img,
        text: item.text,
        size: size,
        color: color,
        price: item.price,
        amount: 1,
        totalPrice: item.price,
      })
    );
  };

  return (
    <div>
       <Link to="/">
        <button className="bg-[var(--primary-dark)] p-3 m-3 rounded-md border">Back to Home</button>
      </Link>
      {product
        .filter((prod) => prod.id === id)
        .map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col md:flex-row md:py-10 items-center justify-center"
            >
              <div className="px-20 flex justify-center md:px-5 md:flex-[0_0_40%] py-10  md:grow-[3]">
                <img
                  className="md:h-[500px] border-[10px] md:mx-w-[500px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="px-10 py-3 flex-[0_0_60%]]">
                <div className="max-w-lg">
                  <h5 className="text-2xl text-[var(--primary-dark-text)] font-bold tracking-normal font-serif uppercase">
                    {item.name}
                  </h5>
                  <p className="text-indigo-600 font-bold text-xl  tracking-normal font-serif italic">
                    30% OFF
                  </p>
                  <p className="text-[var(--primary-dark-text)] font-serif font-bold text-xl tracking-normal">
                    {item.text}
                  </p>
                  <div className="pb-4">
                    {item.type !== "Bags" ? (
                      <div>
                        <label htmlFor="size" className="block">
                          <span className="py-2 block text-[var(--primary-dark-text)] font-bold  tracking-wider italic">
                            Pick Size
                          </span>

                          <select
                            id="size"
                            name="size"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            className=" border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                          >
                            {item?.size?.map((item, index) => {
                              return (
                                <option key={index} value={item}>
                                  {item}
                                </option>
                              );
                            })}
                          </select>
                        </label>
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="color" className="block">
                      <span className="py-2 block text-[var(--primary-dark-text)] font-bold  tracking-wider italic">
                        Pick Color
                      </span>

                      <select
                        id="size"
                        name="size"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className=" border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      >
                        {item.color.map((color, index) => {
                          return (
                            <option key={index} value={color}>
                              {color}
                            </option>
                          );
                        })}
                      </select>
                    </label>
                  </div>
                  <div className="pt-5">
                    <button
                      onClick={() => addToCartHandler(item)}
                      className="bg-[var(--primary-dark)] p-3 rounded-lg text-white hover:bg-[var(--primary-dark-text)]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
