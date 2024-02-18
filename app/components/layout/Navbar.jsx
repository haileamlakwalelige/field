"use client"



import React, { useEffect, useState } from 'react';
import './navbar.css';
import { FaBarsStaggered } from "react-icons/fa6";


const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    

  
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
        console.log('is scrolled,', isScrolled);
        console.log("window inner length", window.innerWidth);
        setScrolled(isScrolled);
      };
  
      const handleResize = () => {
        handleScroll(); // Update scroll state on resize
      };
  
      // Subscribe to the scroll and resize events when the component mounts on the client side
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
  
        // Unsubscribe from the events when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);
  return (
    <div className='min-h-[100px] top-0 fixed w-screen shadow-xl border-gray-100'>
      <input type="checkbox" id="active" />
      {scrolled ? (<div className='py-3 px-2 sm:px-4 md:px-8 lg:px-12  bg-[#846640] min-h-[100px] '>
        <div className='text-black font-serif z-100'>
            <h1 className='font-medium text-white text-center text-[20px] md:text-[30px] lg:text-[40px] cri'>QuantumField: Bringing into <br/> existence out of nothing</h1>
        </div>
      <label htmlFor="active" className="menu-btn  z-100"><FaBarsStaggered  className=' text-center mt-3 flex justify-center items-center'/></label>
      </div>):(<div className='py-3  px-2 sm:px-4 md:px-8 lg:px-12 bg-transparent min-h-[100px] '>
        <div className='text-white text-[20px] md:text-[30px] lg:text-[49px] font-serif z-100'>Logo</div>
      <label htmlFor="active" className="menu-btn z-100"><FaBarsStaggered  className=' text-center mt-3 flex justify-center items-center'/></label>
      </div>) }
      {/* <div className='py-3 bg-[#846640] min-h-[100px] '>
        <div className='text-black font-serif z-100'>Hello</div>
      <label htmlFor="active" className="menu-btn relative z-100"><FaBarsStaggered  className='absolute text-center mt-3 flex justify-center items-center'/></label>
      </div> */}
      <div className="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Books</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
