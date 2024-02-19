import React from "react";

const ActivationCode = () => {
  return (
    <div className="mt-32 flex flex-col justify-center items-center">
      <div className="bg-[#F2D050] min-h-[350px] max-w-[700px] lg:min-w-[700px] flex flex-col justify-center items-center">
        <p className="text-center font-normal text-[20px] md:text-[22px] lg:text-[24px]  px-2 sm:px-4 md:px-8 lg:px-16">
          Enter activation key:
        </p>
        <p className="font-bold text-[20px] md:text-[22px] lg:text-[24px] rounded-xl border-[#846640] border-2 px-8 py-1 my-3">
          qcyLtO0DkU
        </p>
        <div>
          <button
            type="submit"
            className="flex mt-10 text-white py-2 px-10 font-semibold bg-[#846640] text-[20px] md:text-[22px] lg:text-[24px] rounded-xl"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivationCode;
