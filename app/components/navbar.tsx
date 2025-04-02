"use client";
import Image from "next/image";
import banner from "../../public/mainbanner.jpg";

export default function Banner() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Imagem de fundo responsiva */}
      <Image
        src={banner}
        alt="Banner"
        fill
        className="object-cover object-center w-full h-full"
        quality={100}
        priority
      />

      {/* Camada escura para melhorar contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo sobreposto - Agora alinhado à esquerda */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:pl-20">
        <p className="text-lg text-yellow-400 font-medium">
          Advogada Previdenciarista
        </p>
        <h1 className="text-white text-2xl md:text-4xl font-bold max-w-[90%] md:max-w-[700px] leading-tight">
          Aposentadoria, auxílios e benefícios: Conte com um advogado
          especializado para garantir seus direitos!
        </h1>

        {/* Botões com layout diferente no mobile */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <button className="px-6 py-3 w-full sm:w-auto bg-[#C3A039] text-white font-semibold rounded-lg hover:bg-yellow-600 transition">
            Fale Conosco
          </button>
          <button className="px-6 py-3 w-full sm:w-auto border border-[#C3A039] text-[#C3A039] font-semibold rounded-lg hover:bg-[#C3A039] hover:text-white transition">
            Saiba Mais
          </button>
        </div>
      </div>
    </div>
  );
}
