import React from 'react'
import Star from "../../assets/svg/Star.svg";
import CustmerData from "../../json/Custmer.json";
import CustmerImg from "../../assets/Images/CustmerImg.png";
import DetailsData from "../../json/CustmerDetails.json";
import { Link } from 'react-router-dom';
import Buttons from '../ui/Buttons';

const Custmer = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="py-10 border-t">
                        <div className="flex flex-col gap-5">
                            <h2 className='Head'>Customer Reviews</h2>
                            <div className="md:flex grid sm:gap-10 gap-5">
                                <div className="flex flex-col sm:gap-10 gap-[10px]">
                                    <div className="flex flex-col border sm:p-[30px] p-5  rounded-[20px] gap-5">
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
                                                    <div key={index} className="flex items-center">
                                                        <div className="flex gap-[6px]">
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
                                <div className="flex flex-col max-w-[702px] w-full gap-5">
                                    {
                                        DetailsData.map((items, index) => (
                                            <div key={index} className="flex sm:p-5 p-[15px] border rounded-[20px]  flex-col gap-[10px]">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img src={`src/assets/svg/${items.Images}`} alt="images" />
                                                        <div className="flex flex-col ">
                                                            <h3 className='Copytext'>{items.Head}</h3>
                                                            <p className="text-sm tracking-[0.17px] font-inter_regular text-gray-graydark">{items.Time}</p>
                                                        </div>
                                                    </div>
                                                    <img src={`src/assets/svg/${items.Rating}`} alt="RatingStar" />
                                                </div>
                                                <p className="sm:SameText text-xs leading-[166%] text-gray-graydark tracking-[0.4px] ">{items.Text}</p>
                                                <span className='BorderSolid'></span>
                                                <Link to={"/help"} className='flex justify-center'>
                                                    <button className='border border-[#42265980] px-[10px] py-1 rounded-[30px]'>
                                                        <p className="text-[13px] leading-[170%] tracking-[0.46px] font-inter_Medium  text-purple-Purple_dark">{items.Button}</p>
                                                    </button>
                                                </Link>
                                            </div>
                                        ))
                                    }
                                    <div className="flex  justify-center md:justify-start  ">
                                    <Buttons variant={"Hard"} childname={"See All Reviews"} classname={"text-[15px] leading-[173%] tracking-[0.46px] font-inter_Medium "} />
                                    </div>
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
