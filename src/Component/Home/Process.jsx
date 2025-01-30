import React from 'react'
import ProcessData from "../../json/Process.json";

const Process = () => {
  return (
    <>
    <div className="container md:py-10 py-[25px]">
        <div className="sm:flex sm:gap-6 items-center grid gap-[10px] ">

            {
              ProcessData.map((items,index)=>(
                <div key={index} className='flex md:max-w-[270px] hover:cursor-pointer p-5 hover:shadow-xl rounded-[20px] border w-full flex-col gap-5'>
                <img className='max-w-10 w-full' src={`/src/assets/svg/${items.Images}`} alt="image" />
                <div className="flex flex-col gap-[10px]">
                <p className="text-xl leading-8 font-heebo_Medium tracking-[0.15px] text-gray-graystrong">{items.Title}</p>
                <p className="text-base font-inter_regular tracking-[0.15px] text-gray-graydark">{items.Text}</p>
                </div>
                

                </div>
              ))
            }
        </div>
    </div>
    </>
  )
}

export default Process

