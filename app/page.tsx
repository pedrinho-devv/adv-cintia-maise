"use client";
import Navbar from "@/app/components/navbar"
import { Menu_links } from "./components/menu_links";
import Servicos from "./components/servicos";
import ContentArea from "./components/article";
import About from "./components/about";
import useLenis from "./hooks/useLenis";
import RetirementBanner from "./components/RetirementBanner";
import Footer from "./components/footer";

export default function Home() {

  useLenis();
  return (
    <>
      <Navbar/>
      <Menu_links/>
      <Servicos/>
      <ContentArea/>
      <About/>
      <RetirementBanner/>
      <Footer/>
    </>
  );
}
