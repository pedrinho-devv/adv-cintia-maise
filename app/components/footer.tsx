import Image from "next/image";
import logo from "../../public/advlogo.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa"; // Importando os ícones do react-icons

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo e descrição */}
        <div className="text-center md:text-left">
          <Image src={logo} alt="Logo" width={150} height={50} className="mx-auto md:mx-0" />
          <p className="mt-2 text-sm text-gray-400">
            Conectando ideias e pessoas através da tecnologia.
          </p>
        </div>

        {/* Redes sociais */}
        <div className="flex space-x-6">
          <a
            href="https://wa.me/SEU_NUMERO"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={24} className="text-yellow-400" />
          </a>

          <a
            href="https://instagram.com/sua_pagina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram size={24} className="text-yellow-400" />
          </a>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MinhaMarca. Todos os direitos reservados.
      </div>
    </footer>
  );
}
