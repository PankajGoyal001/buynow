import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from "../assets/svg/ArrowRight.svg";
import OrderData from "../json/MyOrder.json";


const MyOrder = () => {
    return (
        <>
            <div className="sm:pt-20 pt-10">
                <div className="container">
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <div className="flex justify-between pb-5 border-b items-end">
                            <div className="flex flex-col gap-[10px] ">
                                <h1 className='CommonHead'>My Orders</h1>
                                <div className="sm:flex hidden items-center">
                                    <Link to={"/"}>
                                        <h6 className="SameText">Home</h6>
                                    </Link>
                                    <img src={arrowRight} alt="arrow" />
                                    <Link to={"/useraccount"}>
                                        <h6 className="Copytext ">My Orders</h6>
                                    </Link>
                                </div>
                            </div>
                            <div className="sm:border max-w-[368px] w-full items-center px-5 py-[15px] rounded-[30px] flex gap-2 ">
                                <img className="sm:pl-3" src="src/assets/svg/Search.svg" alt="search" />
                                <div className="sm:flex hidden group">
                                    <input className="w-36 outline-none text-gray-graydark" type="text" id="search" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className='Head'>My Orders</h3>
                        <div className="grid grid-cols-5 w-full p-[30px] border rounded-[20px]">
                            {
                                OrderData.map((item,index)=>(
                                    <div key={index} className="flex flex-col gap-[10px]">
                                        <h3 className='p-[10px]'>{item.Head}</h3>
                                        
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default MyOrder
