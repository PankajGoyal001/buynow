import React from "react";
import data from "../../json/menulinks.json";
import logo from "../../assets/Images/Logo.png";
import flag from "../../assets/svg/india.svg";
// import array from "../../assets/svg/array_down";
import badge from "../../assets/svg/badge.svg";
import contact from "../../assets/svg/Contact.svg";

function Header() {
  return (
    <header className="border-b">
      <div className="w-full bg-black py-3 ">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <img src="src/assets/svg/scooty.svg" alt="scooty" />
              <p className="text-sm text-gray-Silver font-heebo opacity-90 ">
                Free delivery on $100.00
              </p>
            </div>
            <div className="flex text-gray-Silver gap-[10px]  ">
              <p className="opacity-90  font-normal text-sm">Help center</p>
              <span className="h-6 border-r rounded-[5px] opacity-90 border-[#ED5F6014]"></span>
              <p className="opacity-90  font-normal text-sm">Returns policy</p>
              <span className="h-6 border-r rounded-[5px] opacity-90 border-[#ED5F6014]"></span>
              <div className="flex gap-2">
                <p className="opacity-90  font-normal text-sm">Support</p>
                <p className=" opacity-90  font-normal text-sm">
                  (+00) 0123456789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-[30px] ">
            <img src={logo} alt="logo" />
            <ul className="flex justify-center gap-8 ">
              {data?.length &&
                data &&
                data?.map((items, index) => (
                  <li className="list-none " key={Date.now() + index}>
                    {items?.name}
                  </li>
                ))}
            </ul>
          </div>

          <div className="flex items-center gap-[30px] py-[15px] ">
            <div className="border items-center rounded-[30px] flex gap-2 ">
              <img
                className="pl-3"
                src="src/assets/svg/Search.svg"
                alt="search"
              />
              <div className="flex">
                <input
                  className="w-36 outline-none"
                  type="text"
                  id="search"
                  placeholder="Search"
                />
                <div className="flex gap-[6px] px-4 py-[6px] bg-[#7339b9] rounded-[30px]">
                  <p className="text-white text-sm leading-6">ALL</p>
                  <img src="src/assets/svg/down.svg" alt="arrow" />
                </div>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex">
                <img src={flag} alt="india" />
                {/* <img src={array} alt="down-array" /> */}
              </div>
              <span className="w-[1px] h-5 border-r rounded-[6px] opacity-90"></span>
              <div className="flex">
                <img src="src/assets/svg/shop.svg" alt="shop" />
                <img src={badge} alt="badge" />
              </div>
              <span className="w-[1px] h-5 border-r rounded-[6px] opacity-90"></span>
              <div className="border rounded-[30px]">
                <img className="p-[10px]" src={contact} alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
