import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from "../assets/svg/ArrowRight.svg";
import HeroImg from "../assets/svg/HeroImg.svg";


const Profile = () => {
    return (
        <>
            <div className="container">
                <div className="sm:pt-20 pt-10">
                    <div className="flex flex-col gap-5 sm:gap-10">
                        <div className="flex flex-col gap-[10px] pb-5 border-b">
                            <h1 className='CommonHead'>My Account</h1>
                            <div className="sm:flex hidden items-center">
                                <Link to={"/"}>
                                    <h6 className="SameText">Home</h6>
                                </Link>
                                <img src={arrowRight} alt="arrow" />
                                <Link to={"/useraccount"}>
                                    <h6 className="SameText ">My Accounts</h6>
                                </Link>
                                <img src={arrowRight} alt="arrow" />
                                <h6 className="Copytext ">Profile</h6>
                            </div>
                        </div>
                        <div className="flex gap-[60px] border rounded-[20px] bg-[#4226590A] items-center">
                            <div className="flex gap-[15px] items-center">
                                <img src={HeroImg} alt="HeroImg" />
                                <div className="flex flex-col gap-[10px]">
                                    <h2>Tiana Baptista</h2>
                                    <p className="Copytext1">tim.jennings@example.com</p>
                                </div>
                            </div>
                            <span className='border-r h-20 rounded-[5px]'></span>
                            <input type="file" id='image' /> 
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                            <h3 className='Head'>Personal information</h3>
                            <p className="">Edit</p>
                            </div>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                <input className='border py-4 px-5 outline-none rounded-[30px] SameText' type="fname" id='fname' placeholder='Full name' />
                                <input className='border py-4 px-5 outline-none rounded-[30px] SameText' type="lname" id='lname' placeholder='Last name' />
                                <input className='border py-4 px-5 outline-none rounded-[30px] SameText' type="email" id='email' placeholder='Email address' />
                                <input className='border py-4 px-5 outline-none rounded-[30px] SameText' type="mobile" id='mobile' placeholder='Mobile no.' />
                                <input className='border py-4 px-5 outline-none rounded-[30px] SameText' type="address" id='address' placeholder='Address' />
                                <input className='border py-4 px-5 outline-none rounded-[30px] SameText' type="addres2" id='addres2' placeholder='Second address' />
                                <select  className='border py-4 px-5 outline-none rounded-[30px] SameText' name="State" id="State">
                                    <option value="state">State</option>
                                    <option value="">Punjab</option>
                                    <option value="">Chandigarh</option>
                                    <option value="">Andhra Pradesh</option>
                                    <option value="">Rajasthan</option>
                                    <option value="">Delhi</option>
                                </select>
                                <select  className='border py-4 px-5 outline-none rounded-[30px] SameText' name="Gender" id="Gender">
                                    <option value="Gender">Gender</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value=""> transgender</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
