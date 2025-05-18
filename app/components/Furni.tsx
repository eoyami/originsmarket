import React from 'react'
import Image from 'next/image';


type FurniProps = {
    name: string;
    price: number;
    image: string;
}

type FurniPreviewProps = {
    furni: FurniProps[];
}
const Furni = ({furni}: FurniPreviewProps) => {
  return (
    <>
      {furni.map((furni: FurniProps, index: number) => (
      <div key={index} id="mobi" className="flex flex-col items-center justify-center w-12 bg-white border-1 border-black rounded hover:bg-[#6794A7] hover:transition-all hover:duration-300">
          <div className="relative group inline-block">
            <Image src={furni.image} width={50} height={50} alt="furni"></Image>
            <div className="absolute flex flex-col items-center pointer-events-none bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-gray-800 text-white text-sm p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <Image src={furni.image} width={150} height={150} alt="furni"></Image>
                <p className="text-center">{furni.name}</p>
                <p className="text-center">Preço: {furni.price} Moedas</p>
            </div>
        </div>
    </div>
    ))
    
    
    }
    </>
  )
}

export default Furni