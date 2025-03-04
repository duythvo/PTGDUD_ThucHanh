import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { assets } from "../../../assets/assets";

const WelcomeModal = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("modalShown")) {
      setShowModal(true);
    } else {
      sessionStorage.setItem("modalShown", "true");
    }
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 backdrop-opacity-80 backdrop-brightness-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>
        <h2 className="text-3xl font-bold text-pink-600 mb-4 text-center">
          Discover Chefify
        </h2>
        <p className="text-center mb-4">
          Easy and delicious cooking instructions right here. Start exploring
          now!
        </p>
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={3000}
          showStatus={false}
          showArrows={false}
          className="rounded-xl"
        >
          <div className="rounded-xl">
            <img
              src={assets.food1}
              className="w-full h-90 object-cover rounded-xl"
              alt="Dish 1"
            />
          </div>
          <div className="rounded-xl">
            <img
              src={assets.food2}
              className="w-full h-90 object-cover rounded-xl"
              alt="Dish 2"
            />
          </div>
          <div className="rounded-xl">
            <img
              src={assets.food3}
              className="w-full h-90 object-cover rounded-xl"
              alt="Dish 3"
            />
          </div>
        </Carousel>
        <div className="mt-5 flex flex-col justify-center items-center rounded-2xl gap-4">
          <button
            onClick={() => setShowModal(false)}
            className="bg-pink-500 text-white py-2 px-6 hover:bg-pink-600 w-2/3 rounded-xl"
          >
            Next
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 hover:underline"
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
