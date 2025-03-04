import React from "react";
import { assets } from "../../../assets/assets";

const Footer = () => {
  return (
    <div className="md md-mx-5">
      <div className="flex flex-col lg:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm bg-gray-900 text-white p-10 rounded ">
        {/* Left Section */}
        <div className="w-full">
          {/* Top */}
          <div>
            <h3 className="font-semibold text-lg">About us</h3>
            <p className="text-xl max-w-xl">
              Welcome to our website, a wonderful place to explore and learn how
              to cook like a pro.
            </p>
            <div className="flex gap-5 mt-5">
              <input
                className="bg-white w-md  p-2.5 rounded"
                type="email"
                name="Enter your email"
                id=""
              />
              <button className="bg-pink-700 p-2.5 px-3 rounded font-semibold">
                Send
              </button>
            </div>
          </div>
          {/* Bottom */}
          <div className="flex items-center gap-10 mt-5 sm:mt-25">
            <img className="w-40" src={assets.logo_white} alt="" />
            <p className="mt-2">2023 Chefify Company</p>
            <p className="mt-2">Teams of Servicel Privacy Policy</p>
          </div>
        </div>
        {/* Center Section */}
        <div className="flex flex-col gap-5 sm:gap-25 text-lg">
          {/* Top */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Learn More</h3>
            <p>Our Cooks</p>
            <p>See Our Features</p>
            <p>FAQ</p>
          </div>
          {/* Bottom */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-medium">Shop</h3>
            <p>Gift Subcription</p>
            <p>Send Us Feedback</p>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-4 text-lg">
          <h3 className="text-lg font-medium">Recipes</h3>
          <p>What to cook this week</p>
          <p>Pasta</p>
          <p>Dinner</p>
          <p>Healthy</p>
          <p>Vegetarian</p>
          <p>Vegan</p>
          <p>Christmas</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
