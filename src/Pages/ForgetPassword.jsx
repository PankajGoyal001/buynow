import React from 'react'
import { Link } from 'react-router-dom'
import Forget from "../assets/Images/Forget.png";
import Buttons from '../Component/ui/Buttons';
const ForgetPassword = () => {
  return (
    <>
      <div className="pt-[60px] pb-20">
        <div className="container">
          <div className="flex items-center gap-6">
            <div className="flex max-w-[662px] w-full flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h3 className='Head'>Reset Your Password</h3>
                <p className="SameText">Please enter your email or phone no with associated your account, we sent one time password to your (Email or phone).</p>
              </div>
              <input className='border rounded-[30px] outline-none px-5 py-4 text-gray-graydark' type="mobile" id='phone' placeholder='Email/Phone no.' />
              <div className="flex items-center gap-6">
                <Buttons variant={"Hard"} childname={"Continue"} href={"regestered"} />
                <div className="flex gap-[10px]">
                  <p className="SameText">Back to</p>
                  <Link to={"/regester"}>
                    <p className="text-base tracking-[0.15px] font-inter_regular text-purple-Purple_dark">Register</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="p-[50px] bg-[#FAFAFA] rounded-[20px] hidden md:block">
              <img src={Forget} alt="forget" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgetPassword
