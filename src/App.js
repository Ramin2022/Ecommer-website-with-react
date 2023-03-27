import React from "react";
import Main from "./components/Main";
import FilteredProducts from "./components/FilteredProducts";
import SingleProduct from "./components/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts />}
          />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
