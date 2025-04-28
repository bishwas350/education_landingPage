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
      <section>
        <Container>
          <div className="text-center my-8">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <div className="w-10 h-1 bg-pink-600 "></div>
              <span className="text-gray-500 ">Why choose us</span>
            </div>
            <h1 className="font-plus font-semibold text-4xl">
              Best Learning Exprience
            </h1>
          </div>
          <div className="flex gap-5">
            {learn.map((item) => (
              <div className="" key={item.id}>
                <div className=" items-center justify-center space-y-4 bg-[#F9FCFF] p-5 rounded-md shadow-md my-4">
                  <img src={item.img} alt="" />
                  <h1 className="font-plus font-semibold text-2xl text-[#1A2434]">{item.headline}</h1>
                  <p className="font-inter text-xl text-[#1A2434]">{item.discription}</p>
                  <button className="font-inter font-bold text-xl flex gap-4 items-center">Learn more <FaLongArrowAltRight />
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
