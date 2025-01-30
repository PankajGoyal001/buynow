import React, { useState } from 'react'
import Outlines from "../../assets/svg/FilterListOutlined.svg";
import arrayDown from "../../assets/svg/Arrowlineright.svg";
import WatchesData from "../../json/AppleWatches.json";

const Banner1 = () => {
  const [Open, setClose] = useState(false)
  return (
    <>
      <div className="container pt-5">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className='text-base font-inter_regular tracking-[0.15px] text-gray-graydark'>Showing 1–9 of 200 results</h3>
            <div className="flex gap-[10px]">
              <button onClick={() => setClose(!Open)}
               className='flex items-center px-4 py-[6px] border-[#42265980] border rounded-[30px] gap-2'>
                <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Filter</p>
                <img src={Outlines} alt="Outlines" />


              </button>
              <button className='flex items-center gap-2 px-4 py-[6px] border-[#42265980] border rounded-[30px]'>
                <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Sort by</p>
                <img className='rotate-90' src={arrayDown} alt="arrowDown" />
              </button>
              
            </div>
          </div>
         <div className="grid grid-cols-4 gap-6 pb-10" >
         {
          WatchesData.map((items,index)=>(
            <div className="flex flex-col max-w-[270px] w-full  h-full gap-[14px] md:gap-5 border rounded-[20px] hover:scale-[0.95] duration-200 hover:shadow-lg relative ">
            <img className="max-w-[270px] w-full max-h-[249px] h-full"
              src={`src/assets/Images/${items.Image}`}
              alt="product_image"
            />
            <img className="max-w-6 w-full absolute top-5 right-5" src={`/src/assets/svg/${items.Heart}`} alt="" />
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col md:px-5 md:pb-5 px-[10px] gap-[8px] md:gap-[10px]">
                <h2 className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-gray-graydark">{items.Name}</h2>
                <div className="flex gap-[10px]">
                  <p className="md:text-2xl font-heebo_Medium  text-xl leading-8">{items.Price}</p>
                  <img className='hidden md:block' src={`src/assets/svg/${items.Rating}`} alt="rating_star" />
                </div>
                <span className="border-b border"></span>
                <div className="flex justify-between  items-center gap-[10px]">
                  <p className="text-purple-Purple_light text-sm tracking-[0.17px] font-inter_regular">{items.Stoke}</p>
                  <img className="bg-purple-Purple_dark p-[5px] hover:cursor-pointer rounded-full" src={`src/assets/svg/${items.Shop}`} alt="Shop" />
                </div>
              </div>
            </div>
          </div>
          
          ))
         }
         </div>
         <div className=""></div>
        </div>
      </div>
    </>
  )
}

export default Banner1
