"use client";


import Image from "next/image";
import Link from "next/link";

export default function TodosServicos() {
  const services = [
    {
      title: "Planejamento de Aposentadoria",
      description: "Garanta a melhor aposentadoria com um planejamento adequado.",
      image: "/card1.webp",
    },
    {
      title: "Revisão de Benefícios",
      description: "Corrija valores e garanta seus direitos previdenciários.",
      image: "/card2.webp",
    },
    {
      title: "Auxílio-Doença",
      description: "Solicitação e revisão do auxílio para quem precisa.",
      image: "/card3.png",
    },
    {
      title: "Pensão por Morte",
      description: "Apoio jurídico para familiares solicitarem o benefício.",
      image: "/card1.webp",
    },
    {
      title: "Benefício Assistencial (BPC/LOAS)",
      description: "Solicitação do benefício para idosos e pessoas com deficiência.",
      image: "/card2.webp",
    },
    {
      title: "Ação Contra o INSS",
      description: "Defenda seus direitos na justiça em caso de negativa.",
      image: "/card3.png",
    },
  ];

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Título da página */}
        <h1 className="text-3xl font-bold text-center text-gray-400 mb-10">
          Todos os Serviços
        </h1>

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

        {/* Botão para voltar à página principal */}
        <div className="mt-12 text-center">
          <Link href="/">
            <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
              Voltar para a Página Inicial
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
