import React from 'react'
import DealsPopusData from "../../json/DealsPopus.json";
import HotPupusData from "../../json/HotPopus.json";
import SideMenuData from "../../json/SideMenu.json";
import CartData from "../../json/CartPopus.json";
import CartImg from "../../assets/Images/CartPopus.png";
import ShortData from "../../json/ShortBy.json";
import Buttons from './Buttons';

const Popus = ({ CatagoeyPopus, DealsPopus, ShortBY, className, Pages, HotOfferPopus, SideMenu, Payment, Cart }) => {
  return (
    <>
      {
        CatagoeyPopus === "Solid" ? (<>
          <div className={`max-w-[230px] w-full h-[352px] z-50 overflow-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  bg-white p-5 rounded-[20px] ${className} flex flex-col gap-[10px]`}>
            {["All Type", "Mobiles", "Laptops", "Watches", "Tablets", "Headphones", "Printers", "Scanners", "Speakers"].map((item, index) => (
              <div key={index} className="flex w-full  hover:bg-[#574B9B0A] rounded-[30px] justify-between">
                <p className="px-4 py-[6px]  text-gray-graydark text-base tracking-[0.15px] font-inter_Medium cursor-pointer">{item}</p>
                <img className='' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
              </div>
            ))}
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
          <div className={`max-w-[930px]  ${className} w-full rounded-[30px] z-50 bg-white p-10 `}>
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
          <div className={`flex max-w-[375px] bg-white z-50 ${className} flex-col w-full `}>
            <div className="flex max-w-[375px] items-center px-5 w-full gap-2">
              <div className="flex py-[11px] px-[10px] border rounded-[30px] gap-2">
                <img src={"src/assets/Images/SideBarImg.png"} alt="SideBarImg" />
                <div className="flex flex-col">
                  <h2 className='text-sm leading-[157%] font-inter_Medium tracking-[0.1px] text-gray-graystrong'>Tiana Baptista</h2>
                  <h6 className="text-xs leading-[166%] tracking-[0.4px] text-gray-graydark font-inter_regular">Tim.Jennings@Example.Com</h6>
                </div>
              </div>
              <img className='p-3 bg-[#574B9B0A] max-w-12 w-full h-12 rounded-full' src={"src/assets/svg/closeButton.svg"} alt="" />
            </div>
            <div className="flex flex-col gap-[6px] py-9 px-5">
              {
                SideMenuData.map((items, index) => (
                  <div key={index} className="flex hover:bg-[#574B9B0A] rounded-[30px] gap-4">
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
          <div className={`max-w-[318px] rounded-[20px] ${className} bg-white p-[20px] z-50 flex flex-col gap-5 w-full`}>
            <div className="flex flex-col gap-[10px]">
              {
                CartData.map((items, index) => (
                  <div key={index} className="flex gap-5 p-[10px] border rounded-[10px]">
                    <img className='bg-[#4226590A] p-[5px] rounded-[5px]' src={CartImg} alt="images" />
                    <div className=" flex flex-col gap-[6px] ">
                      <h2 className='text-base font-inter_Medium tracking-[0.15px] text-gray-graystrong'>{items.Title}</h2>
                      <p className="text-sm tracking-[0.17px] font-inter_regular text-gray-graydark">{items.Price}</p>
                    </div>
                  </div>

                ))
              }
            </div>
            <span className='border-b border-[#574B9B1F]'></span>
            <Buttons variant={"Hard"} classname={"w-full"} childname={"View Cart"} />
          </div>
        </>) : (<></>)
      }


      {

        Payment === "Solid" ? (<>
          <div className="flex gap-5 flex-col max-w-[564px] z-50 pb-10 w-full border rounded-[20px]">
            <div className="flex  p-5 justify-end gap-[175px] rounded-t-[20px] bg-purple-Purple_light ">
              <img src="src/assets/Images/Logo.png" alt="Logo" />
              <img src="src/assets/svg/IconButton1.svg" alt="Close" />
            </div>
            <div className="flex flex-col px-10  gap-5">
              <div className="flex  flex-col items-center text-center gap-[15px]">
                <h2 className='Head'>Enter OTP</h2>
                <p className="SameText">Please check your mobile, 6-digit confirmation code to (+1234567890), please enter the confirmation code to verify it’s you.</p>
              </div>
              <div className="flex border rounded-[20px] justify-center sm:py-5 py-5 sm:gap-[17px] gap-[11px]">
                {["1", "3", "5", "7", "0", "1"].map((items, index) => (
                  <div key={index} className="sm:px-6 px-4 py-2 sm:py-4 border rounded-full"><p className="SameText">{items}</p></div>
                ))}
              </div>
              <div className="flex flex-col gap-[15px] items-center ">
                <Buttons variant={"Hard"} classname={"w-full"} childname={"Verify"} />
                <div className="flex gap-[10px]">
                  <p className="SameText">Don’t have a code? </p>
                  <button className='NewText'>Resend Code</button>
                </div>
              </div>
            </div>
          </div>
        </>) : (<></>)
      }

      {
        ShortBY === "Solid" ? (<>
          <div className={`max-w-[230px] w-full h-[316px] z-50 bg-white p-5 rounded-[20px] ${className} flex flex-col gap-5`}>
            <div className="flex gap-2 border-[#67517A] border rounded-[30px] py-[6px] px-4">
              <img src={`src/assets/svg/Search.svg`} alt="search" />
              <input className='w-full outline-none text-gray-graydark text-base ' type="text" placeholder='Search' />
            </div>
            <div className="flex flex-col max-w-[190px]w-full h-[220px] overflow-scroll  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  gap-[10px]">
              {ShortData.map((item, index) => (
                <div key={index} className="flex w-full  px-4 py-[6px]  hover:bg-[#574B9B0A] rounded-[30px] justify-between">
                  <p className="text-base  tracking-[0.15px] font-inter_Medium text-gray-graystrong">{item.Title} <span className='text-gray-graylight'>{item.Text}</span></p>
                  <img className='' src="src/assets/svg/ArrowRight.svg" alt="ArrowRight" />
                </div>
              ))}
            </div>
          </div>

        </>) : (<></>)
      }

      {
        Pages === "Solid" ? (<>
          <div className="flex z-50 max-w-[580px] bg-white w-full h-[797px] gap-[30px] p-5">
            <div className="flex flex-col gap-[30px] p-5 ">
              <div className="flex flex-col max-w-[190px] w-full gap-5">
                <h6 className="Copytext01 p-4 pb-[11px] border-b">Product pages</h6>
                {["Left filter", "Right filter", "With out filter - 1", "With out filter - 2", "Filter popup", "My wishlist", "Left filter with CTA banner"].map((item) => (
                  <p className="SameText01 px-4 py-[6px]">{item}</p>
                ))}
              </div>
              <div className="flex flex-col max-w-[190px] w-full gap-5">
                <h6 className="Copytext01 p-4 pb-[11px] border-b">Product details pages</h6>
                <p className="SameText01">Product Details - 1</p>
                <p className="SameText01">Product Details - 2</p>
              </div>
            </div>
            <span className='border-l'></span>
            <div className="flex flex-col gap-[30px] p-5 ">
              <div className="flex flex-col max-w-[190px] w-full gap-5">
                <h6 className="Copytext01 p-4 pb-[11px] border-b">Cart pages</h6>
                <p className="SameText01">Cart - 1</p>
                <p className="SameText01">Cart - 2</p>
              </div>
              <div className="flex flex-col max-w-[190px] w-full gap-5">
                <h6 className="Copytext01 p-4 pb-[11px] border-b">Cart pages</h6>
                {["Product Checkout", "Payment Card", "Payment With EMI", "Confirm Order Popus"].map((item) => (
                  <p className="SameText01 px-4 py-[6px]">{item}</p>
                ))}
              </div>
              <div className="flex flex-col max-w-[190px] w-full gap-5">
                <h6 className="Copytext01 p-4 pb-[11px] border-b">Cart pages</h6>
                <p className="SameText01 px-4 py-[6px]">Order Details</p>
                <p className="SameText01 px-4 py-[6px]">Log In </p>
                <p className="SameText01 px-4 py-[6px]">Register</p>
              </div>
            </div>
          </div>
        </>) : (<></>)
      }

    </>
  )
}

export default Popus
