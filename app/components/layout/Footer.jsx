import Image from 'next/image'
import React from 'react'
import map from '../../assets/map.png';
import lin from '../../assets/lin.png';
import twit from '../../assets/twit.png';
import phone from '../../assets/phone.png';
import { FaRegCopyright } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='overflow-x-hidden bg-[#846640] min-h-[70vh] flex flex-col justify-center items-center roboto py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-3 lg:gap-10'>
            <div></div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className='text-3xl font-semibold text-white roboto'>Quick Link</p>
                <p className='text-white font-light text-xl'>About Us</p>
                <p className='text-white font-light text-xl'>Service</p>
                <p className='text-white font-light text-xl'>Book</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className='text-3xl font-semibold text-white roboto'>Contact Infomation</p>
                <p className='text-white text-xl font-light'>. Address: Addis Ababa</p>
                <p className='text-white text-xl font-light'>. Phoen: +251 9230927</p>
                <p className='text-white text-xl font-light'>. Email: Quantum@outlook.com</p>
            </div>
            <div className='flex justify-center items-start lg:-mt-10 gap-5 flex-wrap '>
                <Image src={map} alt='' width={50} height={50} className='w-[50px] h-[50p]'/>
                <Image src={lin} alt='' width={50} height={50} className='w-[50px] h-[50p]'/>
                <Image src={twit} alt='' width={50} height={50} className='w-[50px] h-[50p]'/>
                <Image src={phone} alt='' width={50} height={50} className='w-[50px] h-[50p]'/>
            </div>
        </div>

        {/* News Letter Form */}
       <div className='mt-10 flex flex-col justify-center items-center'>
       <p className='text-white text-[20px] md:text-[30px] lg:text-[40px]'>Subscribe to Our Newsletter!</p>
        <form className='mt-4 flex flex-col justify-center items-center'>
            <div>
                <p className='text-white text-lg roboto pb-1'>Name</p>
                <input type='text' className='bg-[#F2D050] text-white min-w-[300px] lg:min-w-[450px] rounded-3xl' />
            </div>
            <div>
                <p className='text-white text-lg roboto pb-1'>Name</p>
                <input type='text' className='bg-[#F2D050] text-white min-w-[300px] lg:min-w-[450px] rounded-3xl' />
            </div>
            <button type='submit' className='text-[#F2D050] bg-white rounded-xl px-10 mt-4 py-2 font-semibold text-xl'>Subscribe</button>
        </form>
       </div>



       {/* Copyright Section */}
       <div className='mt-3 pt-5 font-light roboto text-xl border-t-4 text-white flex justify-center items-center gap-2 w-screen border-white'>
       <FaRegCopyright />
       <p>2024 Quantum Field. All Rights Reserved. </p>
       </div>
    </div>
  )
}

export default Footer