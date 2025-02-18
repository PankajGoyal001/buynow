import React from 'react'
import Verify from "../assets/Images/Verify.png";
import Buttons from '../Component/ui/Buttons';


const RegesterOTP = () => {
  return (
    <>
      <div className="pt-[60px] pb-20">
        <div className="container">
          <div className="flex items-center gap-6">
            <div className="flex flex-col max-w-[662px] w-full gap-10">
              <div className="flex flex-col gap-5">
                <p className="Head">Please Check your Email! <span className='SameText'>(Register OTP) </span></p>
                <p className="SameText">Please check your email, 6-digit confirmation code to Tim.@example, please enter the confirmation code to verify your email.</p>
              </div>
              <div className="flex border rounded-[20px] justify-center sm:py-5 py-[10px] sm:gap-[30px] gap-[11px]">
                {["1", "3", "5", "7", "0", "1"].map((items, index) => (
                  <div key={index} className="sm:px-6 px-4 py-2 sm:py-4 border rounded-full"><p className="SameText">{items}</p></div>
                ))}
              </div>
              <div className="sm:flex grid items-center gap-[10px] w-full sm:gap-6">
                <Buttons variant={"Hard"} childname={"Verify"} href={"NewPassword"} classname={"w-full"} />
                <div className="flex justify-center sm:justify-start gap-[10px]">
                  <p className="SameText">Don’t have a code? </p>
                  <p className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-purple-Purple_dark">Resend Code</p>
                </div>
              </div>
            </div>
            <div className="p-[50px] bg-[#FAFAFA] md:block hidden rounded-[20px]">
              <img src={Verify} alt="Verify" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegesterOTP
