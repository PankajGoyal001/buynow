import React from 'react'
import AppleIcon from "../../assets/svg/AppleIcon.svg";

const Information = () => {
    return (
        <>
            <section>
                <div className="py-10 border-solid">
                    <div className="container">
                        <div className="flex flex-col sm:gap-5 gap-[14px]">
                            <h2 className='Head'>Product Information</h2>
                            <div className="flex flex-col sm:gap-5 gap-[14px] sm:p-[50px] p-5 border border-[#42265914] rounded-[20px]">
                                <div className="flex justify-between ">
                                    <p className="Copytext">Brand</p>
                                    <div className="flex sm:max-w-[350px] max-w-[142px] w-full gap-[10px]">
                                        <img src={AppleIcon} alt="AppleIcon" />
                                        <p className="SameText">Apple</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Color</p>
                                    <div className="sm:max-w-[350px] max-w-[142px] w-full ">
                                        <p className="SameText">Yellow </p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Special feature</p>
                                    <div className=" sm:max-w-[350px] max-w-[142px]  w-full ">
                                        <p className="SameText">Email, GPS, Notifications</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Item weight</p>
                                    <div className=" sm:max-w-[350px] max-w-[142px]  w-full ">
                                        <p className="SameText">30 Grams</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Compatible Devices</p>
                                    <div className=" sm:max-w-[350px] max-w-[142px]  w-full ">
                                        <p className="SameText">Smartphone</p>
                                    </div>
                                </div>
                                <span className='BorderSolid' ></span>
                                <div className="flex justify-between ">
                                    <p className="Copytext">Style</p>
                                    <div className=" sm:max-w-[350px] max-w-[142px] w-full">
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
