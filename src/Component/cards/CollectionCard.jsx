import React, { useState } from 'react'
import Next from "../../assets/svg/ArrowBackFilled.svg";
import { Link } from 'react-router-dom';


const CollectionCard = ({Image1,Image2,Image3,Image4,View,Name,Array}) => {
  const [Click, setClick] = useState(false)
  return (
    <>
      <div className="flex flex-col gap-5 bg-[#ED5F600A] rounded-[20px] border items-center px-5 py-5">
              <div className="flex gap-[10px]">
          <p className="font-heebo_Medium md:text-xl text-base md:leading-8 -tracking-[0.15px] text-gray-graystrong">{Name}</p>
          <img className="rotate-180 hidden md:block" src={Next} alt="efd" />
          </div>
          <div className="grid grid-cols-2 max-w-[328px] w-full rounded-[10px]">
            <img className="rounded-tl-[10px]" src={`/src/assets/images/${Image1}`} alt="main_Images" />
            <img className="rounded-tr-[10px]" src={`/src/assets/images/${Image2}`} alt="main_Images" />
            <img className="rounded-bl-[10px]" src={`/src/assets/images/${Image3}`} alt="main_Images" />
            <img className="rounded-br-[10px]" src={`/src/assets/images/${Image4}`} alt="main_Images" />
          </div>
          <Link to={"/productDetails"} className='flex gap-2 hover:cursor-pointer px-2 py-[6px]'>
          <button  onClick={()=>setClick(!Click)} className="font-inter_Medium md:text-sm md:leading-6 text-[13px] leading-[22px] tracking-[0.4px] text-purple-Purple_dark">{View}</button>
          <img src={`/src/assets/svg/${Array}`} alt="Arrow" /></Link>
        </div>
    </>
  )
}

export default CollectionCard
