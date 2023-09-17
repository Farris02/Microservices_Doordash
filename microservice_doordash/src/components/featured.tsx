import React from "react"
import Image from "next/image";
import { itemsShowcased } from "@/data";
const Featured = () => {
  return (
    <div className="w-screen overflow-auto text-orange-400">
    {/* WRAPPER */}
    <div className="w-max flex"> 
    {/* SINGLE ITEM*/}
   {itemsShowcased.map((item)=> (
    <div key = {item.id} 
    className="w-screen h-[70vh] flex flex-col items-center justify-center p-5 hover: bg-pink-50 transition-all duration-200 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"> 
    {/*IMAGE CONTAINER*/}
    {item.img && (
    <div className= "relative flex-1 w-full">
    <Image 
      src = {item.img}
      alt="" 
      fill 
      className="object-contain"/>
    </div>
    )}
    {/*TEXT CONTAINER*/}
    <div className="flex-1 flex flex-col items-center justify-center text-center gap-3">
    <h1 className="text-lg font-bold uppercase xl:text-2xl 2xl:text-3xl">{item.title}</h1>
    <p className="p-4 2xl:p-8">{item.desc}</p>
    <span className="text-lg font-bold">${item.price}</span>
    <button className="bg-orange-400 text-white p-2 stroke-slate-100 rounded-lg">Add to Cart</button>
    </div>
    </div>
    ))}
    </div>
    </div>
  )
};

export default Featured;
