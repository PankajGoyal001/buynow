import React from 'react'

const GameProjuct = ({Image, title, Rating, Price, buy, array}) => {
  return (
    <>
    <div className="flex hover:shadow-xl hover:scale-105 duration-75 border text-center rounded-[10px] flex-col gap-5">
        <img className='p-5 h-[251px]' src={`src/assets/Images/${Image}`} alt="main-img" />
        <div className="flex flex-col items-center gap-[10px]">
         <h2 className='font-heebo_Medium text-xl text-gray-graystrong leading-8 tracking-[0.15px]'>{title}</h2>
         <img className='w-[90px]' src={`src/assets/svg/${Rating}`}  alt="Rating" />
         <p className="font-heebo_Medium text-2xl text-gray-graystrong">{Price} </p>
         <div className="flex py-[6px] px-2  gap-2">
            <p>{buy}</p>
            <img  src={`src/assets/svg/${array}`} alt="images"/>
        </div>
        </div>
    </div>
    </>
  )
}

export default GameProjuct
