
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Header from "@/public/header.png";
import Avatar from "@/public/avatar.png";
import Link from "next/link";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Origins Market",
  description: "Origins Market is a marketplace for Habbo Origins users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-[url('/habbo_background.png')] bg-repeat`}
      >
    <main className="min-h-screen min-w-screen bg-linear-to-b from-[#0C2231] to-[transparent]">
      <div className="container flex flex-col items-center justify-center min-h-screen w-full mx-auto">
      <div className="min-h-screen w-[1020px] py-2 ">
        <header className="flex">
          <Image src={Header.src} width={1020} height={208} alt="Header"></Image>
        </header>
        <div className="flex w-full mt-5 justify-center items-center">
          <div className="flex space-between w-full gap-5">
            <div className="border-transparent border-b-3 hover:border-white cursor-pointer">
              <h3 className="text-white text-3xl"><Link href="/">Lojas</Link></h3>
            </div>
            <div className="border-b-3 border-transparent hover:border-white cursor-pointer opacity-50">
              <h3 className="text-white text-3xl "><Link href="/trades">Negociações</Link></h3>
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
          {children}
        </section>
      </div>
    </div>
    </main>
      </body>
    </html>
  );
}
