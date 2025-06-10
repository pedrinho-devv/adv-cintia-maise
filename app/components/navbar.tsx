"use client";
import Image from "next/image";
import banner from "../../public/ba.jpg";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div id="menu" className="relative w-full min-h-screen flex items-center justify-center">
      {/* Imagem de fundo responsiva com animação */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <Image
          src={banner}
          alt="Banner"
          fill
          className="object-cover object-center w-full h-full"
          quality={100}
          priority
        />
      </motion.div>

      {/* Camada escura para melhorar contraste */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Conteúdo sobreposto com animação de entrada */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left px-6 md:pl-20">
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg text-yellow-400 font-medium"
        >
          Advogada Previdenciarista
        </motion.p>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-2xl md:text-4xl font-bold max-w-[90%] md:max-w-[700px] leading-tight"
        >
          Aposentadoria, auxílios e benefícios: Conte com um advogado
          especializado para garantir seus direitos!
        </motion.h1>

        {/* Botões com animação de entrada */}
        <div className="mt-6 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="px-6 py-3 w-full sm:w-auto text-white font-semibold rounded-lg hover:bg-yellow-600 transition glow-pulse"
          >
            Fale Conosco
          </motion.button>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="px-6 py-3 w-full sm:w-auto border border-[#C3A039] text-[#C3A039] font-semibold rounded-lg hover:bg-[#C3A039] hover:text-white transition"
          >
            Saiba Mais
          </motion.button>
        </div>
      </div>
    </div>
  );
}
