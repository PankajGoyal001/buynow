import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import arrowRight from "../../assets/svg/ArrowRight.svg";
import Addition from "../../assets/svg/AddFilled.svg";
import Subtract from "../../assets/svg/subtract.svg";
import CartData from "../../json/Cart.json";
import CreditCard from "../../assets/svg/3Card.svg";
import DebitCard from "../../assets/svg/3Card1.svg";
import Buttons from "../ui/Buttons";

const CartProduct = () => {
    // Store quantity for each item using their index as key
    const [quantities, setQuantities] = useState(
        CartData.reduce((acc, _, index) => ({ ...acc, [index]: 1 }), {})
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
            <div className="py-20 ">
                <div className="container">
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col pb-5 border-b gap-[10px]">
                            <h1 className="CommonHead">Cart Products</h1>
                            <div className="flex">
                                <Link to={"/"}>
                                    <h3 className="SameText">Home</h3>
                                </Link>
                                <img src={arrowRight} alt="ArrowRight" />
                                <h3 className="SameText">Cart</h3>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            {CartData.map((items, index) => (
                                <Fragment key={index}>
                                    <div className="flex justify-between items-center">
                                        <div className="flex max-w-[858px] w-full gap-6">
                                            <img
                                                className="p-5 bg-[#4226590A] rounded-[20px]"
                                                src={`src/assets/Images/${items.Images}`}
                                                alt="product"
                                            />
                                            <div className="flex flex-col w-full gap-5">
                                                <div className="flex flex-col gap-[10px]">
                                                    <h4 className="Head">{items.Head}</h4>
                                                    <p className="SameText">{items.Title}</p>
                                                </div>
                                                <span className="BorderSolid"></span>
                                                <div className="flex items-center gap-[30px]">
                                                    <div className="flex items-center gap-[10px]">
                                                        <p className="Head">{items.Size}</p>
                                                        <p className="SameText">{items.SizeText}</p>
                                                    </div>
                                                    <span className="border-l h-6"></span>
                                                    <div className="flex items-center gap-[10px]">
                                                        <p className="Head">{items.Gps}</p>
                                                        <p className="SameText">{items.Style}</p>
                                                    </div>
                                                    <span className="border-l h-6"></span>
                                                    <div className="flex items-center gap-[10px]">
                                                        <p className="SameText">{items.Color}</p>
                                                    </div>
                                                </div>
                                                <span className="BorderSolid"></span>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex justify-around border max-w-[144px] w-full p-[15px] rounded-[30px]">
                                                        <button onClick={() => updateQuantity(index, -1)} className="w-[13px]">
                                                            <img src={Subtract} alt="subtract" />
                                                        </button>
                                                        <h2 className="SameText">{quantities[index]}</h2>
                                                        <button onClick={() => updateQuantity(index, 1)} className="w-[13px]" >
                                                            <img src={Addition} alt="add" />
                                                        </button>
                                                    </div>
                                                    <p className="SameText">{items.Shoping}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end gap-5">
                                            <p className="CommonHead">{items.Price}</p>
                                            <button className="px-[5px] py-1 max-w-[67px] w-full text-[13px] leading-[170%] tracking-[0.46px] font-inter_Medium text-purple-Purple_dark">
                                                {items.Remove}
                                            </button>
                                        </div>
                                    </div>
                                    <span className="border-r"></span>
                                </Fragment>
                            ))}
                        </div>
                        <span className="BorderSolid"></span>
                        <div className="flex justify-between">
                            <div className="flex flex-col bg-[#000000] rounded-[20px] p-[30px] max-w-[564px] w-full gap-[30px]">
                                <div className="flex flex-col gap-[10px]">
                                    <h2 className="text-xl leading-8 tracking-[0.15px] font-heebo_Medium text-white">
                                        EMI Available
                                    </h2>
                                    <p className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-[#ABB5BA]">
                                        No Cost EMI offers. Id aliquam felis a egestas mi diam erat eu habitasse.
                                        Please check EMI plans
                                    </p>
                                    <p className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-[#ABB5BA]">
                                        Learn more
                                    </p>
                                </div>
                                <span className="border-b"></span>
                                <div className="flex justify-between items-center">
                                    <div className="flex border rounded-[6px]">
                                        <button className="text-white px-[22px] py-2">CREDIT CARD</button>
                                        <span className="border-r"></span>
                                        <button className="text-white px-[22px] py-2">DEBIT CARD</button>
                                    </div>
                                    <div className="relative">
                                        <img className="relative z-10" src={CreditCard} alt="credit card" />
                                        <img className="top-[-6px] left-[3.11px] absolute" src={DebitCard} alt="debit card" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex max-w-[564px] w-full border rounded-[20px] p-[30px] flex-col gap-5">
                                <div className="flex flex-col gap-[10px]">
                                    <div className="flex justify-between items-center">
                                        <p className="Copytext">Subtotal</p>
                                        <p className="SameText">$320.00</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="Copytext">Item</p>
                                        <p className="SameText">2</p>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <p className="Copytext">Shipping</p>
                                        <p className="SameText">Free</p>
                                    </div>
                                </div>
                                <span className="BorderSolid"></span>
                                <div className="flex justify-between items-center">
                                    <p className="Copytext">Total</p>
                                    <p className="text-2xl font-heebo_Medium">$530.00</p>
                                </div>
                                <Link >
                                <Buttons variant={"Hard"} href={"checkout"} childname={"Check out"} classname={"w-full"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProduct;
