import React from 'react'
import arrowRight from "../../assets/svg/ArrowRight.svg";
import GlobalMap from "../../assets/Images/GlobalMap.png";


const ContactPage = () => {
  return (
    <>
      <div className="container py-5 sm:py-20">
        <div className="flex flex-col gap-5 sm:gap-10">
          <div className="flex flex-col gap-[10px]">
            <h1 className='sm:text-[34px] leading-[42px] tracking-wide text-2xl text-gray-graystrong font-heebo_Medium'>Get In Touch!</h1>
          <div className="sm:flex items-center pb-5 border-b hidden border-[#42265914]">
            <p className="text-gray-graydark text-base tracking-[0.15px] font-inter_regular">Home</p>
            <img className='' src={arrowRight} alt="arrow" />
            <p className="text-base tracking-[0.15px] font-inter_regular text-gray-graystrong ">Contact us</p>
          </div>
          </div>
          <div className="md:flex grid gap-5 sm:gap-6">
            <div className="flex flex-col gap-[10px] sm:gap-5">
              <h2 className='font-heebo_Medium text-xl leading-8 tracking-[0.15px] text-gray-graystrong'>Contact Us</h2>
              <input className='W-[500px] outline-none border py-4 px-5 rounded-[30px] text-gray-graydark lg:w-[662px] text-base tracking-[0.15px] font-inter_regular' type="Name" id='name' placeholder='Name'/>
              <input className='W-[500px] outline-none border py-4 px-5 rounded-[30px] text-gray-graydark lg:w-[662px] text-base tracking-[0.15px] font-inter_regular' type="phone" id='Email' placeholder='Email/Phone no.'/>
              <input className='W-[500px] outline-none border py-4 px-5 rounded-[30px] text-gray-graydark lg:w-[662px] text-base tracking-[0.15px] font-inter_regular' type="Name" id='name' placeholder='Name'/>
              <input className='W-[500px] outline-none border py-4 px-5 rounded-[30px] text-gray-graydark lg:w-[662px] text-base tracking-[0.15px] font-inter_regular pb-12' type="comment" id='comment' placeholder='Comment'/>
              <div className="flex gap-[9px]">
              <input type="checkbox" id='continue' />
              <p className="text-gray-graydark font-inter_regular sm:text-base text-sm tracking-[0.17px] sm:tracking-[0.15px] py-[9px]">By continuing, you agree to Buynow policy</p>
              </div>
              <button className='font-inter_Medium text-[15px] leading-[26px] sm:max-w-[166px] w-full bg-purple-Purple_dark text-white rounded-[30px] py-2 px-[22px] tracking-[0.46px]'>SEND MESSAGE</button>
            </div>
            <img className='rounded-[20px] w-full max-w-[446px]' src={GlobalMap} alt="GlobalMap" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
