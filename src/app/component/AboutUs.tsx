"use client";
import img from "/public/Image.png";
import Container from "./Container";
import Flex from "./Flex";

import { FaLongArrowAltRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

function AboutUs() {
  const [counter, setCounter] = useState(false);
  const counterRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounter(true);
        }
      },
      {
        threshold: 0.5
      }
    );
    if (counterRef.current){
        observer.observe(counterRef.current);
    }
    return ()=>{
        if (counterRef.current){
            observer.unobserve(counterRef.current);
        }
    
    }
  },[]); 
  return (
    <>
      <section className="bg-[#F9FCFF] py-10 md:p-20">
        <Container>
          <div className="flex flex-col md:flex-row gap-10 justify-between">
            <div className="w-full md:w-[50%] p-4 md:p-0">
              <img src={img.src} alt="" className="w-full h-auto rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 p-4 md:p-0">
              <div className="">
                <Flex className="items-center gap-2 mb-2">
                  <div className="h-1 w-10 bg-pink-600"></div>
                  <span className="font-inter text-2xl">About us</span>
                </Flex>
              </div>
              <div className="">
                <h1 className="font-plus font-semibold text-2xl md:text-3xl">
                  E-Learning Platform for Digital Skills
                </h1>
                <p className="mt-6 md:mt-10 font-inter text-lg md:text-xl">
                  Empower yourself with the knowledge and skills gained through
                  online education! The key to your future! Empower yourself
                  with the knowledge and skills gained through online education!
                  The key to your future!
                </p>
                <button className="bg-[#A4074D] px-4 py-2 rounded-md flex items-center gap-5 text-white font-inter font-bold mt-4">
                  Learn more <FaLongArrowAltRight />
                </button>
              </div>
            </div>
          </div>
            <div className="mt-10 md:mt-5" ref={counterRef}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
                <div className="text-center p-4">
                <h1 className="font-plus font-bold text-3xl lg:text-6xl text-[#1A2434]">{counter ? <CountUp end={15} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">+</span>
                </h1>
                <p className="font-inter text-lg md:text-xl">Years of experience</p>
                </div>
                <div className="text-center p-4">
                <h1 className="font-plus font-bold text-3xl lg:text-6xl text-[#1A2434]">{counter ? <CountUp end={100} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">K</span>
                </h1>
                <p className="font-inter text-lg md:text-xl">Years of experience</p>
                </div>
                <div className="text-center p-4">
                <h1 className="font-plus font-bold text-3xl lg:text-6xl text-[#1A2434]">{counter ? <CountUp end={45} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">+</span>
                </h1>
                <p className="font-inter text-lg md:text-xl">Years of experience</p>
                </div>
                <div className="text-center p-4">
                <h1 className="font-plus font-bold text-3xl lg:text-6xl text-[#1A2434]">{counter ? <CountUp end={98} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">%</span>
                </h1>
                <p className="font-inter text-lg md:text-xl">Years of experience</p>
                </div>
                </div>
            </div>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;
