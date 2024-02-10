import Image from "next/image";
import React from "react";
import servi from "../../assets/servi.png";
import ser1 from "../../assets/ser1.png";
import ser2 from "../../assets/ser2.png";
import ser3 from "../../assets/ser3.png";
import ser4 from "../../assets/ser4.png";
import ser5 from "../../assets/ser5.png";
import ser6 from "../../assets/ser6.png";
import ser7 from "../../assets/ser7.png";
import ser8 from "../../assets/ser8.png";
import ser9 from "../../assets/ser9.png";

const ServiceWhole = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image
          src={servi}
          alt="service"
          width={300}
          height={97}
          className="max-w-[743px] max-[97px]"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-6 md:gap-6 lg:gap-20 px-[3%] pt-20">
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser1}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
              Information Technology Expertise
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
              Unleash the power of QuantumField's Information Technology
              expertise, providing strategic insights and solutions to propel
              your business forward. We specialize in understanding and
              addressing your unique IT needs.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser2}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            Custom Software Development
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            QuantumField crafts tomorrow's software today. Our expert team transforms your ideas into robust, scalable applications, ensuring that your digital presence aligns seamlessly with your business objectives.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser3}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            Network Systems Integration
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            Experience seamless connectivity with QuantumField's Network Systems Integration services. We navigate the complexities of networks, ensuring optimal performance and a smooth flow of information throughout your organization.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser4}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            On-Site Management and IT Functions
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            QuantumField brings IT mastery to your doorstep. Our on-site management services ensure uninterrupted operations, proactive support, and hands-on assistance for your technology needs.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser5}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            Computer Systems Development
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            QuantumField specializes in quantum-engineered systems designed to meet your unique needs. From conceptualization to integration, we ensure that your computer systems are tailored for maximum efficiency.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser6}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            Application Development
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            QuantumField's application design and development services immerse your audience in user-centric experiences. Our crafted applications resonate with your users, enhancing your digital presence and engagement.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser7}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            IT Technical Support Services
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            Count on QuantumField for reliable IT technical support services. Our dedicated team ensures your systems run smoothly, providing peace of mind in the ever-evolving tech landscape.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser8}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            Infrastructure and Network Design
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            QuantumField architects success with robust IT infrastructure and network design services. Elevate your operations with a blueprint crafted for efficiency, resilience, and future scalability.
            </p>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-center border-gray-200 border-2 max-w-[550px]">
            <Image
              src={ser9}
              alt="service"
              width={410}
              height={385}
              className="max-w-[410px] h-[350px]"
            />
            <p className="border-b-2 border-black text-[20px] md:text-[25px] lg:[32px] font-semibold px-[1%] lg:px-[3%] mx-[4%] pt-10px text-center">
            Technical Consulting
            </p>
            <p className="text-center font-medium text-[16px] lg:text-[20px] md:text-[18px] py-[2%]">
            Benefit from QuantumField's strategic insights and guidance. Our technical consulting services provide the roadmap for informed decisions and quantum leaps in your business strategy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceWhole;
