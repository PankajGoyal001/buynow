import React, { useState } from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom'
import CreditCard from "../assets/svg/3Card.svg";
import DebitCard from "../assets/svg/3Card1.svg";
import Buttons from '../Component/ui/Buttons';
import Popus from '../Component/ui/Popus';

const Payment = () => {
    const [Click, setClick] = useState(false)
    return (
        <>
            <div className="sm:py-20 py-10">
                <div className="container">
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <div className="flex flex-col pb-[14px] sm:pb-5 border-b gap-[10px]">
                            <h1 className="CommonHead">Checkout</h1>
                            <div className="sm:flex hidden">
                                <Link to={"/"}>
                                    <h3 className="SameText">Home</h3>
                                </Link>
                                <img src={arrowRight} alt="ArrowRight" />
                                <h3 className="SameText">Checkout</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[13px] p-[15px] sm:p-[30px] pb-[23px] bg-[#FAFAFA] rounded-[20px]">
                            <div className="flex justify-between">
                                <Link to={"/address"}>
                                    <p className="SameText hover:text-purple-Purple_dark hover:cursor-pointer ">Delivery Address</p>
                                </Link>
                                <Link to={"/order"}>
                                    <p className="SameText hover:text-purple-Purple_dark hover:cursor-pointer text-center sm:text-end">Order Summary</p>
                                </Link>
                                <Link to={"/payment"}>
                                    <p className="SameText hover:text-purple-Purple_dark hover:cursor-pointer text-center sm:text-end">Payment Option</p>
                                </Link>
                                <Link to={"/complete"}>
                                    <p className="SameText hover:text-purple-Purple_dark hover:cursor-pointer text-end">Complete Order</p>
                                </Link>
                            </div>
                            <div className="flex justify-between ">
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                                <input type="radio" />
                            </div>
                        </div>
                        <div className="flex justify-between w-full ">
                            <div className="flex justify-between max-w-[690px] w-full">
                                {["CARDS(DEBTI, CREDIT)", "UPI PAYMENT", "NET BANKING", "MEI", "CASH ON DELIVERY"].map((items, index) => (
                                    <h6 key={index} className='px-2 py-3 hover:text-purple-Purple_dark hover:border-b-2 border-purple-Purple_dark cursor-pointer text-sm text-gray-graydark leading-[171%] tracking-[0.4px] font-inter_Medium' >{items}</h6>
                                ))}
                            </div>
                            <div className="relative">
                                <img className="relative z-10" src={CreditCard} alt="credit card" />
                                <img className="top-[-6px] left-[3.11px] absolute" src={DebitCard} alt="debit card" />
                            </div>
                        </div>
                        <div className="flex items-start gap-6">
                            <div className="flex max-w-[760px] w-full flex-col gap-5">
                                <div className="flex gap-6 ">


                                    <div className="flex flex-col max-w-[270px] rounded-[20px] bg-[#4226590A] w-full gap-[10px]">
                                        <div className="flex pt-[15px] pl-[10px] pb-[5px] pr-5  items-center justify-between">
                                            <div className="flex items-center">
                                                <input className='m-[9px]' type="checkbox" id='checkbox' />
                                                <h6 className='SameText'>Shpping Card</h6>
                                            </div>
                                            <img src="src/assets/svg/visa.svg" alt="visa" />
                                        </div>
                                        <div className="flex justify-around">
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                        </div>
                                        <div className="flex justify-between w-full items-center pt-[10px] bg-[#67517A] rounded-b-[20px] px-5 pb-5">
                                            <div className="flex text-start flex-col">
                                                <h6 className='text-[10px] leading-[140%] font-inter_Medium text-gray-graylight'>Card Holder</h6>
                                                <h3 className='text-[14px] leading-[157%] text-white font-inter_Medium'>Ahmad Dorwart</h3>
                                            </div>
                                            <p className="text-[10px] leading-[140%] font-inter_Medium text-gray-graylight">Exp <span className='text-[14px] leading-[157%] text-white font-inter_Medium'>09/25</span></p>
                                        </div>
                                    </div>

                                    <div className="flex flex-col max-w-[270px] rounded-[20px] bg-[#1F292D0A] w-full gap-[10px]">
                                        <div className="flex pt-[15px] pl-[10px] pb-[5px] pr-5  items-center justify-between">
                                            <div className="flex items-center">
                                                <input className='m-[9px]' type="checkbox" id='checkbox' />
                                                <h6 className='SameText'>Shpping Card</h6>
                                            </div>
                                            <img src="src/assets/svg/visa.svg" alt="visa" />
                                        </div>
                                        <div className="flex justify-around">
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-[#2E1A3E]">2356</p>
                                        </div>
                                        <div className="flex justify-between w-full items-center pt-[10px] bg-[#495F6A] rounded-b-[20px] px-5 pb-5">
                                            <div className="flex text-start flex-col">
                                                <h6 className='text-[10px] leading-[140%] font-inter_Medium text-gray-graylight'>Card Holder</h6>
                                                <h3 className='text-[14px] leading-[157%] text-white font-inter_Medium'>Ahmad Dorwart</h3>
                                            </div>
                                            <p className="text-[10px] leading-[140%] font-inter_Medium text-gray-graylight">Exp <span className='text-[14px] leading-[157%] text-white font-inter_Medium'>09/25</span></p>
                                        </div>
                                    </div>


                                    <div className="flex max-w-[172px] w-full h-[168px] border-dashed border-2 rounded-[20px] justify-center items-center ">
                                        <p className="">+ Add Card</p>
                                    </div>
                                </div>
                                <span className='BorderSolid'></span>
                                <div className="flex flex-col gap-5">
                                    <h4 className='Copytext'>Other Card</h4>
                                    <div className="grid grid-cols-2 gap-5">
                                        <input className='border rounded-[30px] px-5 py-4 text-gray-graydark' type="card" id='name' placeholder='Card name' />
                                        <input className='border rounded-[30px]  px-5 py-4 text-gray-graydark' type="card" id='name' placeholder='Card name' />
                                        <input className='border rounded-[30px] px-5 py-4 text-gray-graydark' type="cvv" id='name' placeholder='CVV' />
                                        <input className='border rounded-[30px] px-5 py-4 text-gray-graydark' type="time" id='Exp Date' placeholder='Exp Date' />
                                    </div>
                                    <span className='BorderSolid'></span>
                                    <div className="flex gap-6">
                                        <Buttons variant={"Simple"} classname={"border"} href={""} childname={"SAVE CARD"} />
                                        <Link to={"/payment"}>
                                            <button onClick={() => setClick(!Click)} className='px-[11px] py-2 text-[15px] leading-[173%] tracking-[0.46px] font-inter_Medium text-purple-Purple_dark'>CANCEL</button>
                                            {Click &&
                                                <Popus Payment={"Solid"}  />
                                            }
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col sm:gap-5 gap-[14px] border rounded-[20px] w-full max-w-[368px] p-[15px] sm:p-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h6 className="Head">Summary</h6>
                                    <span className='BorderSolid'></span>
                                </div>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="flex justify-between">
                                        <p className="Copytext">Subtotal</p>
                                        <p className="SameText">$320.00</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p className="Copytext">Shipping</p>
                                        <p className="SameText">Free</p>
                                    </div>
                                </div>
                                <span className='BorderSolid'></span>
                                <div className="flex justify-between">
                                    <p className="Copytext">2 Item</p>
                                    <p className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-purple-Purple_dark">Edit</p>
                                </div>
                                <span className='BorderSolid'></span>
                                <div className="flex items-center justify-between">
                                    <p className="Copytext">Total amount</p>
                                    <p className="text-2xl font-heebo_Medium text-gray-graystrong">$530.00</p>
                                </div>
                                <Buttons variant={"Hard"} href={"payment"} childname={"Continue Payment"} classname={"w-full"} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment
