import React from "react";
import { Link } from "react-router-dom";

// About component
const About = () => {
  return (
    <div>
      <Link to="/">
        <button className="bg-[var(--primary-dark)] p-3 m-3 rounded-md border">Back to Home</button>
      </Link>
      <h1 className="text-2xl py-5 text-center uppercase tracking-wider text-[var(--primary-dark-text)]">
        Ecommerce Website
      </h1>
      <p className="text-xl py-5 text-center uppercase tracking-wider text-[var(--primary-dark-text)]">
        This is an Ecommerce website made by Ramin Jooya.
      </p>
      <h1 className=" font-bold font-serif py-5 text-center uppercase tracking-wider text-[var(--primary-dark-text)]">
        Frontend Technologies used:
      </h1>
      <ul className="text-center">
        <li className="text-[var(--primary-dark-text)] text-xl border-b">
          React
        </li>
        <li className="text-[var(--primary-dark-text)] text-xl border-b">
          Tailwind CSS
        </li>
        <li className="text-[var(--primary-dark-text)] text-xl border-b">
          React Router
        </li>
        <li className="text-[var(--primary-dark-text)] text-xl border-b">
          Redux Toolkit
        </li>
      </ul>
    </div>
  );
};

export default About;
