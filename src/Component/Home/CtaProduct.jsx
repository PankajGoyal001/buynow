import React from 'react'
// import TagColor from "../../assets/svg/Tags.svg";
import Macbook from "../../assets/Images/MacBook.png";

const CtaProduct = () => {
  return (
    <>
    <div className="container mt-20">
        <div className="flex justify-between bg-[url('src/assets/Images/background.png')] bg-gradient-to-lfrom-[#4226590A] to-[#42265900] rounded-[20px] border border-[#42265914] items-center">
            <div className="flex flex-col pl-[49px] max-w-[294px] w-full gap-[145px]">
                <div className="flex  flex-col gap-5">
                    <p className="text-gray-graystrong font-heebo_Medium text-[34px] leading-[42px] tracking-wide">60% off</p>
                    <h2 className='text-gray-graystrong font-heebo_Medium text-2xl'>Apple MacBook Pro Laptop</h2>
                    <p className="text-purple-Purple_dark font-heebo_Medium text-5xl leading-[56px]">$ 800.00</p>
                </div>
            <div className="flex bg-white gap-[15px] p-[5px] ">
                
            </div>
            </div>
            <img className='p-5' src={Macbook} alt="macbook" />
        </div>
    </div>
    </>
  )
}

export default CtaProduct
