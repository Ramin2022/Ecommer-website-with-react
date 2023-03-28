import React from "react";

// Footer component
const Footer = () => {
  // getting the date for footer
  const year = new Date().getFullYear();
  return (
    <div className="py-2">
      <div className="flex items-center justify-center">
        <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
      </div>
      <div className="flex items-center justify-around pt-4">
        <div>
          <h1 className="text-xl text-[var(--primary-dark-text)] font-bold tracking-widest uppercase">Shopy</h1>
        </div>
        <div>
          <p className="text-[var(--primary-dark-text)] font-bold uppercase text-sm font-inter no-underline font-serif tracking-wider">
            Copyright {year} page by Marko Web
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
