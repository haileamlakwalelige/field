import Image from "next/image";
import React from "react";
import log1 from "../../assets/log1.png";
import gog from "../../assets/gog.png";
import link from "../../assets/link.png";
import face from "../../assets/face.png";
import Link from "next/link";

const SignUpIntro = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center min-h-[580px]">
        <div>
          <Image
            src={log1}
            alt=""
            width={436}
            height={579}
            className="min-h-[580px]"
          />
        </div>
        <div className=" lg:col-span-2 bg-[#F2D050] roboto justify-center items-center flex min-h-[580px]">
          <p className="text-white text-[18px] md:text-[21px] lg:text-[24px] px-2 md:px-5">
          Welcome to QuantumField, where innovative tech consulting meets insightful literature; login now to access exclusive content, explore our quantum achievements, and be at the forefront of the future of work and innovation!
          </p>
        </div>
        <div className="min-h-[580px]">
          <p className="text-[#846640] cri text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] text-center font-bold mb-10">
            Welcome Back
          </p>
          <form className="flex flex-col justify-center items-center gap-4">
          <input
              type="text"
              className="rounded-xl border-[#846640] border-2 min-w-[300px] text-[18px] placeholder:text-[18px] placeholder:pl-3 min-h-[50px] "
              placeholder="Full Name"
            />
            <input
              type="email"
              className="rounded-xl border-[#846640] border-2 min-w-[300px] text-[18px] placeholder:text-[18px] placeholder:pl-3 min-h-[50px] "
              placeholder="Email"
            />
            <input
              type="password"
              className="rounded-xl border-[#846640] border-2 min-w-[300px] text-[18px] placeholder:text-[18px] placeholder:pl-3 min-h-[50px] "
              placeholder="Password"
            />

            <button className="min-w-[300px] bg-[#846640] text-white py-2 rounded-xl">
              Login
            </button>
            <div className="flex border-[#846640] border-2 rounded-xl gap-3 min-w-[300px] py-2 px-2 mt-6">
              <Image src={gog} alt="" width={25} height={25} />
              <p className="font-semibold text-[16px]">Continue With Google</p>
            </div>
            <div className="flex border-[#846640] border-2 rounded-xl gap-3 min-w-[300px] py-2 px-2">
              <Image src={link} alt="" width={25} height={25} />
              <p className="font-semibold text-[16px]">
                Continue With LinkedIn
              </p>
            </div>
            <div className="flex border-[#846640] border-2 rounded-xl gap-3 min-w-[300px] py-2 px-2">
              <Image src={face} alt="" width={25} height={25} />
              <p className="font-semibold text-[16px]">
                Continue With Facebook
              </p>
            </div>
          </form>
                      <div className="flex roboto justify-center items-center gap-4">
              <p className="text-black font-medium py-1 roboto -ml-6">
              Already have an account? 
              </p>
              <Link href='/login'>
                Sign In
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpIntro;
