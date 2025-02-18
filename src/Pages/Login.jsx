import React, { useState } from 'react'
import LogIn from "../assets/Images/Login.png";
import { Link } from 'react-router-dom';
import Buttons from '../Component/ui/Buttons';

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [onClick, setonClick] = useState(false);
  return (
    <>
      <div className="pt-[60px] pb-20">
        <div className="container">
          <div className="flex gap-6">
            <div className="flex flex-col max-w-[662px] w-full gap-5 sm:gap-10">
              <div className="flex max-w-[662px] w-full gap-[10px]">
                <h4 className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-purple-Purple_dark border-b-2 border-purple-Purple_dark hover:cursor-pointer">Log in </h4>
                <Link to={"/regester"} >
                  <button className="text-sm leading-[171%] tracking-[0.4px] font-inter_Medium text-gray-graydark hover:cursor-pointer">Register</button>
                </Link>
              </div>
              <div className="flex flex-col w-full gap-5">
                <h5 className='Head sm:pt-[71px] pt-[42px]'>Log in to Buynow</h5>
                <input className='border rounded-[30px] outline-none px-5 py-4 text-gray-graydark' type="mobile" id='phone' placeholder='Email/Phone no.' />
                <div className="relative w-full">
                  <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Confirm password"
                    className="border rounded-[30px] w-full outline-none px-5 py-4 text-gray-graydark" />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "🙈" : "👁️"}</span>
                </div>
                <div className="sm:flex text-end gap-[10px] items-center justify-between">
                  <div className="flex items-center">
                    <input className='m-[9px]' type="checkbox" id='checkbox' />
                    <p className='SameText'>By continuing, you agree to <span className='text-purple-Purple_light'>Buynow </span> policy</p>
                  </div>
                  <Link to={"/forget"}>
                    <p className="Copytext">Forgot?</p>
                  </Link>
                </div>
                <Buttons variant={"Hard"} childname={"LOG IN"} href={"regestered"} />
              </div>
              <div className="flex justify-center ">
                <p className="">or</p>
              </div>
              <div className="flex gap-5">
                <div className="max-w-[321px] w-full">
                  <Buttons variant={"smart"} classname={"justify-center flex text-purple-Purple_dark"} childname={"GOOGLE"} image={"src/assets/svg/Google.svg"} />
                </div>
                <div className="max-w-[321px] w-full">
                  <Buttons variant={"smart"} classname={"justify-center flex text-purple-Purple_dark"} childname={"FACEBOOK"} image={"src/assets/svg/facebook.svg"} />
                </div>

              </div>
            </div>
            <div className="p-[50px] bg-[#FAFAFA] rounded-[20px] hidden md:block">
              <img src={LogIn} alt="images" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
