import React, { useState } from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import Buttons from '../Component/ui/Buttons';
import Popus from '../Component/ui/Popus';


const PayCheck = () => {
    const [Click, setClick] = useState(false)
    return (
        <>
            <div className="container">
                <div className="sm:py-20 py-10">
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <div className="sm:flex-row gap-5 flex flex-col justify-between pb-5 border-b sm:items-end">
                            <div className="flex flex-col gap-[10px] ">
                                <h1 className='CommonHead'>Payment</h1>
                                <div className="sm:flex hidden items-center">
                                    <Link to={"/"}>
                                        <h6 className="SameText">Home</h6>
                                    </Link>
                                    <img src={arrowRight} alt="arrow" />
                                    <h6 className="Copytext ">Payment</h6>
                                </div>
                            </div>
                            <div className="flex justify-between sm:gap-[10px]">
                                <Buttons variant={"Simple"} childname={"UPI Payment"} classname={"px-[8px] py-[6px]"} />
                                <Buttons variant={"Hard"} childname={"CARDS (DEBIT, CREDIT)"} classname={"px-[16px] py-[6px]"} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className='Head'>Save Cards</h3>
                            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">

                                <div className="flex flex-col max-w-[368px] rounded-[20px] bg-[#1F292D0A] w-full gap-[14px] sm:gap-5">
                                    <div className="flex p-[15px] pb-[6px] sm:p-5 sm:pb-[10px] items-center justify-between">
                                        <div className="flex gap-[6px] bg-[#574B9B0A] rounded-[10px] p-[15px] md:p-[5px] pb-[6px] md:pb-[10px]  items-center">
                                            <img className='rounded-full bg-[#e8e8ed]' src={`src/assets/svg/HDFCBANK.svg`} alt="" />
                                            <h6 className='SameText'>Shpping Card</h6>
                                        </div>
                                        <img src="src/assets/svg/visa.svg" alt="visa" />
                                    </div>
                                    <div className="flex gap-[10px] justify-center items-center">
                                        <div className="flex bg-[#574B9B0A] rounded-[5px] border-dashed border border-[#574B9B1F] px-[10px] py-[5px] gap-[14px]">
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">2356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">2356</p>
                                        </div>
                                        <p className="text-xs leading-[140%] font-inter_regular text-[#495F6A]">Exp <span className='text-sm font-inter_Medium'> 09/25 </span></p>
                                    </div>
                                    <div className="flex justify-between w-full items-center sm:p-5 p-[15px] bg-[#495F6A] rounded-b-[20px] ">
                                        <div className="flex text-start flex-col">
                                            <h6 className='text-[10px] leading-[140%] font-inter_Medium text-gray-graylight'>Card Holder</h6>
                                            <h3 className='text-[14px] leading-[157%] text-white font-inter_Medium'>Ahmad Dorwart</h3>
                                        </div>
                                        <button className='flex gap-2 border sm:px-3 px-[10px] py-1 sm:py-2 rounded-[30px] border-white '>
                                            <img src={`src/assets/svg/Remove.svg`} alt="remove" />
                                            <p className="text-white font-inter_Medium text-sm tracking-[0.4px] leading-6">REMOVE CARD</p>
                                        </button>

                                    </div>
                                </div>

                                <div className="flex flex-col max-w-[368px] rounded-[20px] bg-[#1F292D0A] w-full gap-[14px] sm:gap-5">
                                    <div className="flex p-[15px] pb-[6px] sm:p-5 sm:pb-[10px] items-center justify-between">
                                        <div className="flex gap-[6px] bg-[#574B9B0A] rounded-[10px] p-[15px] md:p-[5px] pb-[6px] md:pb-[10px]  items-center">
                                            <img className='rounded-full bg-[#e8e8ed]' src={`src/assets/svg/ICICBANK.svg`} alt="" />
                                            <h6 className='SameText'>Shpping Card</h6>
                                        </div>
                                        <img src="src/assets/svg/visa.svg" alt="visa" />
                                    </div>
                                    <div className="flex gap-[10px] justify-center items-center">
                                        <div className="flex bg-[#574B9B0A] rounded-[5px] border-dashed border border-[#574B9B1F] px-[10px] py-[5px] gap-[14px]">
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">3356</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">5623</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">4562</p>
                                            <p className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark">8542</p>
                                        </div>
                                        <p className="text-xs leading-[140%] font-inter_regular text-[#495F6A]">Exp <span className='text-sm font-inter_Medium'> 05/24</span>  </p>
                                    </div>
                                    <div className="flex justify-between w-full items-center sm:p-5 p-[15px] bg-[#67517A] rounded-b-[20px] ">
                                        <div className="flex text-start flex-col">
                                            <h6 className='text-[10px] leading-[140%] font-inter_Medium text-gray-graylight'>Card Holder</h6>
                                            <h3 className='text-[14px] leading-[157%] text-white font-inter_Medium'>Ahmad Dorwart</h3>
                                        </div>
                                        <button className='flex gap-2 border sm:px-3 px-[10px] py-1 sm:py-2 rounded-[30px] border-white '>
                                            <img src={`src/assets/svg/Remove.svg`} alt="remove" />
                                            <p className="text-white font-inter_Medium text-sm tracking-[0.4px] leading-6">REMOVE CARD</p>
                                        </button>

                                    </div>
                                </div>
                                <div className="flex max-w-[368px] w-full md:h-[220px] sm:h-[150px] h-[64px]  border-dashed border-2 rounded-[20px] justify-center items-center ">
                                    <p className="SameText">+ Add Card</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col gap-[10px] sm:gap-5">
                            <h4 className='Copytext'>Other Card</h4>
                            <div className="grid sm:grid-cols-2 gap-[10px] sm:gap-5">
                                <input className='border rounded-[30px] px-5 py-4 text-gray-graydark' type="card" id='name' placeholder='Card name' />
                                <input className='border rounded-[30px]  px-5 py-4 text-gray-graydark' type="card" id='name' placeholder='Card name' />
                                <input className='border rounded-[30px] px-5 py-4 text-gray-graydark' type="cvv" id='name' placeholder='CVV' />
                                <input className='border rounded-[30px] px-5 py-4 text-gray-graydark' type="time" id='Exp Date' placeholder='Exp Date' />
                            </div>
                            <span className='BorderSolid'></span>
                            <div className="flex gap-6">
                                <Buttons variant={"Simple"} classname={"border"} childname={"SAVE CARD"} />
                                <Link to={"/payment"}>
                                    <button onClick={() => setClick(!Click)} className='px-[11px] py-2 text-[15px] leading-[173%] tracking-[0.46px] font-inter_Medium text-purple-Purple_dark'>CANCEL</button>
                                    {Click &&
                                        <Popus Payment={"Solid"} />
                                    }
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PayCheck
