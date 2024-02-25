"use client"



import React, { useEffect, useState } from 'react';
import './navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      console.log("is scrolled,", isScrolled);
      console.log("window inner length", window.innerWidth);
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <div className="min-h-[100px] top-0 fixed w-screen shadow-xl border-gray-100 z-50">
      <input type="checkbox" id="active" />
      {scrolled ? (
        <div className="py-3 px-2 sm:px-4 md:px-8 lg:px-12  bg-[#846640] min-h-[100px] ">
          <div className="text-black font-serif z-100">
            <h1 className="font-medium text-white text-center text-[20px] md:text-[30px] lg:text-[40px] cri mr-3">
              QuantumField: Bringing into <br /> existence out of nothing
            </h1>
          </div>

          <label htmlFor="active" className="menu-btn  z-100">
            <FaBarsStaggered className=" text-center  mt-3 flex justify-center items-center" />
          </label>
        </div>
      ) : (
        <div className="py-3  px-2 sm:px-4 md:px-8 lg:px-12 bg-transparent min-h-[100px] ">
          <div className="text-white text-[20px] md:text-[30px] lg:text-[49px] font-serif z-100">
            Logo
          </div>
          <div className="flex  gap-2">
            <div className="flex  justify-center menu-btnso text-white absolute">
              <IoPerson />
            </div>
            <div className="flex  justify-center menu-btns text-white absolute">
              <FaCartArrowDown />
              <sup className="mt-1 font-semibold">2</sup>
            </div>
            <label htmlFor="active" className="menu-btn z-100 ">
              {" "}
              <FaBarsStaggered
                className={`${
                  scrolled
                    ? " text-center pl-10 md:ml-0 mt-3 flex justify-center items-center"
                    : " text-center ml-5 md:ml-0 mt-3 flex justify-center items-center"
                }`}
              />
            </label>
          </div>
        </div>
      )}
      <div
        className="wrapper w-full h-full bg-center bg-cover duration-500"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80')`,
        }}
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/service">Services</a>
          </li>
          <li>
            <a href="/books">Books</a>
          </li>
          <li>
            <a href="/blogs">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
