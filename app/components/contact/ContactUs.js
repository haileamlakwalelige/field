import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { CiMail } from "react-icons/ci";

const ContactUs = () => {
  return (
    <div
      className="mt-40 contact px-2 sm:px-6 md:px-12 lg:px-20 justify-center items-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80')`,
      }}
    >
      <div className="bg-[#846640] lg:min-h-[500px] grid grid-cols-1 lg:grid-cols-2  justify-center items-center lg:w-full overflow-hidden">
        <div className="bg-[#846640] lg:min-h-[500px] flex flex-col text-white roboto">
          <p className="text-white font-semibold roboto pt-5 text-[20px] md:text-[30px] lg:text-[40px] text-center pb-4 sm:pb-8 md:pb-12 ">
            Let&apos; Get in Touch
          </p>
          <div className="flex justify-start items-center px-2 sm:px-6 md:px-12 lg:px-20 gap-5 xl:text-[24px] text-[16px] lg:text-[20px] md:text-[18px] py-5 pb-10">
            <LuPhone size={40} />
            <p>+251-932-980730</p>
          </div>
          <div className="flex justify-start items-center px-2 sm:px-6 md:px-12 lg:px-20 gap-5 xl:text-[24px] text-[16px] lg:text-[20px] md:text-[18px] py-5 pb-10">
            <CiMail size={40} />
            <p>quantumfield@tech.net</p>
          </div>
          <div className="flex justify-start items-center px-2 sm:px-6 md:px-12 lg:px-20 gap-5 xl:text-[24px] text-[16px] lg:text-[20px] md:text-[18px] py-5 pb-10">
            <CiLocationOn size={40} />
            <p>Bole Road, Addis Ababa, Ethiopia</p>
          </div>
        </div>
        <div className="bg-[#F2D050] lg:min-h-[500px] px-2 sm:px-6 py-2">
          <div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-[16px] md:text-[18px] font-medium">Name</p>
                <input
                  type="text"
                  className="bg-[#F2D050] min-w-[300px] px-3 min-h-[50px] max-w-[450px] text-white rounded-xl border-white border-2"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[16px] md:text-[18px] font-medium">Email</p>
                <input
                  type="text"
                  className="bg-[#F2D050] min-h-[50px] px-3 min-w-[300px] max-w-[450px] text-white rounded-xl border-white border-2"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[16px] md:text-[18px] font-medium">
                  Message
                </p>
                <textarea
                  cols={30}
                  rows={4}
                  type="text"
                  className="bg-[#F2D050] px-3 min-w-[300px] max-w-[450px] text-white rounded-xl border-white border-2"
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="text-[#F2D050] bg-white py-2 px-10 text-center rounded-xl font-medium text-[18px] md:text-[22px] lg:text-[24px]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
