import React, { useState } from "react";
import data from "../../json/menulinks.json";
import logo from "../../assets/Images/Logo.png";
import flag from "../../assets/svg/india.svg";
// import array from "../../assets/svg/array_down";
import badge from "../../assets/svg/badge.svg";
import contact from "../../assets/svg/Contact.svg";
import navbar from "../../assets/svg/IconButton.svg";
import { Link } from "react-router-dom";

function Header() {
  const [rotate, setRotate] = useState(false);
  console.log(rotate);

  return (
    <header className="border-b">
      <div className="w-full bg-black py-3 ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img className="hidden sm:block" src="src/assets/svg/scooty.svg" alt="scooty" />
              <p className="text-xs leading-5  sm:text-sm text-gray-graylight font-heebo opacity-90 ">Free delivery on $100.00</p>
            </div>
            <div className="flex text-gray-graylight gap-[10px]  ">
              <p className=" text-xs leading-5  opacity-90  font-normal sm:text-sm">Help center</p>
              <span className="h-6 border-r hidden sm:block rounded-[5px] opacity-90 border-[#ED5F6014]"></span>
              <p className="opacity-90 hidden sm:block  font-normal text-sm"> Returns policy</p>
              <span className="h-6 border-r hidden sm:block rounded-[5px] opacity-90 border-[#ED5F6014]"></span>
              <div className="sm:flex gap-2 hidden">
                <p className="opacity-90  font-normal text-sm">Support</p>
                <p className=" opacity-90  font-normal text-sm">(+00) 0123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[30px] ">
            <img src={logo} alt="logo" />
            <ul className="md:flex  hidden  text-gray-graydark max-w-[380px] w-full  lg:gap-8 ">
              {
                data &&
                data?.map((items, index) => (
                  <Link to={`${items.href}`}   key={'header'+index} > 
                  <li
                    className="list-none hover:border-b border-gray-graylight hover:text-red-600 cursor-pointer "
                  
                  >
                   {items?.name}
                  </li>
                    </Link>
                ))}
            </ul>
          </div>

          <div className="flex items-center  sm:gap-[30px] sm:py-[15px]  py-[10px]">
            <div className="sm:border  items-center  rounded-[30px] flex gap-2 ">
              <img className="sm:pl-3" src="src/assets/svg/Search.svg" alt="search" />
              <div className="sm:flex hidden group">
                <input className="w-36 outline-none" type="text" id="search" placeholder="Search" />
                <button onClick={() => setRotate(!rotate)} className="flex gap-[6px] px-4 py-[6px] bg-[#7339b9] items-center text-white rounded-[30px]" >  ALL
                  <img className={`transition-all duration-200 ${rotate && "rotate-180"} opacity-20  group-hover:opacity-100`} src="src/assets/svg/down.svg" alt="arrow" />
                </button>
              </div>
            </div>
            <div className=" gap-[10px]  flex sm:gap-5 items-center">
              <div className=" sm:flex">
                <img className="hidden lg:block" src={flag} alt="india" />
                {/* <img src={array} alt="down-array" /> */}
              </div>
              <span className="w-[1px] h-5 border-r hidden lg:block rounded-[6px] opacity-90"></span>
              <div className="flex">
                <img src="src/assets/svg/shop.svg" alt="shop" />
                <img src={badge} alt="badge" />
              </div>
              <span className="w-[1px] h-5 border-r lg:block hidden rounded-[6px] opacity-90"></span>
              <img className=" border rounded-[30px] p-[10px] hidden sm:block hover:bg-orange-600 " src={contact} alt="Contact" />
              <img className=" sm:hidden" src={navbar} alt="navbar" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
