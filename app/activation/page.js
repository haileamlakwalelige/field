import React from "react";

const Activation = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center">
      <div className="bg-[#F2D050] min-h-[350px] max-w-[700px] lg:min-w-[700px] flex flex-col justify-center items-center">
        <p className="text-center text-[20px] md:text-[22px] lg:text-[24px]  px-2 sm:px-4 md:px-8 lg:px-16">
          Thank you for buying our book. <br /> your activation key:
        </p>
        <p className="font-bold text-[20px] md:text-[22px] lg:text-[24px] ">
          qcyLtO0DkU
        </p>
      </div>
      <div>
        <button
          type="submit"
          className="flex mt-10 text-white py-2 px-10 font-semibold bg-[#846640] text-[20px] md:text-[22px] rounded-xl"
        >
          Continue to Book
        </button>
      </div>
    </div>
  );
};

export default Activation;
