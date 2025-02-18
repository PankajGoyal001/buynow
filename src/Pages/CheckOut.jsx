import React, { useState } from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import CheckData from "../json/CheckData.json";
import Buttons from '../../src/Component/ui/Buttons';
const Checkout = () => {
  const [Radio, setRadio] = useState(false)
  return (
    <>
      <div className="container">
        <div className="sm:py-20 py-10">
          <div className="flex flex-col  gap-5 sm:gap-10">
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
            <div className="flex flex-col gap-[3px] sm:gap-[13px] p-[15px] sm:p-[30px] pb-[23px] bg-[#FAFAFA] rounded-[20px]">
              <div className="flex justify-between">
                <p className="SameText text-start hover:text-purple-Purple_dark hover:cursor-pointer  ">Sign In</p>
                <Link to={"/address"}>
                  <p className="SameText text-center hover:text-purple-Purple_dark hover:cursor-pointer  ">Delivery Address</p>
                </Link>
                <Link to={"/payment"}>
                  <p className="SameText text-center hover:text-purple-Purple_dark hover:cursor-pointer  sm:text-end">Payment Option</p>
                </Link>
                <Link to={"/complete"}>
                  <p className="SameText hover:text-purple-Purple_dark hover:cursor-pointer text-end">Complete Order</p>
                </Link>
              </div>
              <div className={`flex justify-between w-[16.67px] h-[16.67px] p-1 ${!Radio ? "border border-black rounded-full" : "border-black rounded-full"}`}>
                <button onClick={() => setRadio(!Radio)} className={``}></button>
              </div>
            </div>
            <div className="sm:flex sm:gap-6 gap-5 grid items-start">
              <div className="flex max-w-[760px] w-full items-center flex-col gap-[10px] sm:gap-5">
                {
                  CheckData.map((items, index) => (
                    <Link to={"/regester"} key={index} className="flex justify-between w-full border border-[#574B9B1F] rounded-[20px] px-[30px] py-5">
                      <div className="flex gap-[15px]  items-center">
                        <div className="p-[10px] rounded-full bg-[#4226590A]">
                          <img src={`src/assets/svg/${items.Images}`} alt="" />
                        </div>
                        <p className="Copytext">{items.Title}</p>
                      </div>
                      <img src={`src/assets/svg/${items.Arrow}`} alt="ArrowRight" />
                    </Link>

                  ))
                }
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
