import React, { useState } from 'react'
import arrowRight from "../../assets/svg/ArrowRight.svg";
import HelpImage from "../../assets/Images/HelpImage.png";
import HelpImage2 from "../../assets/Images/HelpImage2.png";
import ArrowUp from "../../assets/svg/ArrowUp.svg";



const HelpCenter = () => {
    const [rotate, setRotate] = useState(false);

    return (
        <>
            <div className="container py-10 sm:py-20">
                <div className="flex flex-col gap-5 sm:gap-10">
                    <div className="sm:flex items-end grid gap-5 w-full pb-5 border-b justify-between">
                        <div className="flex flex-col gap-[10px]">
                            <h1 className='CommonHead'>Help Center</h1>
                            <div className="sm:flex items-center hidden border-[#42265914]">
                                <p className="text-gray-graydark text-base tracking-[0.15px] font-inter_regular">Home</p>
                                <img className='' src={arrowRight} alt="arrow" />
                                <p className="text-base tracking-[0.15px] font-inter_regular text-gray-graystrong ">Help Center</p>
                            </div>
                        </div>
                        <div className="flex gap-2 h-[56px] max-w-[368px] py-[7px] sm:py-[15px] border rounded-[30px] w-full">
                            <img className="pl-5" src="src/assets/svg/Search.svg" alt="search" />
                            <input className=" w-full outline-none text-gray-graydark" type="text" id="search" placeholder="Search" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex sm:justify-center justify-start border-b [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']  overflow-scroll gap-[10px]">
                            {["ORDERS", "BILLING", "RETURNS", "CAREERS", "OTHERS"]?.map((items, index) => (
                                <p className="px-2 py-3 border-purple-Purple_dark hover:border-b-2 hover:text-purple-Purple_dark text-gray-graydark font-inter_Medium text-sm leading-6 tracking-[0.4px]" key={index}>{items}</p>
                            ))}
                        </div>
                        <img className='rounded-[20px] hidden sm:block' src={HelpImage} alt="helpimage" />
                        <img className='sm:hidden' src={HelpImage2} alt="" />

                    </div>
                    <div className="flex flex-col gap-5 p-[15px]  sm:p-[50px] border rounded-[20px]">
                            <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium text-left" > Sed Eu, Fames At Accumsan Vitae In Tristique Turpis.</p>
                                <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                            </button>
                            {
                                rotate && (<>
                                    <p className="text-gray-graydark text-left px-4 pt-2 pb-4">Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>
                                </>)
                            }
                            <span className='border-b'></span>
                            <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" > Eget gravida sapien, volutpat blandit ut sem.</p>
                                <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                            </button>
                            <span className='border-b'></span>
                            <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" > Sed dui dolor commodo auctor tristique.</p>
                                <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                            </button>
                            <span className='border-b'></span>
                            <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" > Ac iaculis turpis maecenas tellus.</p>
                                <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                            </button>
                            <span className='border-b'></span>
                            <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" >Dignissim tortor vitae massa vel, id amet.</p>
                                <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                            </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HelpCenter
