"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image";


const data = [
{
id: 1,
title: "Great Asian food delivered to your home!",
image: "/slide 1.png"
},
{
id: 2,
title: "Enjoy fantastic pizza with close friends!",
image: "/slide 2.jpg"
},
{
id: 3,
title: "Enjoy amazing burgers with friends!",
image: "/slide 3.jpg"
},
];





const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(()=>{
    const interval = setInterval(
      ()=>setCurrentSlide((prev)=> (prev === data.length -1 ? 0 : prev +1))
    ,1500)
    return ()=> clearInterval(interval);
  },[]);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-pink-100">
    {/* TEXT CONTAINER */}
    <div className="flex-1 flex items-center justify-center flex-col gap-8 text-orange-400 font-bold ">
      <h1 className="text-4xl text-center uppercase p-4 md:p-4 md:text-4xl xl:text-7">
        {data[currentSlide].title}
      </h1>
      <button className="bg-orange-400 text-white py-4 px-8">Order Now</button>
    </div>
    {/* IMAGE CONTAINER */}
    <div className=" w-full flex-1 h-1/2 relative lg:h-full">
      <Image src = {data[currentSlide].image} alt="" fill className="object-cover"/>
    </div>
    </div>
  )
};

export default Slider;
