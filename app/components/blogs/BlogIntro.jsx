import Image from "next/image";
import React from "react";
import { LuCalendarClock } from "react-icons/lu";
import blog1 from "../../assets/blog1.png";

const BlogIntro = () => {
  const blogs = [1, 2, 3];
  return (
    <div>
      <h1 className="back px-[2%] lg:px-[12%] text-center cri">
        QuantumField Chronicles: Pioneering Innovations at the Intersection of
        Quantum Tech and IT Excellence
      </h1>

      <div className="py-10 px-2 sm:px-6">
        <p className="black px-[2%]">Blog</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((items, index) => {
            return (
              <div className="rounded-xl flex flex-col justify-start items-start gap-3 max-w-[462px] shadow-xl border-gray-200 border-2">
                <Image
                  src={blog1}
                  alt="blog One"
                  width={361}
                  height={342}
                  className="rounded-t-xl md:w-[461px] md:h-[342px]"
                />
                <div className="flex justify-start items-start gap-2 px-2">
                  <LuCalendarClock size={20} className="text-[#828282]"/>
                  <p className="text-[#828282] text-[14px] inter">
                    Dec 13, 23 12:00 pm
                  </p>
                </div>
                <p className="roboto text-[#F2D050] text-[18px] md:text-[20px] font-semibold px-2">
                  Tech for Good: QuantumField's Commitment to Sustainability
                </p>
                <p className="text-[15px] text-[#3C3B3B] roboto font-normal px-3 pb-2">
                  In an era where environmental consciousness is paramount,
                  QuantumField goes green. Discover our sustainability
                  initiatives, from eco-friendly IT solutions to reducing our
                  carbon footprint. Join us in our mission to leverage
                  technology for a sustainable and greener future.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogIntro;
