import React, { useState } from "react";
import Header from "./Header";
import FullScreenNav from "./FullScreenNav";
import Slider from "./Slider";
import NavigationButtons from "./NavigationButtons";
import CartModal from "./CartModal";
import HomeProductSection from "./HomeProductSection";
import Footer from "./Footer";
// Main compnent or parent component
const Main = () => {
  // state of the navigation 
  const [isNavOpen, setIsNavOpen] = useState(false);
  // state of the modal
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
    {/* components */}
      <CartModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <FullScreenNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Header setModalOpen={setModalOpen} setIsNavOpen={setIsNavOpen} />
      <Slider />
      <NavigationButtons />
      <HomeProductSection />
      <Footer />
    </>
  );
};

export default Main;
