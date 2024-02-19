import Image from "next/image";
import React from "react";
import log1 from "../../assets/log1.png";

const LoginIntro = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center min-h-[580px]">
        <div>
          <Image src={log1} alt="" width={436} height={579} />
        </div>
        <div className=" lg:col-span-2 bg-[#F2D050] roboto justify-center items-center flex">
          <p className="text-white text-[18px] md:text-[21px] lg:text-[24px]">
            Welcome to QuantumField, where innovative tech consulting meets
            insightful literature; login now to access exclusive content,
            explore our quantum achievements, and be at the forefront of the
            future of work and innovation!
          </p>
        </div>
        <div>
          <p className="text-[#846640] cri text-[20px] md:text-[24px] lg:text-[28px]">
            Welcome Back
            <form className="flex flex-col justify-center items-center gap-4">
              <input
                type="email"
                className="rounded-xl border-[#846640] border-2 min-w-[300px]"
                placeholder="Email"
              />
            </form>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginIntro;
