import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowRight from "../../assets/svg/ArrowRight.svg";
import CartData from "../../json/Cart.json";


const CartProduct = () => {
    const [Count, setCount] = useState(1)
  return (
    <>
    <div className="py-20 ">
        <div className="container">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col pb-5 border-b gap-[10px]">
                    <h1 className='CommonHead'>Cart Products</h1>
                    <div className="flex">
                        <Link to={"/"}>
                        <h3 className='SameText'>Home</h3>
                        </Link>
                        <img src={arrowRight} alt="ArrowRight" />
                        <h3 className='SameText'>Cart</h3>                        
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {
                        CartData.map((items,index)=>(
                            <div key={index} className="flex justify-between  items-center">
                            <div className="flex max-w-[858px] w-full gap-6">
                            <img className='p-5 bg-[#4226590A] rounded-[20px]' src={`src/assets/Images/${items.Images}`} alt="images" />
                            <div className="flex flex-col w-full gap-5">
                                <div className="flex flex-col gap-[10px]">
                                    <h4 className='Head'>{items.Head}</h4>
                                    <p className="SameText">{items.Title}</p>
                                </div>
                                <span className='BorderSolid'></span>
                                <div className="flex items-center gap-[30px]">
                                    <div className="flex items-center gap-[10px]">
                                    <p className="Head">{items.Size}</p>
                                    <p className="SameText">{items.SizeText}</p>
                                    </div>
                                    <span className='border-l h-6'></span>
                                    <div className="flex items-center gap-[10px]">
                                    <p className="Head">{items.Gps}</p>
                                    <p className="SameTxet">{items.Style}</p>
                                    </div>
                                    <span className='border-l h-6'></span>
                                    <div className="flex items-center gap-[10px]">
                                    <p className="SameText">{items.Color}</p>
                                    </div>
                                </div>
                                <span className='BorderSolid'></span>
                                <div className="flex justify-around border max-w-[144px] w-full p-[15px] rounded-[30px] ">
                                    <button onClick={()=> setCount(Count === 20 ? Count : Count + 1)} className="w-[13px]">+</button>
                                    <h2 className="SameText">{Count}</h2>
                                    <button onClick={()=> setCount(Count === 1 ? Count : Count - 1)} className="w-[13px]">-</button>
                                </div>
                            </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CartProduct
