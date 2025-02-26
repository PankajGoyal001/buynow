import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from "../assets/svg/ArrowRight.svg";
import Buttons from '../Component/ui/Buttons';
import Alert from "../assets/svg/Alert.svg";
import upload from "../assets/svg/UploadIcon.svg";


const ReturnOrder = () => {
  return (
    <>
    <div className="container">
        <div className="sm:py-20 py-10">
            <div className="flex flex-col gap-5 sm:gap-10">
                <div className="sm:flex-row gap-5 flex flex-col justify-between pb-5 border-b sm:items-end">
                    <div className="flex flex-col gap-[10px] ">
                        <h1 className='CommonHead'>Return Order</h1>
                        <div className="sm:flex hidden items-center">
                            <Link to={"/"}>
                            <h6 className='SameText'>Home</h6>
                            </Link>
                            <img src={arrowRight} alt="arrow" />
                            <h6 className='Copytext'>Return</h6>
                        </div>
                    </div>
                    <Buttons variant={"Hard"} childname={"Need Help"} />
                </div>
                <div className="flex gap-3 bg-[#fff8e6] rounded-[10px] py-[6px] items-start pr-5 pl-4">
                    <img className='py-[7px]' src={Alert} alt="Alert" />
                    <div className="flex flex-col gap-1 max-w-[1072px] w-full py-2">
                        <h4 className='text-[#664b00] text-base tracking-[0.15px] font-inter_Medium'>Are You Sure Your Order Will Be Return</h4>
                        <p className="text-[#664b00] text-sm tracking-[0.17px] font-inter_regular">Montes, sit euismod commodo id aliquam facilisis lorem quam. Tortor aliquam commodo id non, pellentesque nulla. Semper quis sapien eu nulla ipsum duis eget quis. Lectus amet, nibh ultricies purus in pellentesque eu amet.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-[10px] sm:gap-5">
                    <h3 className='Head'>Return Information</h3>
                    <div className="grid sm:grid-cols-2 border border-[#574B9B1F] rounded-[20px] gap-[10px] sm:gap-6 p-5 sm:p-[30px] md:p-[50px] ">
                        <div className="flex p-[9px] gap-[9px] items-center">
                            <input className='' type="checkbox" />
                            <p className="CopyText text-[#1F292D]">Wrong Product Delivered</p>
                        </div>
                        <div className="flex p-[9px] gap-[9px] items-center">
                            <input className='' type="checkbox" />
                            <p className="CopyText text-[#1F292D]">Didn’t Like the Product</p>
                        </div>
                        <div className="flex p-[9px] gap-[9px] items-center">
                            <input className='' type="checkbox" />
                            <p className="CopyText text-[#1F292D]">Damaged Product</p>
                        </div>
                        <div className="flex p-[9px] gap-[9px] items-center">
                            <input className='' type="checkbox" />
                            <p className="CopyText text-[#1F292D]">Arrived Too Late</p>
                        </div>
                        <div className="flex p-[9px] gap-[9px] items-center">
                            <input className='' type="checkbox" />
                            <p className="CopyText text-[#1F292D]">Other Reason</p>
                        </div>
                    </div>
                </div>
                <div className="px-5 border border-[#574B9B1F] pb-12 rounded-[20px]">
                    <p className="py-4 SameText">Product return reason Explain</p>
                </div>
                <div className="flex flex-col gap-[10px] sm:gap-5">
                    <h3 className='Head'>Product Photo/Video</h3>
                    <div className="p-5 items-center justify-center border border-[#574B9B1F] border-dashed bg-[#FAFAFA] rounded-[20px] h-[293px] flex flex-col gap-3">
                        <img className='p-3 rounded-full bg-[#4226590A]' src={upload} alt="UploadIcon" />
                        <div className="flex gap-[6px]">
                            <p className="text-sm font-inter_Medium leading-[157%] ">Drop your files here. JPG or  MP4 max 100mb.</p>
                            <p className="text-sm font-inter_Medium leading-[157%] text-purple-Purple_dark">Browse</p>
                        </div>
                    </div>
                </div>
                <div className="flex sm:gap-6 gap-[6px] justify-center">
                    <Buttons variant={"Simple"} childname={"GO BACK"}  classname={"px-[11px] py-2"}/>
                    <Buttons variant={"Hard"} childname={"Return order"} />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ReturnOrder
