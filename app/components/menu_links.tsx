"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/advlogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar Principal */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 flex items-center justify-between bg-white/20 backdrop-blur-lg px-6 py-3 rounded-xl shadow-md w-[95%] max-w-[1000px] mx-auto z-50">
        {/* Logo */}
        <Image src={Logo} height={60} width={60} alt="logo" priority quality={100} />

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-6 text-white font-semibold">
          {["Menu", "Serviços", "Blog", "Sobre Mim", "Contato"].map((item, index) => (
            <li key={index}>
              <Link href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-yellow-400 transition">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botão de Menu Mobile */}
        <button onClick={toggleMenu} className="md:hidden text-white text-2xl z-50">
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Menu Mobile - Framer Motion */}
      {isOpen && (
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="fixed top-0 right-0 w-3/4 h-full bg-white/90 shadow-lg flex flex-col items-center justify-center gap-8 text-xl font-semibold z-40"
        >
          {["Menu", "Serviços", "Blog", "Sobre Mim", "Contato"].map((item, index) => (
            <Link key={index} href={`/${item.toLowerCase().replace(" ", "")}`} className="hover:text-yellow-500 transition" onClick={toggleMenu}>
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </>
  );
}
