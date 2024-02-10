import React from "react";

const HomeWhat = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[40vh] bg-[#846640] px-[2%] lg:px-[10%] py-[3%] my-[3%]">
      <h1 className="white">What Sets Us Apart</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[4px] md:gap-[10px] my-4">
        <div className="flex flex-col">
          <p className="text-center text-white text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[10%] mt-[3%]">
            Quantum Innovation
          </p>
          <p className="text-center text-[#F2D050] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%]  m-[3%]">
          We are at the forefront of the quantum tech frontier, constantly pushing boundaries and exploring new horizons. Our solutions are not just about meeting today's needs but anticipating and preparing for tomorrow's challenges.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-white text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[10%] mt-[3%]">
          Collaborative Partnership
          </p>
          <p className="text-center text-[#F2D050] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%]  m-[3%]">
          QuantumField is more than a service provider; we are your strategic partner. We believe in fostering long-term relationships, working alongside you to achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeWhat;
