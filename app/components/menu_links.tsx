"use client";

import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../../public/advlogo.png";
import { motion } from "framer-motion";

export function Menu_links() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  const menuVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { stiffness: 20, damping: 15 },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: { stiffness: 20, damping: 15 },
    },
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto flex justify-between text-gray-200
        text-xl items-center px-12 h-20"
      >
        <a href="#">
          <Image src={logo} alt="Logo" width={100} height={100} priority />
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
          <li>
            <Link to="sobre" smooth={true} offset={50} duration={500}>
              Sobre Mim
            </Link>
          </li>
          <li>
            <Link to="efeitos" smooth={true} offset={50} duration={500}>
              Efeitos
            </Link>
          </li>
          <li>
            <Link to="planos" smooth={true} offset={50} duration={500}>
              Planos
            </Link>
          </li>
          <li>
            <Link to="faq" smooth={true} offset={50} duration={500}>
              FAQ
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} offset={50} duration={500}>
              Contato
            </Link>
          </li>
        </ul>

        {/* Botão do menu mobile */}
        <div
          onClick={toggleNav}
          className="md:hidden z-50 text-gray-200 cursor-pointer"
          role="button"
          aria-label={nav ? "Fechar menu" : "Abrir menu"}
        >
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Menu Mobile */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-black z-40 flex items-center justify-center"
        >
          <ul className="font-semibold text-4xl space-y-8 text-center text-white">
            <li>
              <Link
                to="Menu"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="services"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                services
              </Link>
            </li>
            <li>
              <Link
                to="blog"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Sobre Mim
              </Link>
            </li>
            <li>
              <Link
                to="maps"
                onClick={closeNav}
                smooth={true}
                offset={50}
                duration={500}
              >
                Localização
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
