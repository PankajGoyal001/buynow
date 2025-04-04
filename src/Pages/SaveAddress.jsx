import React from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import Buttons from '../Component/ui/Buttons';

const SaveAddress = () => {
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
                                <p className="SameText hover:text-purple-Purple_dark hover:cursor-pointer ">Delivery Address</p>
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
                        <div className="md:flex grid gap-5 sm:gap-6 items-start">
                            <div className="flex flex-col max-w-[760px] w-full gap-[10px] sm:gap-5">
                                <h3 className='Copytext'>Delivery Address</h3>
                                <div className="sm:flex w-full gap-[30px] border rounded-[30px] justify-between items-end px-[15px] py-[10px] sm:p-[30px]">
                                    <div className="flex flex-col gap-[10px] sm:gap-5">
                                        <div className="flex gap-[10px]">
                                            <h5 className="Head">Ahmad Dorwart</h5>
                                            <h6 className='text-white bg-[#FFB900] rounded-[64px] px-[6.5px] text-xs leading-[166%] tracking--[0.14px] text-center content-center font-inter_Medium'>HOME</h6>
                                        </div>
                                        <p className="SameText">3891 Ranchview Dr. Richardson, California 62639</p>
                                    </div>
                                    <button className='px-[11px] py-2 font-inter_Medium text-purple-Purple_dark'>SELECT ADDRESS</button>
                                </div>
                                <div className="sm:flex w-full gap-[30px] border rounded-[30px] justify-between items-end px-[15px] py-[10px] sm:p-[30px]">
                                    <div className="flex flex-col gap-[10px] sm:gap-5">
                                        <div className="flex gap-[10px]">
                                            <h5 className="Head">Ahmad Dorwart</h5>
                                            <h6 className='text-white bg-[#FFB900] rounded-[64px] px-[6.5px] text-xs leading-[166%] tracking--[0.14px] text-center content-center font-inter_Medium'>WORK</h6>
                                        </div>
                                        <p className="SameText">8502 Preston Rd. Inglewood, Maine 98380</p>
                                    </div>
                                    <button className='px-[11px] py-2 font-inter_Medium text-purple-Purple_dark'>SELECT ADDRESS</button>
                                </div>
                                <span className='BorderSolid'></span>
                                <Buttons variant={"Simple"} classname={"border"} href={"AddNewAddress"} childname={"Add new address"} />
                            </div>
                            <div className="flex flex-col gap-[14px] sm:gap-5 border rounded-[20px] w-full max-w-[368px] p-[15px] sm:p-[30px]">
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
                        <span className='BorderSolid'></span>
                        <div className="flex flex-col gap-5">
                            <h6 className='Head'>Important note</h6>
                            <p className="SameText">Consectetur adipiscing elit. At praesent volutpat accumsan non adipiscing. Amet, sed in fames nec tincidunt. Neque vel urna facilisis vel nisl non. Lacinia scelerisque in nunc egestas et. Mauris duis sed pharetra, vulputate ut elit blandit donec. Tristique id a integer malesuada imperdiet tincidunt quis cras faucibus. Erat vitae auctor odio interdum magna non.</p>
                            <button className="NewText text-end">View Buynow Policy</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SaveAddress
