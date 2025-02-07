import React, { useState } from 'react'

const ProjectCards = ({ head, image, color, shop, buy, array }) => {
  const [Click, Unclick] = useState(false)
    const [selectColor, setselectColor] = useState(false)
  
  return (
    <>
      <div className="flex w-full  items-center flex-col border rounded-[20px]">
        <h3 className="sm:p-5 py-[14px] px-[10px] text-gray-graystrong w-[230px]  font-inter_regular text-sm leading-6 tracking-[0.17px] sm:tracking-[0.15px]">
          {head}
        </h3>
        <img className="p-5" src={`src/assets/Images/${image}`} alt="images" />
        <div className="flex gap-2">
        {["#d46a6a", "#ffb300", "#ed407a", "#2d1a3d"].map((items, index) => (
                  <button key={index} onClick={() => setselectColor(items)}
                    style={{ backgroundColor: items }}
                    className={`rounded-full w-[11px] h-[11px] border  ${selectColor === items ? "border-black" : "border-none" } m-[2px]`}></button>
                ))}
                </div>
        <div className="sm:mt-5 mt-[14px]  border-t">
          <div className="flex items-center hover:cursor-pointer w-[229px] justify-between p-5 ">
            <button className={`${Click ? "w-[107px] h-[30px] duration-500" : "w-[30px]"} flex duration-300 items-center bg-[#422659]  rounded-full`} onClick={() => Unclick(!Click)} >
              <img className="bg-purple-Purple_dark p-[5px] w-[30px] rounded-full" src={`src/assets/svg/${shop}`} alt="images" />
              {Click && (
                <span className='text-white text-sm' >ADD CART</span>
              )}
            </button>
            <div className="flex py-[6px]  px-2  gap-2">
              <p className='text-sm tracking-[0.4px] font-inter_Medium' >{buy}</p>

              <img src={`src/assets/svg/${array}`} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectCards
