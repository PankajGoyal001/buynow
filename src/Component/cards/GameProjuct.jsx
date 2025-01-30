import React from 'react'

const GameProjuct = ({Image, title, Rating, Price, buy, array}) => {
  return (
    <>
    <div className="flex hover:shadow-xl w-full hover:scale-[0.95] duration-75 border text-center rounded-[10px] flex-col gap-[14px] md:gap-5">
        <img className='md:p-5 p-[10px] h-[200px] md:h-[251px]' src={`src/assets/Images/${Image}`} alt="main-img" />
        <div className="flex flex-col items-center gap-2 sm:gap-[10px] pb-[10px] md:pb-[30px]">
         <h2 className='font-heebo_Medium sm:text-xl text-base text-gray-graystrong leading-8 tracking-[0.15px]'>{title}</h2>
         <img className='w-[90px] hidden md:block' src={`src/assets/svg/${Rating}`}  alt="Rating" />
         <p className="font-heebo_Medium sm:text-2xl text-xl leading-8 text-gray-graystrong">{Price} </p>
         <div className="flex py-[6px] items-center hover:cursor-pointer px-2  gap-2">
            <p className='text-purple-Purple_dark text-sm rounded-3xl tracking-[0.4px] font-inter_Medium' >{buy}</p>
            <img  src={`src/assets/svg/${array}`} alt="images"/>
        </div>
        </div>
    </div>
    </>
  )
}

export default GameProjuct
