import Image from "next/image";
import React from "react";
import comm1 from "../../assets/comm1.png";
import comm2 from "../../assets/comm2.png";
import comm3 from "../../assets/comm3.png";

const HomeCommitment = () => {
  return (
    <div>
      <div className="flex flex-col min-h-[50vh] min-w-screen">
        <h1 className="black text-center roboto">Our Commitment</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center  items-center px-[2%] lg:px-[10%] gap-[2%] lg:gap-[10%]">
          <div className="min-w-[350px] flex flex-col justify-center items-center">
            <p className="text-start text-[#633F12] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[10%] my-[3%]">
              Client-Centrist Approach
            </p>
            <Image
              src={comm1}
              alt="client-centric approach"
              width={282}
              height={157}
              className="h-[157px] w-[282px]"
            />
          </div>
          <div className="min-w-[350px] flex flex-col justify-center items-center">
            <p className="text-center text-[#633F12] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[10%] my-[3%]">
              Expert Team
            </p>
            <Image
              src={comm2}
              alt="Expert Team"
              width={282}
              height={157}
              className="h-[157px] w-[282px]"
            />
          </div>
          <div className="min-w-[350px] flex flex-col justify-center items-center">
            <p className="text-center text-[#633F12] text-[20px] md:text-[25px] lg:[32px] font-semibold px-[2%] lg:px-[10%] my-[3%]">
              Values-Driven
            </p>
            <Image
              src={comm3}
              alt="Values-Driven"
              width={282}
              height={157}
              className="h-[157px] w-[282px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCommitment;
