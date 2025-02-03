import React from 'react'
import CompanyPartner from "../../json/Partners.json";
import { Link } from 'react-router-dom';

const Partner = () => {
    return (
        <>
            <div className="container">
                <div className=" md:py-10 py-[25px]">
                    <div className="flex flex-col items-center gap-5 md:gap-10">
                        <h2 className='text-gray-graydark font-heebo_Medium text-xl leading-[123.5%] tracking-[0.15px]'>Our Partners </h2>
                        <div className="lg:flex grid grid-cols-3 md:grid-cols-4  gap-[10px] md:gap-6 ">
                            {
                                CompanyPartner.map((items, index) => (
                                    <img key={index} className='md:px-[30px] px-[10px] rounded-[10px] md:py-[10px] py-[8px] hover:cursor-pointer hover:bg-[#4226590A]' src={`/src/assets/images/${items.Images}`} alt="company" />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner;
