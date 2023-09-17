"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link";
import Cart from "./cart";

const links = [
{id: 1, title: "Homepage", url: "/"},
{id: 2, title: "Menu", url: "/menu"}
];

const Menu = () => {
   const [open,setOpen] = useState(false)
   const user = false;
  return (
    <div>
      {!open ? (
      <Image src="/menu.png" alt="" width={20} height={20} onClick={()=>setOpen(true)} /> )
      : (
        <Image src="/red cross.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
      )}
{open && (
    <div className="bg-orange-500 text-white absolute left-0 top-24 w-full h-[calc{100vh-6rem)] flex flex-col gap-8 items-center text-2xl">
    {links.map(item=>(
    <Link href = {item.url} key = {item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
    ))}
    {!user ? ( 
    <Link href = "/login" onClick={()=>setOpen(false)}>Login</Link> 
    ) : (
    <Link href = "/orders" onClick={()=>setOpen(false)}>Orders</Link> 
    )}
    <Link href = "/cart" onClick={()=>setOpen(false)}>
    <Cart/>
    </Link>
          
          </div>)}
        </div>
  );
};

export default Menu;
