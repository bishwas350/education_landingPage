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
      <section className="bg-[#F9FCFF] p-20">
        <Container>
          <div className="flex gap-10 justify-between ">
            <div className="w-[50%]">
              <img src={img.src} alt="" />
            </div>
            <div className="w-1/2">
              <div className="">
                <Flex className="items-center gap-2 mb-2">
                  <div className="h-1 w-10 bg-pink-600"></div>
                  <span className="font-inter text-2xl">About us</span>
                </Flex>
              </div>
              <div className="">
                <h1 className="font-plus font-semibold text-3xl">
                  E-Learning Platform for Digital Skills
                </h1>
                <p className="mt-10 font-inter text-xl">
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
            <div className="mt-5" ref={counterRef}>
                <div className="flex gap-10 justify-between items-center">
                <div className="">
                <h1 className="font-plus font-bold text-6xl text-[#1A2434]">{counter ? <CountUp end={15} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">+</span>
                </h1>
                <p className="font-inter text-xl">Years of experience</p>
                </div>
                <div className="">
                <h1 className="font-plus font-bold text-6xl text-[#1A2434]">{counter ? <CountUp end={100} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">K</span>
                </h1>
                <p className="font-inter text-xl">Years of experience</p>
                </div>
                <div className="">
                <h1 className="font-plus font-bold text-6xl text-[#1A2434]">{counter ? <CountUp end={45} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">+</span>
                </h1>
                <p className="font-inter text-xl">Years of experience</p>
                </div>
                <div className="">
                <h1 className="font-plus font-bold text-6xl text-[#1A2434]">{counter ? <CountUp end={98} start={0} delay={0} duration={5}/> :"0"} 
                <span className="text-[#A4074D]">%</span>
                </h1>
                <p className="font-inter text-xl">Years of experience</p>
                </div>
                </div>
            </div>
        </Container>
      </section>
    </>
  );
}

export default AboutUs;
