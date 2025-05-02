"use client";

import Image from "next/image";
import Link from "next/link";
import Aboutcintia from "@/public/Aboutcintia.jpg";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-[#142C38] text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <motion.div
        className="md:w-1/2 text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-4">Saiba mais quem somos</h2>
        <div className="w-16 h-[2px] bg-gray-400 mb-4"></div>
        <p className="text-gray-300 mb-4 leading-relaxed">
          <span className="text-[#C3A039]">Com sede em Pedro II/Piauí</span>, o escritório{" "}
          <span className="text-[#C3A039]">Cíntia Maise | Advocacia Especializada</span> oferece
          atendimento personalizado e de alta qualidade em demandas previdenciárias. Atuamos tanto em{" "}
          <span className="text-[#C3A039]">consultas para esclarecer sua situação</span> quanto na{" "}
          <span className="text-[#C3A039]">
            representação judicial e extrajudicial para requerimento de benefícios.
          </span>
        </p>

        <Link
          href="/about"
          className="inline-block bg-[#C3A039] text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition"
        >
          Ver mais
        </Link>
      </motion.div>

      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Image
          src={Aboutcintia}
          alt="Foto de Cíntia Maise"
          width={600}
          height={600}
          priority
          quality={100}
          className="rounded-xl shadow-lg object-cover"
        />
      </motion.div>
    </section>
  );
}
