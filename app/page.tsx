import Image from "next/image";
import Header from "@/public/header.png";
import Avatar from "@/public/avatar.png";
import Shop from "./components/Shop";


export default function Home() {
  return (
    <main className="bg-linear-to-b from-[#0C2231] to-[transparent]">
      <div className="container flex flex-col items-center justify-center min-h-screen mx-auto">
      <div className="min-h-screen w-[1020px] py-2 ">
        <header className="flex">
          <Image src={Header.src} width={1020} height={208} alt="Header"></Image>
        </header>
        <div className="flex w-full mt-5 justify-center items-center">
          <div className="flex space-between w-full gap-5">
            <div className="border-transparent border-b-3 hover:border-white cursor-pointer">
              <h3 className="text-white text-3xl">Lojas</h3>
            </div>
            <div className="border-b-3 border-transparent hover:border-white cursor-pointer opacity-50">
              <h3 className="text-white text-3xl ">Negociações</h3>
            </div>
          </div>

          <div className="flex gap-5 items-center justify-center">
            <div className="border-2 border-white/50 rounded-lg">
            <input type="text" placeholder="Buscar por mobi ou usuário" className="bg-white/30 text-white font-bold rounded p-2 bg-[url('/lupa.png')] bg-no-repeat bg-left pl-5 w-60 outline-none"/>
          </div>
          <div className="flex items-center justify-center habbo-component rounded-lg p-2 bg-[#9E6D43] hover:bg-[#AF8349] cursor-pointer">
            <div className="flex border-1 border-black rounded w-32 items-center justify-center"> 
              <div className="flex">
              <Image src={Avatar.src} width={28} height={28} alt="Avatar"></Image>
            </div>
            <p className="text-md text-white">Minha Loja</p>
            </div>
          </div>
          </div>
        </div>
        <section className="flex flex-wrap gap-5 mt-5">
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
          <Shop/>
        </section>
      </div>
    </div>
    </main>
  );
}
