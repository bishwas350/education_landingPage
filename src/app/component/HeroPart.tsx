'use client'
import { AvatarCircles } from "@/components/magicui/avatar-circles";
import { image } from "motion/react-client"
import Container from "./Container"
import google from "/public/google.png"
import canva from "/public/Canva.png"
import amazon from "/public/Amazon.png"
import sketch from "/public/Sketch.png"
import khalamma from "/public/borokhalamma.png"
function HeroPart() {
  const pepole =[
    {
      id: 1,
      imageUrl: "/hero1.png",
    },
    {
      id: 2,
      imageUrl: "/hero2.png",
    
    },
    {
      id: 3,
      imageUrl: "/hero3.png",
    
    },
    {
      id: 4,
      imageUrl: "/hero4.png",
    
    },
    
  ];
  const left =[
    {
      id:1,
      img:"/lefthero.png",
      discription:"UI/UX Design",
      name:'Donald Robert'
    },
    {
      id:2,
      img:"/lefthero2.png",
      discription:"Web Development",
      name:'John White'
    },
  ]
  return (
    <>
    <section>
      <div className="bg-[#F9FCFF] py-5">
        <Container>
          <div className="flex">
          <div className="w-1/2">
            <h1 className="font-plus font-bold text-6xl text-[#1A2434] leading-24">Master Digital Skills with Ease!</h1>
            <p className="font-inter  text-[#1A2434] text-xl ">Unlock Digital Mastery Effortlessly! Explore and enhance your skills with our user-friendly platform.</p>
            <div className="flex mt-4">
              <p className="h-5 text-6xl text-[#A4074D] ">|</p>
            <AvatarCircles numPeople={900} avatarUrls={pepole} />
            </div>
            <div className="flex gap-4">
              <button className="py-4 px-14 hover:text-white text-black font-bold font-inter text-xl  hover:bg-[#A4074D] bg-transparent outline-2 rounded-md outline-[#A4074D]">Start learning</button>
              <button className="py-4 px-14 hover:text-white text-black font-bold font-inter text-xl  hover:bg-[#A4074D] bg-transparent outline-2  outline-[#A4074D] rounded-md">Learn more</button>
            </div>
            <p className="font-inter  text-[#1A2434] text-xl mt-2">Trusted by</p>
            <div className="flex mt-3 gap-3" >
              <img src={google.src} alt=""
              height={100}
              width={100}
              />
              <img src={canva.src} alt="" 
               height={100}
               width={100}/>
              <img src={amazon.src} alt="" 
               height={100}
               width={100}/>
              <img src={sketch.src} alt="" 
               height={100}
               width={100}/>
            </div>
          </div>
          <div className="w-[20%]">
            <div className="p-3 bg-[#ffffff] rounded-md -mr-10 z-50 relative mt-10">
              <h3 className="font-medium font-inter text-xl text-[#1A2434] mb-2">Certified Instructor</h3>
              {
                left.map((item)=>(
                  <div className="space-y-3 flex space-x-3" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="">
                    <h3 className="font-medium font-inter text-xl text-[#1A2434]">{item.name}</h3>
                    <p className="font-inter font-light text-[#575455] text-[14px]">{item.discription}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="w-[30%] justify-end flex">
            <img src={khalamma.src} alt="" />
          </div>
          </div>
        </Container>
      </div>
    </section>
    </>
  )
}

export default HeroPart