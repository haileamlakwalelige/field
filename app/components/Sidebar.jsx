"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
  const [show, setShow] = useState(1);
  const [width, setWidth] = useState(false);

  const handleWidth = () => {
    setWidth(!width);
  };

  const handleShow = (num) => {
    setShow(num);
  };

  return (
    <div
      className={
        width
          ? "min-w-[350px] max-w-[400px] border-2 border-gray-200 shadow-xl rounded px-5 justify-center mr-5 py-5"
          : "w-[330px] border-2 mr-5 border-gray-200 shadow-xl rounded px-5 justify-center py-5"
      }
    >
      <div
        onClick={handleWidth}
        className="cursor-pointer flex justify-between mb-5"
      >
        <p className="font-semibold text-[20px]">Applied Filters</p>
        {width ? <FaTimesCircle size={20} /> : <AiOutlineBars size={20} />}
      </div>
      <p className="py-2 cursor-pointer text-[20px] font-medium">Book Type</p>
      <div>
        <div>
          <div onClick={() => handleShow(1)}>
            <div className="flex justify-between items-center cursor-pointer">
              <p className="py-2 cursor-pointer text-[18px] font-medium">
                Antiques & Collectibles
              </p>
              {width && (show === 1 ? <FaChevronDown /> : <FaChevronUp />)}
            </div>
            {show === 1 && (
              <div className="flex flex-col gap-3 px-4 mt-3 justify-center items-start">
                <p className="cursor-pointer text-[16px]">Autographs</p>
                <p className="cursor-pointer text-[16px]">Buttons & Pins</p>
                <p className="cursor-pointer text-[16px]">
                  Coins, Currency & Medals
                </p>
                <p className="cursor-pointer text-[16px]">Jewelry</p>
                <p className="cursor-pointer text-[16px]">
                  Magazines & Newspapers
                </p>
                <p className="cursor-pointer text-[16px]">Military</p>
                <p className="cursor-pointer text-[16px]">Paper Ephemera</p>
                <p className="cursor-pointer text-[16px]">Popular Culture</p>
                <p className="cursor-pointer text-[16px]">Posters</p>
                <p className="cursor-pointer text-[16px]">Pottery & Ceramics</p>
                <p className="cursor-pointer text-[16px]">Textiles & Costume</p>
              </div>
            )}
          </div>

          <div onClick={() => handleShow(2)}>
            <div className="flex justify-between items-center cursor-pointer">
              <p className="py-2 cursor-pointer pt-4 font-medium text-[18px]">
                Books2
              </p>
              {width && (show === 2 ? <FaChevronDown /> : <FaChevronUp />)}
            </div>
            {show === 2 && (
              <div className="flex flex-col gap-3 px-2 mt-3 justify-center items-start">
                <p className="cursor-pointer">Book2</p>
                <p className="cursor-pointer">Book</p>
                <p className="cursor-pointer">Book2</p>
                <p className="cursor-pointer">Book2</p>
                <p className="cursor-pointer">Book2</p>
                <p className="cursor-pointer">Book2</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
