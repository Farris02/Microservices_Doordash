import React from "react"
import Image from "next/image"

const CartPage = () => {
  return (
  <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-orange-500">
    {/* PRODUCTS CONTAINER */}
    <div className="h-1/2 p-3 flex flex-col justify-center">
      {/* SINGLE ITEM */}
      <div className="flex items-center justify-between mb-4">
      <Image src="/food/Bento Box.png" alt="" width={200} height = {200}/>
      <div className="">
      <h1 className="uppercase text-2xl font-bold">Beef Bento Box</h1>
      <span className="font-bold"> Large</span>
      </div>
      <h2 className="font-bold">$30</h2>
      <span className="cursor-pointer">X</span>
      </div>
     </div>
     <div className="h-1/2 p-3 flex flex-col justify-center">
      {/* SINGLE ITEM */}
      <div className="flex items-center justify-between mb-4">
      <Image src="/food/fetuccine.png" alt="" width={200} height={200}/>
      <div className="">
      <h1 className="uppercase text-2xl font-bold">Fetuccine</h1>
      <span className="font-bold">Regular</span>
      </div>
      <h2 className="font-bold">$23</h2>
      <span className="cursor-pointer">X</span>
      </div>
     </div>
     <div className="h-1/2 p-3 flex flex-col justify-center">
      {/* SINGLE ITEM */}
      <div className="flex items-center justify-between mb-4">
      <Image src="/food/Cheeseburger.png" alt="" width={200} height = {200}/>
      <div className="">
      <h1 className="uppercase text-2xl font-bold">Cheeseburger</h1>
      <span className="font-bold">With Fries</span>
      </div>
      <h2 className="font-bold">$20</h2>
      <span className="cursor-pointer">X</span>
      </div>
     </div>
    {/* PAYMENT CONTAINER */}
    <div className="h-1/2 p-4">
    <div className="flex justify-between">
    <span className=""> Subtotal (3 items) </span>
    <span className="font-bold">$73</span>
    </div>
    <div className="flex justify-between">
    <span className="">Delivery</span>
    <span className="font-bold">$10</span>
    </div>
    <hr className=""/>
    <div className="flex justify-between">
    <span className="">Total Price</span>
    <span className="font-bold">$83</span>
    </div>
    <button className=" bg-orange-400 text-white p-3 rounded-md">CHECKOUT</button>
    </div>
    </div>
  )
};

export default CartPage;
