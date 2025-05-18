import React from 'react'
import Image from "next/image";
import Dragon from "@/public/dragon.png";
import Avatar from "@/public/avatar.png";
import Furni from "./Furni";

type ShopProps = {
  username: string;
}

const Shop = ({username}: ShopProps) => {
  const limite = 9
  const furnisShop = [
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
    { name:"Lâmpada de Dragão Vermelho", image: Dragon.src, price: 500},
  ]
  const furnisShopLimited = furnisShop.slice(0, limite)
  return (
    <div className="flex habbo-component rounded-lg bg-[#6794A7] w-full md:w-60 h-full justify-center p-3 hover:cursor-pointer">
            <div className="flex-col p-3 bg-[#EFEFEF] rounded-lg border-1 border-black w-full h-full">
              <div className="flex gap-3 mb-2">
                <div>
                  <Image src={Avatar.src} width={28} height={28} alt="Avatar"></Image>
                </div>
                <div>
                  <p>Loja de <b>{username}</b></p>
                </div>
              </div>
              <div className="flex flex-wrap border-1 border-black p-2 gap-3 h-full rounded">
                {furnisShop.length > 0 && (
                  <Furni furni={furnisShopLimited}/>
                )}
              </div>
            </div>
          </div>
  )
}

export default Shop