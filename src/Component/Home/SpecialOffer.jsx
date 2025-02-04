import React from 'react'
import offerData from "../../json/Offer.json";

const SpecialOffer = () => {
  return (
    <>
      <div className="container">
        <div className=" md:py-10 py-[25px]">
          <div className="flex flex-col  gap-10">
            <div className="flex border-b gap-[10px]">
              <p className="px-2 py-3 font-inter_regular text-sm leading-[100%] tracking-[0.5px] hover:text-purple-Purple_dark text-gray-graydark hover:border-b-2 hover:border-purple-Purple_dark">TODAY OFFERS</p>
              <p className="px-2 py-3 font-inter_regular text-sm leading-[100%] tracking-[0.5px] hover:text-purple-Purple_dark text-gray-graydark hover:border-b-2 hover:border-purple-Purple_dark">MONTHLY OFFERS</p>
              <p className="px-2 py-3 font-inter_regular text-sm leading-[100%] tracking-[0.5px] hover:text-purple-Purple_dark text-gray-graydark hover:border-b-2 hover:border-purple-Purple_dark">COMMING SOON</p>
            </div>
            <div className="flex overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-6">
              {
                offerData.map((items, index) => (
                  <div key={index} className="flex max-w-[368px] w-full  bg-[url('src/assets/Images/offerbackground.png')] rounded-[20px] justify-between items-center">
                    <div className="flex flex-col pt-[15px] sm:pt-[30px] sm:pl-[30px] pl-[15px] sm:pb-[42px] pb-[23px] w-[212px] z-10 gap-5">
                      <div className="flex flex-col gap-[10px]">
                        <p className="font-heebo_Medium text-2xl sm:text-[34px] leading-[123.5%]  tracking-wide text-gray-graystrong">{items.Discount}</p>
                        <p className="font-heebo_Medium  text-gray-graystrong tracking-[0.15px] text-base sm:text-xl leading-[133.3%]">{items.Price}</p>
                      </div>
                      <p className="tracking-[0.15px] text-sm leading-[100%] text-gray-graydark text-nowrap">{items.Name}</p>
                    </div>
                    <div className='relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[url("src/assets/Images/offerEllipse.png")]  after:bg-center after:bg-no-repeat after:bg-contain z-10 '>
                      <img className='minw-w-[97px] w-full' src={`/src/assets/images/${items.Image}`} alt="" />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialOffer
