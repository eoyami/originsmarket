import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";


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
        className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden min-h-screen antialiased bg-[url('/habbo_background.png')] bg-repeat`}
      >
    <main className="min-h-screen w-full bg-gradient-to-b from-[#0C2231] to-[transparent]">
      <div className="container flex flex-col items-center justify-center min-h-screen w-full mx-auto">
      <div className="min-h-screen w-full md:w-[1020px] py-2 px-3">
        <Header/>
        <section className="flex flex-wrap gap-3 mt-5 md:p-0">
          {children}
        </section>
      </div>
    </div>
    </main>
      </body>
    </html>
  );
}
