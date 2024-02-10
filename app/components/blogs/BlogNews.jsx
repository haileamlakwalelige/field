import Image from "next/image";
import React from "react";
import news1 from "../../assets/news1.png";
import { LuCalendarClock } from "react-icons/lu";

const BlogNews = () => {
  return (
    <div>
      <div className="py-10 px-2 sm:px-6">
        <p className="black px-[2%]">News</p>
        <div>
          <Image
            src={news1}
            alt="News One"
            width={361}
            height={340}
            className="md:w-[461px]"
          />

          <div>
            <p className="roboto text-[#F2D050] text-[18px] md:text-[20px] font-semibold px-2">
              Reflecting on Milestones and Achievements
            </p>
            <p className="text-[15px] text-[#3C3B3B] roboto font-normal px-3 pb-2">
              In an era where environmental consciousness is paramount,
              QuantumField goes green. Discover our sustainability initiatives,
              from eco-friendly IT solutions to reducing our carbon footprint.
              Join us in our mission to leverage technology for a sustainable
              and greener future.
            </p>
            <div className="flex justify-end items-start gap-2 px-2">
              <LuCalendarClock size={20} className="text-[#828282]" />
              <p className="text-[#828282] text-[14px] inter">
                Dec 13, 23 12:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
