import React from 'react'
import DealsPopusData from "../../json/DealsPopus.json";
import HotPupusData from "../../json/HotPopus.json";
import SideMenuData from "../../json/SideMenu.json";
import CartData from "../../json/CartPopus.json";
import Buttons from './Buttons';

const Popus = ({ CatagoeyPopus, DealsPopus, className, HotOfferPopus, SideMenu, Cart }) => {
  return (
    <>
      {
        CatagoeyPopus === "Solid" ? (<>
          <div className={`flex  max-w-[230px] w-full max-h-[352px] h-full  p-5 flex-col gap-[10px]`}>
            <div className="flex w-full justify-between ">
              {["All Type", "Mobiles", "Laptops", "Watches", "Tablets", "Headphones", "Printers", "Scanners", "Speakers"].map((items, index) => (
                <p className="text-base tracking-[0.15px] text-gray-graydark">{items}</p>
              ))}
            </div>
          </div>
        </>) : (<></>)
      }

      {
        DealsPopus === "Solid" ? (<>
          <div className={`max-w-[930px] ${className} w-full rounded-[30px] z-50 bg-white p-10 `}>
            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-[30px]">
                {
                  DealsPopusData.map((items, index) => (
                    <div key={index} className="grid gap-5 max-w-[190px] w-full ">
                      <h2 className="mx-4 pb-[11px] border-b-2 text-base tracking-[0.15px] text-gray-graystrong font-inter_Medium">{items.header}</h2>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text1}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text2}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text3}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text4}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text5}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text6}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>

                    </div>

                  ))
                }
              </div>
              <span className='border-b'></span>
              <div className="flex gap-[45px]">
                <div className="rounded-[10px] pt-[30px] pl-[30px] pr-[44px] pb-5 bg-[url('src/assets/Images/DealsPopus1.png')]">
                  <div className="flex flex-col gap-[53px]">
                    <p className="max-w-[126px] w-full text-xl leading-[160%] font-heebo_Medium text-white">Top Products for you</p>
                    <button className="hover:cursor-pointer max-w-[131px] w-full hover:scale-90 ease-in-out bg-white duration-[0.7s] items-center rounded-[30px] py-1 px-[22px]"><p className="text-[15px] leading-[57%] font-inter_Medium tracking-[0.46px] text-purple-Purple_dark">Shop Now</p>
                    </button>
                  </div>
                </div>
                <div className="flex gap-5 p-5">
                  <div className="max-w-[254px] items-center w-full ">
                    <div className="flex flex-col gap-[15px] pl-5 pr-[83px] pb-[21px]">
                      <p className="text-gray-graystrong text-[34px] leading-[123%] font-heebo_Medium translate-x-1">10% off</p>
                      <p className="text-base font-inter_regular tracking-[0.15px] text-gray-graystrong">Apple MacBook Pro </p>
                      <p className="text-xl leading-8 tracking-[0.15px] font-heebo_Medium">$ 500.00</p>
                    </div>
                  </div>
                  <img src={"src/assets/Images/DealsPopus2.png"} alt="" />
                </div>
              </div>
            </div>
          </div>
        </>) : (<></>)
      }

      {
        HotOfferPopus === "Solid" ? (<>
          <div className={`max-w-[930px] ${className} w-full rounded-[30px] z-50 bg-white p-10 `}>
            <div className="flex flex-col gap-[30px]">
              <div className="flex gap-[30px]">
                {
                  HotPupusData.map((items, index) => (
                    <div key={index} className="grid gap-5 max-w-[190px] w-full ">
                      <h2 className="mx-4 text-nowrap pb-[11px] border-b-2 text-base tracking-[0.15px] text-gray-graystrong font-inter_Medium">{items.header} <span className='text-yellow-400'>{items.header1}</span> </h2>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text1}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text2}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text3}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text4}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text5}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>
                      <div className="flex group justify-between px-4 py-6px">
                        <p className="text-base text-gray-graydark font-inter_Medium tracking-[0.15px]">{items.Text6}</p>
                        <img className='hidden group-hover:block duration-700' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                      </div>

                    </div>

                  ))
                }
              </div>
            </div>
          </div>
        </>) : (<></>)

      }

      {
        SideMenu === "Solid" ? (<>
          <div className={`flex max-w-[375px] ${className} flex-col w-full `}>
            <div className="flex justify-between gap-2">
              <div className="flex py-[11px] px-[10px] border rounded-[30px] gap-2">
                <img src={"src/assets/Images/SideBarImg.png"} alt="SideBarImg" />
                <div className="flex flex-col">
                  <h2 className='text-sm leading-[157%] font-inter_Medium tracking-[0.1px] text-gray-graystrong'>Tiana Baptista</h2>
                  <h6 className="text-xs leading-[166%] tracking-[0.4px] text-gray-graydark font-inter_regular">Tim.Jennings@Example.Com</h6>
                </div>
              </div>
              <img className='p-3 bg-[#574B9B] rounded-full' src={"src/assets/svg/closeButton.svg"} alt="" />
            </div>
            <div className="flex flex-col gap-[6px] py-9 px-5">
              {
                SideMenuData.map((items, index) => (
                  <div className="flex gap-4">
                    <img src={`src/assets/svg/${items.Image}`} alt="Images" />
                    <p className="">{items.Text}</p>
                  </div>
                ))
              }
              <span className='border-b border-[#574B9B1F] '></span>
              <div className="flex gap-[30px]">
                <span className='border-b border-[#574B9B1F] items-center '></span>
                <button>Log in</button>
                <button>Sign Up</button>
              </div>
              <span className='border-b border-[#574B9B1F] '></span>
            </div>
            <div className="py-9 px-5">
              <p className="">Support (+00) 0123456789</p>
            </div>
          </div>
        </>) : (<></>)
      }


      {
        Cart === "Solid" ? (<>
          <div className="max-w-[318px] rounded-[20px] flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-[10px]">
              {
                CartData.map((items, index) => (
                  <div key={index} className="flex gap-5 p-[10px] border rounded-[10px]">
                    <img src={`src/assets/Images/${CartPopus.png}`} alt="images" />
                    <div className=" flex flex-col gap-[6px] ">
                      <h2 className=''>{items.Title }</h2>
                      <p className="">{items.Price}</p>
                    </div>
                  </div>

                ))
              }
            </div>
            <span className='border-b border-[#574B9B1F]'></span>
            <button className='w-full bg-purple-Purple_dark px-4 py-[6px] Rounded-[30px]'>View Cart</button>
          </div>
        </>) : (<></>)
      }

    </>
  )
}

export default Popus
