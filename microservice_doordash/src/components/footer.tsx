import React from "react"
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 lg:p-20 xl:p-40 text-orange-400 flex items-center justify-between">
    <Link href ="/" className="font-bold text-xl">DOOR DASH</Link>
    <p>© COPYRIGHT</p>
    </div>
  )
};

export default Footer;
