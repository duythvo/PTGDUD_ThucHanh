import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import Login from "../pages/Login";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };
  return (
    <div className="flex items-center justify-between border-b border-b-gray-300 text-sm gap-5">
      <div className="flex items-center gap-5">
        <img src={assets.logo} alt="" className="w-44 cursor-pointer" />
        <div className="hidden md:flex items-start w-80">
          <img src={assets.loupe} alt="" className="w-4 absolute mt-4.5 ml-2" />
          <input
            type="text"
            placeholder="What would you like to cook?"
            className="w-full bg-gray-200 p-2 rounded mt-2 pl-8"
          />
        </div>
      </div>
      <ul className="hidden lg:flex items-start gap-5">
        <NavLink to="/">
          <li className="py-1 whitespace-nowrap">Home</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1 whitespace-nowrap">About</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1 whitespace-nowrap">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-pink-400 w-4/5 m-auto hidden " />
        </NavLink>
      </ul>
      <div className="flex items-center gap-5">
        <button
          className="bg-red-100 text-red-600 mt-2 p-2 rounded-md w-20 md:block whitespace-nowrap cursor-pointer "
          onClick={openLogin}
        >
          Login
        </button>
        <button className="bg-red-600 text-white mt-2 p-2 w-20 rounded-md md:block whitespace-nowrap cursor-pointer">
          Subscribe
        </button>
        {/* <img src={assets.avt} alt="" className="w-10 rounded-full mt-2" /> */}
      </div>
      {showLogin && <Login closeLogin={closeLogin} />}
    </div>
  );
};

export default Navbar;
