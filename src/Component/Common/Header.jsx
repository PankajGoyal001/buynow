import React, { useState } from "react";
import data from "../../json/menulinks.json";
import logo from "../../assets/Images/Logo.png";
import flag from "../../assets/svg/india.svg";
import array from "../../assets/svg/array_down.svg";
import badge from "../../assets/svg/badge.svg";
import contact from "../../assets/svg/Contact.svg";
import navbar from "../../assets/svg/IconButton.svg";
import { Link } from "react-router-dom";
import Popus from "../ui/Popus";


function Header() {
  const [rotate, setRotate] = useState(false);
  const [Show, setShow] = useState(false);
  const [Show1, setShow1] = useState(false);
  const [Look, setLook] = useState(false);
  const [Look1, setLook1] = useState(false);


  return (
    <header >
      <div className="w-full border-b bg-black py-3 ">
        <div className="container">
          <div className="flex justify-between items-   ">
            <div className="flex gap-2 items-center">
              <img className="hidden sm:block" src="src/assets/svg/scooty.svg" alt="scooty" />
              <p className="text-xs leading-5  sm:text-sm text-gray-graylight font-heebo opacity-90 ">Free delivery on $100.00</p>
            </div>
            <div className="flex text-gray-graylight gap-[10px]  ">
              <Link to={"/help"}>
              <p className=" text-xs leading-5  opacity-90  font-normal sm:text-sm">Help center</p>
              </Link>
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
            <Link to={"/"}>
            <img src={logo} alt="logo" />
            </Link>
            <ul className="md:flex hidden text-gray-graydark max-w-[380px] w-full gap-4 lg:gap-8 ">
              {
                data?.map((items, index) => (
                  <Link to={`${items.href}`} key={'header' + index} >
                    <button onMouseOver={() => setShow(index)} onMouseLeave={() => setShow()}>
                      <li className="list-none hover:border-b border-gray-graylight hover:text-red-600 cursor-pointer ">
                        {items?.name}
                      </li>
                    </button>
                  </Link>
                ))}
            </ul>
            {Show === 1 && <Popus DealsPopus={"Solid"} className={"fixed top-[120px] duration-1000 ease-in-out left-[250px] transition-all "} />}
            {Show === 2 && <Popus HotOfferPopus={"Solid"} className={"fixed top-[120px] duration-1000 ease-in-out left-[250px] transition-all"} />}
            {Show === 3 && <Popus Pages={"Solid"} className={"fixed top-[120px] duration-1000 ease-in-out left-[250px] transition-all"} />}
          </div>

          <div className="flex items-center gap-[15px] lg:gap-[30px] sm:py-[15px]  py-[10px]">
            <div className="lg:border  items-center  rounded-[30px] flex gap-2 ">
              <img className="sm:pl-3" src="src/assets/svg/Search.svg" alt="search" />
              <div className="lg:flex hidden group">
                <input className="w-36 outline-none" type="text" id="search" placeholder="Search" />
                <button onClick={() => setRotate(!rotate)} className="flex gap-[6px] px-4 py-[6px] bg-[#422659] items-center text-white rounded-[30px]" >  ALL
                  <img className={`transition-all duration-200 ${rotate && "rotate-180"} opacity-20  group-hover:opacity-100`} src="src/assets/svg/down.svg" alt="arrow" />
                </button>
                {
                  rotate && (<>
                  <Popus CatagoeyPopus={"Solid"} className={"top-28  absolute"}/>
                  </>)
                }
              </div>
            </div>
            <div className=" gap-[10px] flex sm:gap-5 items-center">
              <button onClick={() => setLook1(!Look1)} className="hidden cursor-pointer relative lg:flex">
                <img className="" src={flag} alt="india" />
                <img src={array} alt="down-array" />
              </button>
              {
                Look1 && (<>
                <Popus ShortBY={"Solid"} className={"absolute top-28 right-[300px]"} />
                </>)
              }
              <span className="w-[1px] h-5 border-r hidden lg:block rounded-[6px] opacity-90"></span>
              <button onClick={() => setShow1(!Show1)} className="flex">
                <img src="src/assets/svg/shop.svg" alt="shop" />
                <img src={badge} alt="badge" />
              </button>
              { Show1 && (<>
                <Popus Cart={"Solid"} className={"top-28 right-40 absolute"}/>
              </>)
              }
              <span className="w-[1px] h-5 border-r lg:block hidden rounded-[6px] opacity-90"></span>
              <Link to={"/contact"}>
                <img className=" border rounded-[30px] p-[10px] hidden md:block hover:bg-[#422659] " src={contact} alt="Contact" />
              </Link>
              <button onClick={() => setLook(!Look)}  >
                <img className=" md:hidden relative" src={navbar} alt="navbar" />
              </button>
              {
                Look && (<>
                <Popus SideMenu={"Solid"} className={"absolute top-12 left-0"} />
                </>)
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
