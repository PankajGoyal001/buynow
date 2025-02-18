import React, { useState } from 'react'
import Outlines from "../../assets/svg/FilterListOutlined.svg";
import arrayDown from "../../assets/svg/Arrowlineright.svg";
import CloseButton from "../../assets/svg/closeButton.svg";
import ArrowUp from "../../assets/svg/ArrowUp.svg";
import arrowRight from "../../assets/svg/ArrowRight.svg";



const DealsProduct = ({ Data, Title, Name ,New}) => {
    const [Filter, setFilter] = useState(false)
    const [rotate, setRotate] = useState(false);
    const [rotate1, setRotate1] = useState(false);
    const [rotate2, setRotate2] = useState(false);

    return (
        <>
            <div className="container relative">
                <div className="flex flex-col pt-20 gap-10">
                    <div className="flex flex-col gap-[10px]">
                        <h1 className='CommonHead'>{Title}</h1>
                        <div className="sm:flex hidden items-center pb-5 border-b border-[#42265914]">
                            <h6 className="SameText">Home</h6>
                            <img src={arrowRight} alt="arrow" />
                            <h6 className="SameText ">{Name}</h6>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6'">
                        <div className="sm:flex justify-between grid  pb-6 items-end"> <div className="flex flex-col gap-[10px]">
                            <h2 className="text-xl leading-8 font-heebo_Medium tracking-[0.15px] text-gray-graystrong">All Deals</h2>
                            <h5 className="text-base tracking-[0.15px] font-inter_regular text-gray-graydark">Showing 1–9 of 120 results</h5>
                        </div>

                            {New === "Solid" ? (<>

                                <div className="flex flex-col">
                                    <div className={`flex ${Filter ? "flex-row-reverse" : "flex-row"} gap-[10px]`}>
                                        <button onClick={() => setFilter(!Filter)}
                                            className="flex items-center px-4 py-[6px] border-[#42265980] border rounded-[30px] gap-2">
                                            <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Filter</p>
                                            <img src={Outlines} alt="Outlines" />
                                        </button>

                                        <button className='flex items-center gap-2 px-4 py-[6px] border-[#42265980] border rounded-[30px]'>
                                            <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Sort by</p>
                                            <img className='rotate-90' src={arrayDown} alt="arrowDown" />
                                        </button>
                                        {
                                            Filter && (<>
                                                <div className=" absolute border rounded-[20px] overflow-y-scroll overflow-hidden max-h-[619px] max-w-[564px] z-10 bg-white w-full md:top-[150px] right-0 sm:r-0 lg:right-[300px]">
                                                    <div className=" border  flex gap-[10px] flex-col">
                                                        <div className="flex bg-white sticky top-0 items-center border-b p-5 justify-between">
                                                            <h2 className='font-heebo_Medium text-xl leading-8 tracking-[0.15px] text-gray-graystrong'>Filter </h2>
                                                            <button onClick={() => setFilter(false)} >
                                                                <img className='hover:cursor-pointer' src={CloseButton} alt="close" />
                                                            </button>
                                                        </div>
                                                        <div className="flex flex-col p-5 gap-[10px]">
                                                            <button onClick={() => setRotate(!rotate)} className="flex justify-between  items-center rounded-[30px]" >
                                                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Top Deals</p>
                                                                <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                                            </button>
                                                            {
                                                                rotate && (<>
                                                                    <div className='flex flex-col  gap-[5px]'>
                                                                        <div className="flex justify-between gap-[10px]">
                                                                            <p className="max-w-[244px] w-full hover:bg-[#4226590A] rounded-[30px] py-[4px] pl-4">All Deals</p>
                                                                            <span className='border-l rounded-[5px]'></span>
                                                                            <p className="max-w-[244px] w-full hover:bg-[#4226590A] rounded-[30px] py-[4px] pl-4">Today Deals</p>
                                                                        </div>
                                                                        <div className="flex justify-between gap-[10px]">
                                                                            <p className="max-w-[244px] w-full hover:bg-[#4226590A] rounded-[30px] py-[4px] pl-4">Upcoming deals</p>
                                                                            <span className='border-l rounded-[5px]'></span>
                                                                            <p className="max-w-[244px] w-full hover:bg-[#4226590A] rounded-[30px] py-[4px] pl-4">Available products only</p>
                                                                        </div>

                                                                    </div>
                                                                </>)
                                                            }
                                                        </div>
                                                        <div className="flex flex-col p-5 gap-[10px]">
                                                            <button onClick={() => setRotate1(!rotate1)} className="flex justify-between  items-center rounded-[30px]" >
                                                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Category</p>
                                                                <img className={`transition-all duration-200 ${rotate1 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                                            </button>
                                                            {
                                                                rotate1 && (<>
                                                                    <ul className='grid grid-cols-2 gap-[10px] '>
                                                                        {["Watches", "Mobiles", "Laptops", "Tablets", "Headphones", "Printers", "Scanners", "Speakers"]?.map((items, index) => (
                                                                            <div key={index} className="flex justify-between gap-[10px]">
                                                                                <p className="max-w-[244px] w-full hover:bg-[#4226590A] rounded-[30px] py-[4px] pl-4">{items}</p>
                                                                                <span className='border-l rounded-[5px]'></span>
                                                                            </div>

                                                                        ))}
                                                                    </ul>
                                                                    <button className='font-inter_regular text-base tracking-[0.15px] text-purple-Purple_dark text-start hover:cursor-pointer'>View all</button>
                                                                </>)
                                                            }
                                                        </div>
                                                        <span className='border-b'></span>
                                                        <div className="flex flex-col p-5 gap-[10px]">
                                                            <button onClick={() => setRotate2(!rotate2)} className="flex justify-between  items-center rounded-[30px]" >
                                                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Price</p>
                                                                <img className={`transition-all duration-200 ${rotate2 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                                            </button>
                                                            {
                                                                rotate2 && (<>
                                                                    <ul className='flex flex-col '>
                                                                        <input className='' type="range" id='price' />
                                                                        <div className="flex items-center justify-between">
                                                                            <li className=" font-inter_regular text-sm tracking-[0.17px] text-gray-graydark ">low: $50.00</li>
                                                                            <li className=" font-inter_regular text-sm tracking-[0.17px] text-gray-graydark ">High: $500.00</li>
                                                                        </div>

                                                                    </ul>
                                                                </>)
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex bg-white sticky bottom-0 items-center border-b p-5 justify-between">
                                                        <button className='max-w-[252px] w-full'><p className="text-[15px] leading-[26px] font-inter_Medium tracking-[0.46px]">Clear All</p></button>
                                                        <button className='max-w-[252px] w-full bg-purple-Purple_dark py-2 rounded-[30px]'><p className="text-white text-[15px] leading-[26px] font-inter_Medium tracking-[0.46px]">Apply</p></button>
                                                    </div>
                                                </div>
                                            </>)
                                        }
                                    </div>

                                </div>
                            </>) : (<></>)}
                        </div>
                        <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${Filter ? "opacity-50 " : "opacity-100"} gap-[10px] md:gap-6`}>
                            {
                                Data.map((items, index) => (
                                    <div key={index} className="flex rounded-[20px] duration-200 hover:scale-95 hover:shadow-lg  items-center border flex-col">
                                        <div className='relative justify-items-center'>
                                            <img className='p-10' src={`src/assets/images/${items.Image}`} alt="" />
                                            <img src={`src/assets/svg/${items.Color}`} alt="ColorDots" />
                                            <p className="absolute top-5 left-5 bg-[#ED6C02] px-[6.5px] rounded-[64px] text-white text-xs leading-5 tracking-[0.14px]">{items.Discount}</p>
                                        </div>
                                        <div className="flex flex-col px-[15px] py-[14px] sm:p-5 gap-[10px]">
                                            <h4 className="SameText">{items.Name}</h4>
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
            </div>

        </>
    )
}

export default DealsProduct
