import React from "react";
import { storeData } from "../assets/data/dummyData";
import HomeProductSectionItem from "./HomeProductSectionItem";


// home product components for displaying the products on home page
const HomeProductSection = () => {
  return (
    <div>
      <div className="bg-[var(--primary-dark)] w-[70%] mx-auto text-center rounded-sm py-1">
        <h3 className="text-white text-lg text-center font-mono ">
          Brand Shirts
        </h3>
      </div>
      <div className="grid grid-cols-1  md:grid-cols-2 justify-items-center py-8 gap-4 mx-auto max-w-7xl">
        {/* displaying few producst from the store  */}
        {storeData.slice(0, 6).map((product, index) => {
          return (
            <div key={index}>
              <HomeProductSectionItem
                id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
              ></HomeProductSectionItem>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProductSection;
