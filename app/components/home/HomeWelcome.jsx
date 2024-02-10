import React from "react";

const HomeWelcome = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh]">
      <h1 className="roboto text-[25px] sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold">
        Hello, Welcome to QuantumField!
      </h1>
      <p className="text-center text-[#633F12] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[10%] my-[3%]">
        We are QuantumField – a dynamic force at the intersection of technology
        and innovation, shaping the future with expertise, excellence, and a
        commitment to pushing the boundaries of what's possible.
      </p>
    </div>
  );
};

export default HomeWelcome;
