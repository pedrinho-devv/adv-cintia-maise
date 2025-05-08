// app/components/RetirementBanner.tsx
import { Mail, Phone, MapPin,} from "lucide-react";
import MyComponent from "./map";

export default function RetirementBanner() {
  return (
    <section id="maps" className="bg-[#142C38] text-white px-6 py-12 flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between items-start lg:items-center">
      {/* Mapa */}
      <div className="w-full lg:w-1/2 min-h-[400px]">
        <MyComponent />
      </div>

      {/* Informações de contato */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h2 className="text-2xl font-bold leading-snug mb-3.5">
          Sua aposentadoria está em jogo!{" "}
          <span className="text-yellow-400">Entre em contato e resolva agora!</span>
        </h2>

        <div className="flex items-center gap-2 text-sm">
          <Mail size={16} className="text-yellow-400" />
          <span>cintia.nunesgaiova@gmail.com</span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Phone size={16} className="text-yellow-400" />
          <span>(16) 99615-3727</span>
        </div>

        <div className="flex items-start gap-2 text-sm">
          <MapPin size={16} className="text-yellow-400 mt-1" />
          <span>
            Rua Santa Madalena, n° 132, sala 04.04, Edifício Opala Center,
            Bairro Cidade Alta, Picos/PI. <br />
            (CNPJ: 33.566.808)
          </span>
        </div>
      </div>
    </section>
  );
}
