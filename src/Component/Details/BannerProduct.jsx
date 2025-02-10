import React, { useState } from 'react'
import arrowRight from "../../assets/svg/ArrowRight.svg";
import WatchDetail from "../../assets/Images/WatchDetail.png";
import Heart from "../../assets/svg/Heart.svg";
import DeliveryDining from "../../assets/svg/DeliveryDining.svg";
import ExitIcon from "../../assets/svg/ExitIcon.svg";
import Rating from "../../assets/svg/Rating_Star.svg";
import Buttons from '../ui/Buttons';
import { Link } from 'react-router-dom';


const BannerProduct = () => {
    const [Click, setClick] = useState(false)
    return (
        <>
            <section>
                <div className="container">
                    <div className="pt-20 pb-10"></div>
                    <div className="flex flex-col gap-10 ">
                        <div className="flex flex-col border-b pb-5 gap-[10px]">
                            <h1 className='CommonHead'>Apple watch</h1>
                            <div className="flex">
                                <Link to={"/"}>
                                <h3 className='SameText'>Home</h3>
                                </Link>
                                <img src={arrowRight} alt="ArrowRight" />
                                <Link to={"/Product"}>
                                <h4 className='SameText'>Products</h4>
                                </Link>
                                <img src={arrowRight} alt="ArrowRight" />
                                <h5 className='SameText '>Products details</h5>
                            </div>
                        </div>
                        <div className="flex gap-6 ">
                            <div className="flex flex-col gap-5">
                                <div className="relative p-[50px] pb-[70px] bg-[#ED5F600A] rounded-[20px]">
                                    <img className='rounded-[20px]' src={WatchDetail} alt="WatchDetail" />
                                    <img className='absolute border-[#495F6A2E] border p-[10px] top-[30px] right-[30px] rounded-full' src={Heart} alt="Heart" />
                                    <div className="flex gap-2 bottom-5 absolute">
                                        <img src={DeliveryDining} alt="DeliveryDining" />
                                        <p className="SameText">Free delivered</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px]">
                                    {["ProductWatch1.png", "ProductWatch2.png", "ProductWatch3.png", "ProductWatch4.png"].map((items, index) => (
                                        <div key={index} className="p-[7px] rounded-[10px] border-[#42265980] hover:border">
                                            <img src={`src/assets/Images/${items}`} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-[30px] max-w-[564px] w-full">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col max-w-[466px] w-full gap-[10px]">
                                        <h4 className='text-2xl font-heebo_Medium text-gray-graystrong'>Apple watch SE </h4>
                                        <p className="text-base font-inter_regular tracking-[0.15px] text-gray-graystrongr">Price: $600.00 <span className='SameText'>- Silver Aluminium Case with Abyss Blue Sport Band - Regular</span></p>
                                    </div>
                                    <img src={ExitIcon} alt="ExitIcon" />
                                </div>
                                <span className='border-b border-[#42265914]'></span>
                                <div className="flex gap-[10px] flex-col">
                                    <h6 className="SameText">Color</h6>
                                    <div className="flex gap-[30px]">
                                        {["#FFB400", "#DCE775", "#81C784", "#4FC3F7"].map((items, index) => (
                                            <button key={index} onClick={() => setClick(!Click)} style={{ backgroundColor: items }} className="max-w-10 w-full rounded-full h-10 "></button>
                                        ))}
                                    </div>
                                </div>
                                <span className='border-b border-[#42265914]'></span>
                                <div className="flex flex-col gap-[10px]">
                                    <h6 className='SameText'>Size</h6>
                                    <div className="flex gap-[10px]">
                                        <div className="flex rounded-[10px] border-[#42265914] border w-full max-w-[277px] px-5 py-[10px] flex-col">
                                            <p className="text-xl leading-8 tracking-[0.15px] text-gray-graystrong font-heebo_Medium">41mm</p>
                                            <p className="text-sm tracking-[0.17px] font-inter_regular text-gray-graydark">Fits 130-200mm wrists.</p>
                                        </div>
                                        <div className="flex rounded-[10px] border-[#42265914] border w-full max-w-[277px] px-5 py-[10px] flex-col">
                                            <p className="text-xl leading-8 tracking-[0.15px] text-gray-graystrong font-heebo_Medium">45mm</p>
                                            <p className="text-sm tracking-[0.17px] font-inter_regular text-gray-graydark">Fits 140-200mm wrists.</p>
                                        </div>
                                    </div>
                                </div>
                                <span className='border-b border-[#42265914]'></span>
                                <div className="flex flex-col gap-[10px]">
                                    <h6 className='SameText'>Style name</h6>
                                    <div className="flex justify-between ">
                                        <div className="flex max-w-[277px] w-full gap-[11px]">
                                            <input type="radio" id="html" name="fav_language" value="HTML"></input>
                                            <label className='SameText'>GPS</label>
                                        </div>
                                        <div className="flex max-w-[277px] w-full gap-[11px]">
                                            <input type="radio" id="html" name="fav_language" value="HTML"></input>
                                            <label className='SameText'>GPS + Cellular</label>
                                        </div>
                                    </div>
                                </div>
                                <span className='border-b border-[#42265914]'></span>
                                <div className="flex flex-col gap-[10px]">
                                    <div className="flex border-[#42265914] border rounded-[10px] px-5 py-[10px] justify-between">
                                        <div className="flex flex-col gap-[5px]">
                                            <h4 className='text-[34px] leading-[123%] tracking-wide font-heebo_Medium text-gray-graystrong'>$320.00</h4>
                                            <p className="text-sm tracking-[0.17px] text-gray-graydark font-inter_regular">Inclusive of all taxes</p>
                                        </div>
                                        <div className="flex justify-center items-end flex-col gap-1">
                                            <p className="text-sm leading-[166%] tracking-[0.4px]">4.5</p>
                                            <img src={Rating} alt="Rating" />
                                        </div>
                                    </div>
                                    <div className="flex gap-[10px]">
                                        <p className="SameText">10-day replacement only</p>
                                        <p className="text-base tracking-[0.15px] font-inter_regular text-gray-graystrong">Read more</p>
                                    </div>
                                </div>
                                <div className="flex gap-[10px] ">
                                    <div className="max-w-[277px] w-full">
                                    <Buttons variant={"Simple"} childname={"Add to cart"} classname={'border-[#42265980] w-full border'} />
                                    </div>
                                    <div className="max-w-[277px] w-full">
                                    <Buttons variant={"Hard"} childname={"Buy Now"} classname={'text-white w-full'} />
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

export default BannerProduct
