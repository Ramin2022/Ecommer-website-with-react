import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);

  const { type } = useParams();
  // console.log(products)
  // console.log(type)
  return (
    <div>
      <div className="pt-12 px-8">
        <div className="text-4xl flex items-center justify-between text-white font-mono tracking-normal leading-none font-bold">
          <span className="bg-[var(--primary-dark)] rounded-md inline-block p-2">
            {type}
          </span>
       <Link to="/">
        <button className="bg-[var(--primary-dark)] p-3 m-3 rounded-md border">Back to Home</button>
      </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-8 justify-center gap-5 md:gap-1 md:gap-y-10">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={product.id}
              img={product.img}
              colors={product.color}
              id={product.id}
              price={product.price}
              text={product.text}
              name={product.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FilteredProducts;
