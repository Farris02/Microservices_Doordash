import React from "react"
import Menu from "./menu";
import Link from "next/link";
import Cart from "./cart";

const NavigationBar = () => {

  const user = false;
  return (
    <div className="h-12 text-orange-400 p-4 flex items-center justify-between border-b-2 border-b-orange-400 uppercase md:h-24 lg:px-20 xl:px-40">
   <div className = "hidden md:flex gap-4">
      <Link href="/"> HomePage</Link>
      <Link href="/menu"> Menu</Link>
   </div>
   {/* LOGO */}
   <div className="text-xl md:font-bold flex-1 md:text-center">
    <Link href="/">Door Dash</Link>
   </div>
   {/* MOBILE MENU */}
       <div className="md:hidden">
       <Menu/>
       </div>

      <div className = "hidden md:flex gap-4">
      {!user ? (
      <Link href="/login">Login</Link>
      ) : (
      <Link href="/orders"> Orders</Link>
      )}
      <Cart/>
      </div>
      </div>

  )
};

export default NavigationBar;
