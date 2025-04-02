import Navbar from "@/app/components/navbar"
import Menu_links from "./components/menu_links";
import Servicos from "./components/servicos";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Menu_links/>
      <Servicos/>
    </>
  );
}
