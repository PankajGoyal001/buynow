import React from 'react'
import arrowRight from "../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';
import Buttons from '../Component/ui/Buttons';


const DeliveryAddress = () => {
  return (
    <>
      <div className="sm:py-20 py-10">
        <div className="container">
          <div className="flex flex-col  gap-5 sm:gap-10">
            <div className="flex flex-col pb-[14px] sm:pb-5 border-b gap-[10px]">
              <h1 className="CommonHead">Checkout</h1>
              <div className="sm:flex hidden ">
                <Link to={"/"}>
                  <h3 className="SameText">Home</h3>
                </Link>
                <img src={arrowRight} alt="ArrowRight" />
                <h3 className="SameText">Checkout</h3>
              </div>
            </div>
            <div className="flex flex-col gap-[3px] sm:gap-[13px] p-[15px] sm:p-[30px] pb-[23px] bg-[#FAFAFA] rounded-[20px]">
              <div className="flex justify-between">
                <p className="SameText text-start hover:text-purple-Purple_dark hover:cursor-pointer ">Delivery Address</p>
                <Link to={"/order"}>
                  <p className="SameText text-center hover:text-purple-Purple_dark hover:cursor-pointer sm:text-end">Order Summary</p>
                </Link>
                <Link to={"/payment"}>
                  <p className="SameText text-center hover:text-purple-Purple_dark hover:cursor-pointer sm:text-end">Payment Option</p>
                </Link>
                <Link to={"/complete"}>
                  <p className="SameText  hover:text-purple-Purple_dark hover:cursor-pointer text-end">Complete Order</p>
                </Link>
              </div>
              <div className="flex justify-between ">
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
            <div className="md:flex gap-6 grid items-start">
              <div className="flex flex-col max-w-[760px] w-full gap-[10px] sm:gap-5">
                <h5 className='Copytext'>Delivery Address</h5>
                <div className="grid sm:grid-cols-2 gap-[10px] sm:gap-5">
                  <input className='py-4 px-5 border rounded-[30px] SameText ' type="Name" placeholder='First name' />
                  <input className='py-4 px-5 border rounded-[30px] SameText ' type="phone" placeholder='Mobile number' />
                  <input className='py-4 px-5 border rounded-[30px] SameText ' type="email" placeholder='Email address' />
                  <input className='py-4 px-5 border rounded-[30px] SameText ' type="code" placeholder='PIN code' />
                  <select className='py-4 px-5 border rounded-[30px] SameText ' name="City,state" id="City,state">
                    <option value="">City,state</option>
                    <option value="">ABOHAR</option>
                    <option value="">FAZILKA</option>
                    <option value="">FEROZPUR</option>
                    <option value="">SHRI GANGANAGAR</option>
                    <option value="">LUDHIYANA</option>
                    <option value="">CHANDIGARH</option>
                  </select>
                  <select className='py-4 px-5 border rounded-[30px] SameText ' name="Country" id="Country">
                    <option value="">Country</option>
                    <option value="">AUSTRALIA</option>
                    <option value="">CANADA</option>
                    <option value="">INDIA</option>
                    <option value="">FRANCE</option>
                    <option value="">JAPAN</option>
                    <option value="">PAKISTAN</option>
                  </select>
                </div>
                <input className='py-4 px-5 border rounded-[30px] w-full SameText' type="Address " id='Address' placeholder='Address 1' />
                <input className='py-4 px-5 border rounded-[30px] w-full SameText' type="Address " id='Address' placeholder='Address 2' />
                <div className="flex items-center">
                  <input className='m-[9px]' type="checkbox" id='checkbox' />
                  <p className="Copytext">Business address</p>
                </div>
                <span className='BorderSolid'></span>
                <Buttons variant={"Simple"} classname={"border"} href={"selectdeleviry"} childname={"Save Address"} />
              </div>
              <div className="flex flex-col gap-5 border rounded-[20px] w-full max-w-[368px] p-[30px]">
                <div className="flex flex-col gap-[10px]">
                  <h6 className="Head">Summary</h6>
                  <span className='BorderSolid'></span>
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex justify-between">
                    <p className="Copytext">Subtotal</p>
                    <p className="SameText">$320.00</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="Copytext">Shipping</p>
                    <p className="SameText">Free</p>
                  </div>
                </div>
                <span className='BorderSolid'></span>
                <div className="flex justify-between">
                  <p className="Copytext">2 Item</p>
                  <p className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-purple-Purple_dark">Edit</p>
                </div>
                <span className='BorderSolid'></span>
                <div className="flex items-center justify-between">
                  <p className="Copytext">Total amount</p>
                  <p className="text-2xl font-heebo_Medium text-gray-graystrong">$530.00</p>
                </div>
                <Buttons variant={"Hard"} href={"payment"} childname={"Continue Payment"} classname={"w-full"} />
              </div>
            </div>
            <span className='BorderSolid'></span>
            <div className="flex flex-col gap-5">
              <h6 className='Head'>Important note</h6>
              <p className="SameText">Consectetur adipiscing elit. At praesent volutpat accumsan non adipiscing. Amet, sed in fames nec tincidunt. Neque vel urna facilisis vel nisl non. Lacinia scelerisque in nunc egestas et. Mauris duis sed pharetra, vulputate ut elit blandit donec. Tristique id a integer malesuada imperdiet tincidunt quis cras faucibus. Erat vitae auctor odio interdum magna non.</p>
              <button className="NewText text-end">View Buynow Policy</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeliveryAddress
