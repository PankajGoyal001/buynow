import React from 'react'
import arrowRight from "../../assets/svg/ArrowRight.svg";


const Heading = () => {
  return (
    <>
        <div className="container pt-10 sm:pt-20 pb-5">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-[10px]">
                    <h1 className='font-heebo_Medium text-[34px] leading-[42px] text-gray-graystrong'>Top Deals</h1>
                    <div className="sm:flex hidden items-center pb-5 border-b border-[#42265914]">
                        <p className="text-gray-graydark text-base tracking-[0.15px] font-inter_regular">Home</p>
                        <img className='' src={arrowRight} alt="arrow" />
                        <p className="text-base tracking-[0.15px] font-inter_regular text-gray-graystrong ">Products</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Heading
