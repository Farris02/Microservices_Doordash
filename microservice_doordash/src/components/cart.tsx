import Link from "next/link";
import Image from "next/image"
import React from "react"

const Cart = () => {
  return (
   <Link href= "/cart" className="flex items=center gap-4">
   <div className='relative w-8 h-8 md:w-6'>
    <Image src = "/shopping cart.png" alt="" fill/>
   </div>
   <span>Cart (3)</span>
   </Link>
  )
};

export default Cart;
