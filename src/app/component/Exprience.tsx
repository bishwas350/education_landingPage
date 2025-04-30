"use client";

import Container from "./Container";
import Flex from "./Flex";
import { FaLongArrowAltRight } from "react-icons/fa";

function Exprience() {
  const learn = [
    {
      id: 1,
      img: "/Person.svg",
      headline: "Expert Instructor",
      discription: "Empower yourself with the knowledge and skills gained...",
    },
    {
      id: 2,
      img: "/MonitorPlay.svg",
      headline: "Expert Instructor",
      discription: "Empower yourself with the knowledge and skills gained...",
    },
    {
      id: 3,
      img: "/LockKeyOpen.svg",
      headline: "Expert Instructor",
      discription: "Empower yourself with the knowledge and skills gained...",
    },
    {
      id: 4,
      img: "/Certificate.svg",
      headline: "Expert Instructor",
      discription: "Empower yourself with the knowledge and skills gained...",
    },
  ];
  return (
    <>
      <section className="py-10 md:py-20">
        <Container>
          <div className="text-center mb-8 md:mb-12">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-8 md:w-10 h-1 bg-pink-600"></div>
              <span className="text-gray-500 text-base md:text-lg">Why choose us</span>
            </div>
            <h1 className="font-plus font-semibold text-2xl md:text-4xl text-[#1A2434]">
              Best Learning Experience
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {learn.map((item) => (
              <div className="flex flex-col" key={item.id}>
                <div className="h-full flex flex-col items-center justify-center space-y-3 md:space-y-4 bg-[#F9FCFF] p-4 md:p-5 rounded-md shadow-md">
                  <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    <img src={item.img} alt="" className="w-12 h-12 md:w-16 md:h-16" />
                  </div>
                  <h1 className="font-plus font-semibold text-xl md:text-2xl text-[#1A2434] text-center">{item.headline}</h1>
                  <p className="font-inter text-base md:text-xl text-[#1A2434] text-center">{item.discription}</p>
                  <button className="font-inter font-bold text-lg md:text-xl flex items-center gap-2 md:gap-4 text-[#A4074D] hover:text-[#1A2434] transition-colors duration-300">Learn more <FaLongArrowAltRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

export default Exprience;
