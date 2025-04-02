"use client";
import Image from "next/image";
import banner from "../../public/banner.jpeg";

export default function Navbar() {
  return (
    <div className="relative w-screen h-screen">
      <Image 
        src={banner}
        alt="Banner"
        layout="fill" 
        objectFit="cover" 
        quality={100} 
        priority
      />
    </div>
  );
}
