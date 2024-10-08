import React from "react";

import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const TopHeader = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          {/* First div */}
          <div className="hidden lg:flex gap-1">
            <div className="bg-gray-200 rounded-md p-1.5 text-sm cursor-pointer hover:bg-accent hover:text-white">
              <BsFacebook />
            </div>
            <div className="bg-gray-200 rounded-md p-1.5 text-sm cursor-pointer hover:bg-accent hover:text-white">
              <BsTwitter />
            </div>
            <div className="bg-gray-200 rounded-md p-1.5 text-sm cursor-pointer hover:bg-accent hover:text-white">
              <BsInstagram />
            </div>
            <div className="bg-gray-200 rounded-md p-1.5 text-sm cursor-pointer hover:bg-accent hover:text-white">
              <BsLinkedin />
            </div>
          </div>
          {/* Second div */}
          <div className="text-gray-500 text-xs">
            <strong>FREE SHIPPING </strong>
            THIS WEEK ORDER OVER - $55
          </div>
          {/* Third div */}
          <div className="flex gap-4">
            {/* currency selector */}
            <select
              name="currency"
              id="currency"
              className="text-gray-500 text-xs w-[70px]"
            >
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
              <option value="INR ₹">INR ₹</option>
            </select>
            {/* language selector */}
            <select
              name="language"
              id="language"
              className="text-gray-500 text-xs w-[80px]"
            >
              <option value="English">English</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
