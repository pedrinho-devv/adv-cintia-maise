"use client";
import Image from "next/image";
import Link from "next/link";

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
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título da seção */}
        <h2 className="text-3xl font-bold text-center text-gray-400 mb-10">
          Saiba como nosso escritório pode te ajudar!
        </h2>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Imagem */}
              <div className="h-48 w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Conteúdo */}
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.description}</p>

                {/* Botão responsivo */}
                <Link href="/contato">
                  <button className="mt-4 w-full md:w-auto px-6 py-3 bg-[#C3A039] text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
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
