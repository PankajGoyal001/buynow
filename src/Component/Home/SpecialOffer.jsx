import React from 'react'
import offerData from "../../json/Offer.json";

const SpecialOffer = () => {
  return (
    <>
      <div className="container">
        <div className=" md:py-10 py-[25px]">
          <div className="flex flex-col overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] gap-10">
            <div className="flex border-b gap-[10px]">
              <p className="px-2 py-3 font-inter_regular text-sm leading-[100%] tracking-[0.5px] hover:text-purple-Purple_dark text-gray-graydark hover:border-b-2 hover:border-purple-Purple_dark">TODAY OFFERS</p>
              <p className="px-2 py-3 font-inter_regular text-sm leading-[100%] tracking-[0.5px] hover:text-purple-Purple_dark text-gray-graydark hover:border-b-2 hover:border-purple-Purple_dark">MONTHLY OFFERS</p>
              <p className="px-2 py-3 font-inter_regular text-sm leading-[100%] tracking-[0.5px] hover:text-purple-Purple_dark text-gray-graydark hover:border-b-2 hover:border-purple-Purple_dark">COMMING SOON</p>
            </div>
            <div className="flex gap-6">
              {
                offerData.map((items, index) => (
                  <div key={index} className="flex lg:w-[368px] w-[249px]   bg-[url('src/assets/Images/offerbackground.png')] rounded-[20px] justify-between items-center">
                    <div className="flex flex-col pt-[30px] pl-[30px] pb-[42px] w-[212px] z-10 gap-5">
                      <div className="flex flex-col gap-[10px]">
                        <p className="font-heebo_Medium text-[34px] leading-[123.5%] tracking-wide text-gray-graystrong">{items.Discount}</p>
                        <p className="font-heebo_Medium  text-gray-graystrong tracking-[0.15px] text-xl leading-[133.3%]">{items.Price}</p>
                      </div>
                      <p className="tracking-[0.15px] text-sm leading-[100%] text-gray-graydark">{items.Name}</p>
                    </div>
                    <div className='relative after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[url("src/assets/Images/offerEllipse.png")]  after:bg-center after:bg-no-repeat after:bg-contain z-10 '>
                      <img className='max-w-[154px] w-full max-h-[138px] h-full' src={`/src/assets/images/${items.Image}`} alt="" />
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
