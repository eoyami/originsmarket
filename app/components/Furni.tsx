import React from 'react'

import Image from 'next/image';

type FurniProps = {
    name: string;
    price: number;
    image: string;
}
const Furni = ({name, price, image}: FurniProps) => {
  return (
    <div id="mobi" className="flex flex-col items-center justify-center w-12 bg-white border-1 border-black rounded hover:bg-[#6794A7] hover:transition-all hover:duration-300">
        <Image src={image} width={50} height={50} alt="furni"></Image>
    </div>
  )
}

export default Furni