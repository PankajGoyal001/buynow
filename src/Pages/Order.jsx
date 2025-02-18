import React, { Fragment, useState } from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import Buttons from '../Component/ui/Buttons';
import OrderData from "../json/OrderData.json";
import Addition from "../assets/svg/AddFilled.svg";
import Subtract from "../assets/svg/subtract.svg";


const Order = () => {
    // Store quantity for each item using their index as key
    const [quantities, setQuantities] = useState(
        OrderData.reduce((acc, _, index) => ({ ...acc, [index]: 1 }), {})
    );

    // Function to update quantity
    const updateQuantity = (index, value) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [index]: Math.max(1, Math.min(20, prevQuantities[index] + value)),
        }));
    };
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
                        <div className="lg:flex grid gap-5 sm:gap-[22px] items-start">
                            <div className="flex flex-col max-w-[760px] w-full gap-[10px] sm:gap-5">
                                <h3 className='Copytext'>Order Summary</h3>
                                <div className="flex flex-col gap-[10px] sm:gap-5 ">
                                    {OrderData.map((items, index) => (
                                        <Fragment key={index}>
                                            <div className="flex rounded-[20px] sm:p-5 sm:border gap-[10px] sm:gap-6 ">
                                                <img className='sm:p-[10px] bg-[#4226590A] rounded-[20px]' src={`src/assets/Images/${items.Images}`} alt="Images" />
                                                <div className="flex flex-col w-full sm:gap-[15px] gap-[6px]">
                                                    <h2 className='Head'>{items.Title}</h2>
                                                    <p className="SameText">{items.Text}</p>
                                                    <span className='BorderSolid'></span>
                                                    <div className="flex sm:flex-row flex-col-reverse gap-[6px] sm:items-center">
                                                        <div className="flex justify-around border max-w-[144px] w-full px-[10px] py-[6px] sm:p-[15px] rounded-[30px]">
                                                            <button onClick={() => updateQuantity(index, -1)} className="w-[13px]">
                                                                <img src={Subtract} alt="subtract" />
                                                            </button>
                                                            <h2 className="SameText">{quantities[index]}</h2>
                                                            <button onClick={() => updateQuantity(index, 1)} className="w-[13px]" >
                                                                <img src={Addition} alt="add" />
                                                            </button>
                                                        </div>
                                                        <span className=' sm:border-r sm:mx-5 border-b sm:h-6'></span>
                                                        <div className="flex w-full justify-between">
                                                        <p className="Head">{items.Price}</p>
                                                        <Buttons variant={"Simple"} childname={"Remove"} classname={"px-[5px] py-1 max-w-[67px] w-full text-[13px] leading-[170%] tracking-[0.46px] font-inter_Medium text-purple-Purple_dark"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </Fragment>
                                    ))}
                                </div>
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

export default Order
