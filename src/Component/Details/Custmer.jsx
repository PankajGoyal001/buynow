import React from 'react'
import Star from "../../assets/svg/Star.svg";
import CustmerData from "../../json/Custmer.json";
import CustmerImg from "../../assets/Images/CustmerImg.png";

const Custmer = () => {
    return (
        <>
            <section>
                <div className="">
                    <div className="container">
                        <div className="flex flex-col gap-5">
                            <h2 className='text-xl leading-8 tracking-[0.15px] font-heebo_Medium text-gray-graystrong'>Customer Reviews</h2>
                            <div className="flex gap-10">
                                <div className="flex flex-col gap-10">
                                    <div className="flex flex-col border p-[30px]  rounded-[20px] gap-5">
                                        <div className=" max-w-[308px] w-full flex justify-between ">
                                            <p className="Copytext">Rating</p>
                                            <div className="flex gap-1">
                                                <p className="Copytext">4.8 Out of 5</p>
                                                <img src={Star} alt="Star" />
                                            </div>
                                        </div>
                                        <span className='BorderSolid'></span>
                                        <div className="flex flex-col gap-[10px]">
                                            {
                                                CustmerData.map((items, index) => (
                                                    <div className="flex items-center">
                                                        <div key={index} className="flex gap-[6px]">
                                                            <img src={`src/assets/svg/${items.Images}`} alt="images" />
                                                        </div>
                                                        <p className="">{items.Rate}</p>
                                                        <img className='pl-[6px] pr-2' src={`src/assets/svg/${items.Range}`} alt="range" />
                                                        <p className="text-sm tracking-[0.17px] font-inter_regular text-gray-graydark">{items.Rating}</p>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="p-5 bg-[#4226590A] rounded-[20px]">
                                        <img src={CustmerImg} alt="CustmerImg" />
                                    </div>
                                </div>
                                <span className='border-l-2 border-[#42265914] rounded-[5px]'></span>
                                <div className="flex flex-col gap-5">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Custmer
