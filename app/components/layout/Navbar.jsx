"use client"



import React, { useEffect, useState } from 'react';
import './navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaCartArrowDown } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import Link from 'next/link';
import { useSelector } from "react-redux";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const cartBook = useSelector((state) => state.cart);

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
          <div className="text-[#846640] text-[20px] md:text-[30px] lg:text-[49px] font-serif z-100">
            Logo
          </div>
          <div className="flex  gap-2">
            <div className="flex  justify-center menu-btnso text-[#846640] absolute">
              <Link href="login">
                <IoPerson className="text-[#846640] " />
              </Link>
            </div>
            <div className="flex  justify-center menu-btns text-[#846640] absolute">
              <FaCartArrowDown className="text-[#846640] " />
              <sup className="mt-1 font-semibold text-[#846640]">{cartBook.length}</sup>
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
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/service">Services</Link>
          </li>
          <li>
            <Link href="/books">Books</Link>
          </li>
          <li>
            <Link href="/blogs">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
