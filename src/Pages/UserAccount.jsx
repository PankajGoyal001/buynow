import React from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import AccountData from "../json/Account.json";


const UserAccount = () => {
  return (
    <>
    <div className="sm:pt-20 pt-10">
        <div className="container">
            <div className="flex flex-col gap-5 sm:gap-10">
                <div className="flex flex-col gap-[10px] pb-5 border-b">
                    <h1 className='CommonHead'>My Account</h1>
                    <div className="sm:flex hidden items-center">
                    <Link to={"/"}>
                    <h6 className="SameText">Home</h6>
                  </Link>
                  <img src={arrowRight} alt="arrow" />
                  <h6 className="SameText ">My Accounts</h6>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-[10px] sm:gap-6">
                  {
                    AccountData.map((items,index)=>(
                      <div key={index} className="flex justify-between border rounded-[20px] hover:cursor-pointer max-w-[564px] items-center w-full sm:px-[30px] px-[15px] py-[10px] sm:py-5">
                        <div className="flex gap-[15px] items-center">
                          <img className='sm:max-w-[96px] max-w-[50px] w-full' src={`src/assets/svg/${items.Images}`} alt="images" />
                          <div className="flex flex-col gap-[10px]">
                            <h2 className='Head'>{items.Name}</h2>
                            <p className='Copytext1'>{items.Text}</p>
                          </div>
                        </div>
                        <img src={`src/assets/svg/${items.Arrow}`} alt="arrow" />
                      </div>
                    ))
                  }
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserAccount
