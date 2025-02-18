import React from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import Buttons from '../Component/ui/Buttons';
import CopyIcon from "../assets/svg/CopyIcon.svg";
import Arrow from "../assets/svg/down.svg";
import CartImg from "../assets/Images/CartImg.png";
import Delivery from "../assets/svg/Delivery.svg";


const OrderDetails = () => {
    return (
        <>
            <div className="sm:py-20 py-10">
                <div className="container">
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <div className="sm:flex-row flex flex-col gap-5  sm:items-end pb-5 border-b  justify-between">
                            <div className="flex flex-col  sm:pb-5  gap-[10px]">
                                <h1 className="CommonHead">Checkout</h1>
                                <div className="sm:flex hidden">
                                    <Link to={"/"}>
                                        <h3 className="SameText">Home</h3>
                                    </Link>
                                    <img src={arrowRight} alt="ArrowRight" />
                                    <h3 className="NewText">Order details</h3>
                                </div>
                            </div>
                            <Buttons variant={"Normal"} childname={"BUY IT AGAIN"} />
                        </div>
                        <div className="sm:flex-row gap-[14px] items-center flex flex-col  justify-between sm:py-[10px] py-[10px] px-[15px] sm:px-5 rounded-[10px] bg-purple-Purple_light">
                            <div className="flex items-center w-full gap-2 sm:justify-start justify-between">
                                <div className="flex sm:gap-2 gap-1">
                                <p className="sm:text-base text-sm  leading-7 sm:tracking-[0.15px] tracking-[0.1px] font-inter_regular text-gray-graylight">Order ID</p>
                                <p className="sm:text-base text-sm  leading-7 sm:tracking-[0.15px] tracking-[0.17px] font-inter_regular text-white">021D0252G56404930</p>
                                </div>
                                <img className='p-1 bg-[#735f85] rounded-[5px]' src={CopyIcon} alt="CopyIcon" />
                            </div>
                            <Buttons variant={"New"} classname={""} childname={"VIEW ALL ORDER"} image={"src/assets/svg/down.svg"} imageclass={"-rotate-90"}/>
                        </div>
                        <div className="sm:flex-row flex flex-col gap-5 justify-between items-start">
                            <div className="flex gap-[5px]">
                                    {/* <input className='rotate-90 h-44px]' type="range" /> */}
                                <div className="flex sm:max-w-[343px] w-full flex-col">
                                    <div className="flex pb-[3.74px]  gap-2">
                                        <p className="text-base tracking-[0.15px] font-inter_regular text-[#2E7D32]">Ordered conformed</p>
                                        <p className="SameText">(12/08/2022)</p>
                                    </div>
                                    <p className="sm:text-sm text-xs leading-[166%] tracking-[0.4px] sm:tracking-[0.17px] font-inter_regular text-gray-graydark pt-[10px] border-t">Lorem ipsum dolor sit amet, consectetr adipiscing elit. Volutpat elementum malesuada vestibulum tristique maecenas.</p>
                                    <p className='sm:mt-[33px] mt-[21px] sm:mb-[114px] mb-[90px] Copytext pb-1 '>Ordered Packed <span className='SameText'>(12/08/2022)</span></p>
                                    <p className='sm:mb-[110px] mb-[90px] SameText pb-1 '>Ordered Shipped <span>(12/08/2022)</span></p>
                                    <p className=' SameText pb-1 '>Ordered Delevery <span>(14/08/2022)</span></p>
                                </div>
                            </div>
                            <div className="flex flex-col max-w-[662px] w-full gap-6">
                                <div className="flex px-[10px] py-5 md:p-[50px] bg-[#4226590A] rounded-[20px] gap-[10px] sm:gap-10 justify-between">
                                    <div className="flex flex-col max-w-[302px] w-full gap-5">
                                        <div className="flex flex-col gap-[10px]">
                                        <h2 className='Head'>Apple Watch SE</h2>
                                        <p className="SameText hidden sm:block">Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
                                        </div>
                                        <p className="text-sm font-inter_Medium leading-[157%] text-gray-graystrong">Color <span className='text-sm font-inter_regular text-gray-graydark'> Black </span></p>
                                        <p className="CommonHead">$320.00</p>
                                    </div>
                                    <img className='sm:max-w-[320px] max-w-[154px] w-full' src={CartImg} alt="CartImg" />
                                </div>
                                <div className="flex justify-between gap-[6px] border rounded-[20px] p-5 sm:py-10 sm:px-[50px]">
                                    <div className="flex flex-col gap-[10px] sm:gap-5">
                                        <h3 className='Head'>Shipping Address</h3>
                                        <p className="text-sm sm:tracking-[0.17px] tracking-[0.4px] font-inter_regular text-gray-graydark">4517 Washington Ave. Manchester, Kentucky 39495</p>
                                    </div>
                                    <img src={Delivery} alt="Delivery" />
                                </div>
                                <div className="flex gap-6 justify-end ">
                                    <Buttons variant={"Normal"} childname={"Return product"} classname={"text-[#574B9B42] hover:text-purple-Purple_dark duration-500 transition-all border-none "} />
                                    <button className='flex bg-[#574B9B1F] group hover:scale-110 hover:bg-gradient-to-l hover:from-red-600 hover:to-purple-Purple_dark   duration-1000 transition-all ease-in-out hover: rounded-[30px] px-[22px] py-2 gap-2'>
                                        <img className='group-hover:rotate-180 transition-all duration-700 ' src="src/assets/svg/WhiteStar.svg" alt="Whitestar" />
                                        <p className="text-[#574B9B42] hidden sm:block text-[15px] leading-[173%] duration-500 group-hover:text-white font-inter_Medium">Rate The product</p>
                                        <p className="text-[#574B9B42] sm:hidden block text-[15px] leading-[173%] duration-500 group-hover:text-white font-inter_Medium">Rate </p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetails
