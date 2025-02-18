import React, { useState } from 'react'
import Password from "../assets/Images/NewPassword.png";
import Buttons from '../Component/ui/Buttons';

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div className="pt-[60px] pb-20">
        <div className="container">
          <div className="flex gap-6 items-center">
            <div className="flex max-w-[662px] w-full flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h3 className='Head'>Enter New Password</h3>
                <p className="SameText">New Password Must Be Different From Previous Used Password.</p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-[3px]">
                  <input className='border rounded-[30px] outline-none px-5 py-4 text-gray-graydark' type="password" id='password' placeholder='Password' />
                  <p className=" pl-[14px] text-xs leading-[166%] tracking-[0.4px] font-inter_regular text-gray-graydark ">Password Must Be 8 Characters</p>
                </div>
                <div className="relative w-full">
                  <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm password"
                    className="border rounded-[30px] w-full outline-none px-5 py-4 text-gray-graydark" />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "🙈" : "👁️"}</span>
                </div>
              </div>
              <Buttons variant={"Hard"} childname={"Change Password"} classname={""} />
            </div>
            <div className="p-[50px] bg-[#FAFAFA] rounded-[20px] hidden md:block">
              <img src={Password} alt="NewPassword" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewPassword
