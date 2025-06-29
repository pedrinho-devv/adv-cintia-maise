import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Fontes
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadados para SEO
export const metadata: Metadata = {
  title: "Advogada Previdenciarista Cintia Maise - Consultoria e Assistência Jurídica",
  description:
    "A Cíntia Maise | Advocacia Especializada oferece consultoria jurídica e assistência para aposentadoria, auxílios e benefícios previdenciários. Entre em contato para garantir seus direitos.",
  keywords: "advogada previdenciária, aposentadoria, auxílios, benefícios, Picos PI",
  authors: [{ name: "Cíntia Maise" }],
  robots: "index, follow", // Indica ao Google que a página deve ser indexada
  openGraph: {
    title: "Advogada Previdenciarista Cintia Maise",
    description:
      "Consultoria jurídica especializada em aposentadoria, auxílios e benefícios. Fale com a Advogada Cíntia Maise e resolva sua situação previdenciária.",
    url: "https://www.cintiamaise.com.br", // Substitua pelo URL do seu site
    images: ["/og-image.jpg"], // Imagem otimizada para o Open Graph
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        {/* Metadados de SEO e Open Graph */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#0C2433" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
