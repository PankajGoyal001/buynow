import React from 'react'
import AppleIcon from "../../assets/svg/AppleIcon.svg";

const Information = () => {
    return (
        <>
            <section>
                <div className="py-10 border-solid">
                    <div className="container">
                        <div className="flex flex-col gap-5">
                            <h2 className='text-xl leading-8 tracking-[0.15px] font-heebo_Medium text-gray-graystrong'>Product Information</h2>
                            <div className="flex flex-col gap-5 p-[50px] border border-[#42265914] rounded-[20px]">
                                <div className="flex justify-between ">
                                    <p className="Copytext">Brand</p>
                                    <div className="flex max-w-[350px] w-full gap-[10px]">
                                        <img src={AppleIcon} alt="AppleIcon" />
                                        <p className="SameText">Apple</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Color</p>
                                    <div className=" max-w-[350px] w-full ">
                                        <p className="SameText">Yellow </p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Special feature</p>
                                    <div className=" max-w-[350px] w-full ">
                                        <p className="SameText">Email, GPS, Notifications</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Item weight</p>
                                    <div className=" max-w-[350px] w-full ">
                                        <p className="SameText">30 Grams</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Compatible Devices</p>
                                    <div className=" max-w-[350px] w-full ">
                                        <p className="SameText">Smartphone</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Style</p>
                                    <div className=" max-w-[350px] w-full">
                                        <p className="SameText">GPS + Cellular</p>
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

export default Information
