import Image from "next/image";
import React from "react";
import news1 from "../../assets/news1.png";
import { LuCalendarClock } from "react-icons/lu";

const BlogNews = () => {
  const news = [1, 2, 3, 4];
  return (
    <div>
      <div className="py-10 px-2 sm:px-6">
        <p className="black px-[2%]">News</p>
        <div className="flex flex-row flex-wrap lg:flex-col gap-10 lg:gap-20 lg:flex-nowrap justify-center items-center">
          {news.map((item, index) => {
            return (
              <div
                key={index}
                className="flex lg:min-h-[372px] max-w-[461px] lg:max-w-full rounded-2xl flex-col lg:flex-row justify-center items-start shadow-xl border-2 border-gray-200 mx-2 sm:mx-4 md:mx-8"
              >
                <Image
                  src={news1}
                  alt="News One"
                  width={361}
                  height={340}
                  className="md:w-[461px] lg:h-[370px] max-w-[461px]"
                />

                <div className="flex flex-col gap-3 py-3">
                  <p className="roboto text-[#F2D050] text-[20px] md:text-[25px] lg:text-[30px] font-semibold px-4">
                    Reflecting on Milestones and Achievements
                  </p>
                  <p className="text-[15px] md:text-[20px] lg:text-[25px] text-[#3C3B3B] roboto font-normal px-5 pb-2">
                    As QuantumField embraces the spirit of innovation, join us
                    in a reflective journey through the significant milestones
                    and achievements of the past year. From groundbreaking
                    projects to industry recognitions, explore the highlights
                    that have shaped our trajectory and set the stage for even
                    greater advancements in the future.
                  </p>
                  <div className="flex justify-end items-start gap-2 px-2">
                    <LuCalendarClock size={20} className="text-[#828282]" />
                    <p className="text-[#828282] text-[14px] inter">
                      Dec 13, 23 12:00 pm
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogNews;
