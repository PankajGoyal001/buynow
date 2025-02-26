import React from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import WatchDetail from "../assets/Images/WatchDetail.png";
import MIcrophone from "../assets/svg/Microphone.svg";
import Smile from "../assets/svg/Smile.svg";
import Polygon from "../assets/svg/Polygon.svg";
import UnstyledButton from "../assets/svg/UnstyledButton.svg";
import SendIcon from "../assets/svg/SendIcon.svg";

const CustmerCare = () => {
    return (
        <>
            <div className="container">
                <div className="sm:py-20 py-10">
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <div className="flex flex-col gap-[10px] ">
                            <h1 className='CommonHead'>Help Center <span className='Head text-[]'> (Customer care) </span></h1>
                            <div className="sm:flex hidden items-center">
                                <Link to={"/"}>
                                    <h6 className='SameText'>Home</h6>
                                </Link>
                                <img src={arrowRight} alt="arrow" />
                                <Link to={"productDetails"}>
                                    <h6 className='SameText'>Product Details</h6>
                                </Link>
                                <img src={arrowRight} alt="arrow" />
                                <h6 className='Copytext'>Customer care</h6>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex flex-col p-[30px] max-w-[446px] w-full rounded-[20px]  bg-[#FAFAFA] gap-10">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-col gap-[10px]">
                                        <h3 className='Head'>Apple watch SE </h3>
                                        <p className="SameText">Silver Aluminium Case with Abyss Blue Sport Band - Regular</p>
                                    </div>
                                    <p className="Copytext">Color <span className='text-gray-graydark'>Black</span></p>
                                    <p className="CommonHead">$320.00</p>
                                </div>
                                <img className='max-w-[366px] w-full p-5 bg-[#4226590A] rounded-[20px]' src={WatchDetail} alt="" />
                            </div>
                            <div className="flex flex-col relative max-w-[662px] border-[#42265914] border rounded-[20px] w-full h-[584px]">
                                <div className="flex absolute BorderSolid bg-white w-full top-0 gap-[6px] items-center py-[10px] px-5">
                                    <div className="relative">
                                        <h3 className="text-white text-xl leading-[100%] tracking-[0.14px] font-inter_regular content-center text-center m-2 bg-purple-Purple_dark rounded-full w-10 h-10">OP</h3>
                                        <span className='w-3 h-3 absolute right-2 bottom-2 rounded-full bg-white '></span>
                                        <span className='w-2 h-2 absolute right-[10px] bottom-[10px] rounded-full bg-[#2E7D32] '></span>
                                    </div>
                                    <h4 className='sm:text-xl text-base  leading-[100%] tracking-[0.14px] font-inter_regular'>Customer Service</h4>
                                </div>

                                <div className="flex flex-col gap-5 absolute top-[76px] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] w-full h-[426px] overflow-scroll justify-center px-[30px]">
                                    <div className="flex flex-col gap-[6px] relative">
                                        <p className="px-6 py-2 max-w-[272px] w-full border-purple-Purple_light border-l bg-[#FAFAFA] rounded-[10px] rounded-tl-none SameText1 ">Hi, I'm the Support Assistant</p>
                                        <p className="text-[10px] leading-[140%] text-[#ABB5BA] font-inter_Medium">2:30 pm</p>
                                        <img className='absolute top-0 left-[-3px]' src={Polygon} alt="Polygon" />
                                    </div>
                                    <div className="flex flex-col relative gap-[6px]">
                                        <p className="px-6 py-2 border-purple-Purple_light border-l bg-[#FAFAFA] rounded-[10px] rounded-tl-none SameText1 max-w-[207px] w-full">How Can i Help You
                                        </p>
                                        <p className="text-[10px] leading-[140%] text-[#ABB5BA] font-inter_Medium">2:30 pm</p>
                                        <img className='absolute top-0 left-[-3px]' src={Polygon} alt="Polygon" />
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                    <p className="border rounded-[10px] py-5 px-[11.33px] text-center text-sm tracking-[0.17px] font-inter_regular text-[#2E7D32]">Faster Delivery Request</p>
                                    <p className="border rounded-[10px] py-5 px-[11.33px] text-center text-sm tracking-[0.17px] font-inter_regular text-[#FFB900]">Product Information</p>
                                    <p className="border rounded-[10px] py-5 px-[11.33px] text-center text-sm tracking-[0.17px] font-inter_regular text-[#D32F2F]">Cancel order</p>
                                    </div>
                                    <div className="flex flex-col relative items-end gap-[6px]">
                                        <p className="px-6 py-2 border-purple-Purple_light border-l bg-[#FAFAFA] rounded-[10px] rounded-tl-none SameText1 max-w-[232px] w-full">Faster Delivery Request
                                        </p>
                                        <p className="text-[10px] leading-[140%] text-[#ABB5BA] font-inter_Medium">2:30 pm</p>
                                        <img className='absolute top-0 left-[-3px]' src={Polygon} alt="Polygon" />
                                    </div>
                                    <div className="flex flex-col relative gap-[6px]">
                                        <p className="px-6 py-2 border-purple-Purple_light border-l bg-[#FAFAFA] rounded-[10px] rounded-tl-none SameText1 ">Sorry, once an order is placed, the delivery date cannot be changed as sellers provide this based on various factors like your address, type of product, and delivery timelines set by their partnered couriers.
                                        </p>
                                        <p className="text-[10px] leading-[140%] text-[#ABB5BA] font-inter_Medium">2:30 pm</p>
                                        <img className='absolute top-0 left-[-3px]' src={Polygon} alt="Polygon" />

                                    </div>
                                    <div className="flex flex-col relative gap-[6px] pb-5">
                                        <p className="px-6 py-2 border-purple-Purple_light border-l bg-[#FAFAFA] rounded-[10px] rounded-tl-none SameText1 ">In case the order can be delivered faster, you will also receive this update via an email and SMS.</p>
                                        <p className="text-[10px] leading-[140%] text-[#ABB5BA] font-inter_Medium">2:30 pm</p>
                                        <img className='absolute top-0 left-[-3px]' src={Polygon} alt="Polygon" />

                                    </div>
                                </div>

                                <div className="px-[30px] pb-[20px] pt-[6px]  w-full absolute bottom-0 ">
                                    <div className="flex gap-2 px-5 py-3 border rounded-[30px] items-center ">
                                        <img src={MIcrophone} alt="Microphone" />
                                        <input className='max-w-[402px] w-full outline-none SameText1' type="text" placeholder='Your Message' />
                                        <img src={Smile} alt="Smile" />
                                        <img src={UnstyledButton} alt="UnstyledButton" />
                                        <img src={SendIcon} alt="SendIcon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CustmerCare
