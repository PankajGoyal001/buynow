import React from 'react'
import Outlines from "../../assets/svg/FilterListOutlined.svg";
import arrayDown from "../../assets/svg/Arrowlineright.svg";
import DealData from "../../json/dealing.json";

const DealsProduct = () => {
    return (
        <>
            <div className="container">
                <div className="flex flex-col gap-6'">
                    <div className="flex justify-between pb-6 items-end">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="text-xl leading-8 font-heebo_Medium tracking-[0.15px] text-gray-graystrong">All Deals</h2>
                            <h5 className="text-base tracking-[0.15px] font-inter_regular text-gray-graydark">Showing 1–9 of 120 results</h5>
                        </div>
                        <div className="flex gap-[10px]">
                            <button
                                className='flex items-center px-4 py-[6px] border-[#42265980] border rounded-[30px] gap-2'>
                                <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Filter</p>
                                <img src={Outlines} alt="Outlines" />


                            </button>
                            <button className='flex items-center gap-2 px-4 py-[6px] border-[#42265980] border rounded-[30px]'>
                                <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Sort by</p>
                                <img className='rotate-90' src={arrayDown} alt="arrowDown" />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        {
                            DealData.map((items, index) => (
                                <div key={index} className="flex rounded-[20px]  items-center border flex-col">
                                    <div className=' justify-items-center'>
                                        <img className='p-10' src={`src/assets/images/${items.Image}`} alt="" />
                                        <img src={`src/assets/svg/${items.Color}`} alt="ColorDots" />
                                    </div>
                                    <div className="flex flex-col  p-5 gap-[10px]">
                                        <h4 className="text-base tracking-[0.15px] font-inter_regular text-gray-graydark">{items.Name}</h4>
                                        <span className='border-b border-[#42265914]'></span>
                                        <div className="flex items-center justify-between">
                                            <p className="tracking-[0.15px] text-xl leading-8 text-gray-graystrong font-heebo_Medium">{items.Price}</p>
                                            <div className="flex px-2 hover:cursor-pointer py-[6px] gap-2">
                                                <p className="text-sm leading-6 font-inter_Medium text-purple-Purple_dark tracking-[0.4px]">{items.Buy}</p>
                                                <img src={`src/assets/svg/${items.Arrow}`} alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DealsProduct
