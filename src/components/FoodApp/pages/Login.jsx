import React, { useState } from "react";
import { assets } from "../../../assets/assets";

const Login = ({closeLogin}) => {

  return (
    <div className="fixed inset-0 backdrop-opacity-80 backdrop-brightness-50 flex justify-center items-center z-50">
      <div className="bg-white border border-gray-300 rounded-2xl w-3/5 flex gap-5">
        <img
          className="hidden lg:block w-80 rounded-l-2xl"
          src={assets.food9}
          alt=""
        />
        <div className="w-full flex flex-col gap-5 relative">
          <h1 className="text-2xl text-black font-bold mx-5 mt-5">Login</h1>
          <button
            className="absolute top-2 right-5 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={closeLogin}
          >
            ✕
          </button>
          <p className="mx-5">Enter your email to log in.</p>
          <div className="flex flex-col">
            <input
              className="mx-5 mb-5 bg-gray-100 p-2 rounded-md"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-red-400 text-white p-2 mx-5 rounded-md">
              Continue
            </button>
          </div>
          <div class="flex items-center">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="mx-4 text-gray-500">OR</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>
          <p className="mx-10 text-sm text-center text-gray-500">
            By continuing, you agree to the updated Terms of Sale. Terms of
            Service, and Privacy Policy.
          </p>
          <div className="flex flex-col gap-5 mb-5">
            <button className="bg-blue-100 text-red-500 p-2 mx-5 rounded-md">
              Continue with Google
            </button>
            <button className="bg-blue-100 text-violet-950 p-2 mx-5 rounded-md">
              Continue with Facebook
            </button>
            <button className="bg-blue-100 text-black p-2 mx-5 rounded-md">
              Continue with Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
