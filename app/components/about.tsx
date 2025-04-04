"use client";

import Image from "next/image";
import Aboutcintia from "@/public/Aboutcintia.jpg";

export default function About() {
  return (
    <section className="bg-[#142C38] text-white py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <div className="md:w-1/2 text-left">
        <h2 className="text-3xl font-bold mb-4">Saiba mais quem somos</h2>
        <div className="w-16 h-[2px] bg-gray-400 mb-4"></div>
        <p className="text-gray-300 mb-4 leading-relaxed">
          <span className="text-[#C3A039]">
            Com sede em Pedro II/Piauí
          </span>
          , o escritório{" "}
            <span className="text-[#C3A039]">
            Cíntia Maise | Advocacia Especializada
          </span>{" "}
          oferece atendimento personalizado e de alta qualidade em demandas
          previdenciárias. Atuamos tanto em{" "}
          <span className="text-[#C3A039]">
            consultas para esclarecer sua situação
          </span>{" "}
          quanto na{" "}
          <span className="text-[#C3A039]">
            representação judicial e extrajudicial para requerimento de benefícios.
          </span>
        </p>
        <button className="bg-[#C3A039] text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-500 transition">
          Ver Mais
        </button>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
        <Image
          src={Aboutcintia}
          alt="Foto de Cíntia Maise"
          width={600}
          height={600}
          priority
          quality={100}
          className="rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
