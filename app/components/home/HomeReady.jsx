import Link from "next/link";
import React from "react";

const HomeReady = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-[40vh]">
        <h1 className="black px-[2%] lg:px-[12%] text-center">
          Ready to Transform Your Business with QuantumField?
        </h1>
        <p className="text-center text-[#633F12] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[12%] mt-[3%]">
          Unleash the full potential of your business with QuantumField's
          innovative tech solutions. Our expert team is ready to collaborate
          with you and elevate your digital landscape.
        </p>
        <Link href="/contact">
          <button className="bg-[#8C7947] text-white px-10 py-1 my-10 text-[20px] md:text-[24px] font-bold rounded-xl">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeReady;
