"use client";
import React from 'react'
import Image from 'next/image';
import Avatar from "@/public/avatar.png";
import Link from 'next/link';
import HeaderBanner from "@/public/header.png";
import { usePathname } from 'next/navigation';
const Header = () => {

const pathname = usePathname();
  const isTradePage = pathname === "/trades";
  const isHomePage = pathname === "/";
  return (
    <>
    <header className="flex w-full">
          <Image src={HeaderBanner.src} width={1020} height={208} alt="Header"></Image>
        </header>
        <div className="flex flex-col md:flex-row w-full mt-5 justify-center items-center">
          <div className="flex space-between w-full gap-5">
            <div className={`${isHomePage ? " border-b-3 border-transparent border-white cursor-pointer" : "border-b-3 border-transparent hover:border-white cursor-pointer opacity-50"}`}>
              <h3 className="text-white text-3xl"><Link href="/">Lojas</Link></h3>
            </div>
            <div className={`${isTradePage ? " border-b-3 border-transparent border-white cursor-pointer" : "border-b-3 border-transparent hover:border-white cursor-pointer opacity-50"}`}>
              <h3 className="text-white text-3xl"><Link href="/trades">Negociações</Link></h3>
            </div>
          </div>

          <div className="flex gap-1 md:gap-5 items-center justify-between md:justify-center w-full">
            <div className="border-2 border-white/50 rounded-lg">
            <input type="text" placeholder="Buscar por mobi ou usuário" className="bg-white/30 text-white font-bold rounded p-2 bg-[url('/lupa.png')] bg-no-repeat bg-left pl-5 w-full md:w-60 outline-none"/>
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
    </>
  )
}

export default Header