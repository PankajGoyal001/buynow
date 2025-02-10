import React, { useState } from 'react'
// import TagColor from "../../assets/svg/Tags.svg";
import Macbook from "../../assets/Images/MacBook.png";
import Macbook1 from "../../assets/Images/MacBook1.png";

const CtaProduct = () => {
  const [selectColor, setselectColor] = useState(false)
  return (
    <>
      <div className="container">
        <div className="sm:py-10 py-[25px]">
          <div className="grid grid-cols-2 bg-[url('src/assets/Images/background.png')] w-full bg-gradient-to-lfrom-[#4226590A] to-[#42265900] sm:rounded-[20px] rounded-[10px] border border-[#42265914] items-center">
            <div className="flex flex-col pl-5 sm:pl-[49px] py-5 sm:py-[50px] gap-6 max-w-[294px] w-full h-full justify-between">
              <div className="flex flex-col gap-[10px] sm:gap-5">
                <p className="text-gray-graystrong font-heebo_Medium text-[34px] leading-[123.5%] tracking-wide">60% off</p>
                <h2 className='text-gray-graystrong font-heebo_Medium text-sm sm:text-2xl'>Apple MacBook Pro <span className='sm:block hidden'>Laptop</span></h2>
                <p className="text-purple-Purple_dark font-heebo_Medium text-5xl leading-[123.5%] hidden sm:block">$ 800.00</p>
                <p className="font-heebo_Medium text-2xl text-purple-Purple_dark sm:hidden ">$ 500.00</p>
              </div>
              <div className="flex rounded-[30px] items-center max-w-[115px] bg-white gap-[15px] p-[5px] ">
                {["#dfe8f2", "#dde876", "#81c785", "#5d9ede"].map((items, index) => (
                  <button key={index} onClick={() => setselectColor(items)}
                    style={{ backgroundColor: items }}
                    className={`rounded-full w-[11px] h-[11px] border  ${selectColor === items ? "border-black p-[6px]" : "border-none" } m-[2px]`}></button>
                ))}
              </div>
            </div>
            <div className="p-5 hover:scale-95 duration-[1s]">
              <img className=' hidden sm:block' src={Macbook} alt="macbook" />
              <img className=' sm:hidden ' src={Macbook1} alt="macbook" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CtaProduct
