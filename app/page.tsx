import Navbar from "@/app/components/navbar"
import Menu_links from "./components/menu_links";
import Servicos from "./components/servicos";
import ContentArea from "./components/article";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Menu_links/>
      <Servicos/>
      <ContentArea/>
    </>
  );
}
