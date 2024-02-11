"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

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
          ? "min-w-[300px] max-w-[350px] border-2 border-gray-200 shadow-xl rounded px-5 justify-center mr-5 py-5"
          : "w-[200px] border-2 border-gray-200 shadow-xl rounded px-5 justify-center py-5"
      }
    >
      <p onClick={handleWidth} className="cursor-pointer flex justify-end">
        +
      </p>
      <div>
        <div>
          <div onClick={() => handleShow(1)}>
            <div className="flex justify-between items-center">
              <p className="py-2 cursor-pointer text-[18px]">Antiques & Collectibles</p>
              {show === 1 ? <FaChevronDown /> : <FaChevronUp />}
            </div>
            {show === 1 && (
              <div className="flex flex-col gap-3 px-4 mt-3 justify-center items-start">
                <p className="cursor-pointer">Autographs</p>
                <p className="cursor-pointer">Buttons & Pins</p>
                <p className="cursor-pointer">Coins, Currency & Medals</p>
                <p className="cursor-pointer">Jewelry</p>
                <p className="cursor-pointer">Magazines & Newspapers</p>
                <p className="cursor-pointer">Military</p>
                <p className="cursor-pointer">Paper Ephemera</p>
                <p className="cursor-pointer">Popular Culture</p>
                <p className="cursor-pointer">Posters</p>
                <p className="cursor-pointer">Pottery & Ceramics</p>
                <p className="cursor-pointer">Textiles & Costume</p>
              </div>
            )}
          </div>

          <div onClick={() => handleShow(2)}>
            <div className="flex justify-between items-center">
              <p className="py-2 cursor-pointer ">Books1</p>
              {show === 1 ? <FaChevronDown /> : <FaChevronUp />}
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
