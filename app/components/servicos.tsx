"use client";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Servicos() {
  const services = [
    {
      title: "Quero me aposentar",
      description: "Planejamento e pedido de aposentadoria para garantir seu benefício.",
      image: "/card1.webp",
    },
    {
      title: "Quero um auxílio",
      description: "Auxílio-doença, auxílio-maternidade e outros benefícios previdenciários.",
      image: "/card2.webp",
    },
    {
      title: "Entrar com uma ação",
      description: "Revisões, pedidos negados e processos para garantir seus direitos.",
      image: "/card3.png",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título da seção com botão "Ver mais serviços" */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h2 id="ser" className="text-2xl sm:text-3xl font-bold text-gray-400 text-center sm:text-left">
            Saiba como nosso escritório pode te ajudar!
          </h2>

          {/* Botão "Ver mais serviços" */}
          <Link href="/todos-servicos">
            <button className="mt-4 sm:mt-0 flex items-center gap-2 text-[#C3A039] font-semibold hover:text-yellow-600 transition">
              Ver mais serviços <FaArrowRight />
            </button>
          </Link>
        </div>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Imagem */}
              <div className="h-40 sm:h-48 w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>

                {/* Botão responsivo */}
                <Link href="/contato">
                  <button className="mt-4 w-full sm:w-auto px-5 py-3 bg-[#C3A039] text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
                    Fale com a Advogada
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
