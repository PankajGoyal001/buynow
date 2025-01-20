import React from "react";
import Letter from "../../assets/svg/newsletter.svg";
import Sender from "../../assets/svg/sender.svg";
import Logo from "../../assets/svg/footer_logo.svg";
import Message from "../../assets/svg/message.svg";
import Location from "../../assets/svg/location.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex justify-between rounded-[20px] px-[50px]  py-10 border">
          <div className="grid gap-5">
            <img className="max-w-16" src={Letter} alt="newletter" />
            <p className="text-slate-slatedark text-[34px] tracking-[0.25px] font-heebo_Medium ">
              {" "}
              Subscribe to our newsletter{" "}
            </p>
            <p className="text-base font-inter_regular text-gray-graydark">
              {" "}
              Get 10% discount{" "}
            </p>
          </div>
          <div className="mt-[154px] max-w-[306px] px-5 border rounded-[30px]  flex gap-2">
            <input
              className="py-[15px] outline-none text-gray-graydark items-end "
              type="email"
              placeholder="Enter your email..."
            />
            <img src={Sender} alt="sender" />
          </div>
        </div>
      </div>

      <div className="bg-black mt-[77px]">
        <div className="container">
          <div className="flex justify-between">
            <div className="flex flex-col gap-[50px] max-w-[421px]">
              <div className="flex flex-col gap-10">
                <div className="flex gap-10">
                  <p className="text-xl font-heebo_Medium leading-8 text-white ">
                    About
                  </p>
                  <img src={Logo} alt="logo" />
                </div>
                <p className="text-[#C4CFD4] font-inter_regular text-sm tracking-[0.17px] leading-5">
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  elit sem tortor dui mattis vulputate fermentum. Turpis nisi,
                  nulla interdum luctus.{" "}
                </p>
              </div>
              <div className="flex text-white max-w-[272px] tracking-[0.17px] flex-col gap-4">
                <div className="flex gap-3">
                  <img src={Message} alt="message" />
                  <p className="text-base font-inter_regular">
                    debra.holt@example.com
                  </p>
                </div>
                <span className="border-b border-white"></span>
                <div className="flex gap-3">
                  <img src={Location} alt="location" />
                  <p className="text-base font-inter_regular">
                    6391 Elgin St. Celina, Delaware 10299
                  </p>
                </div>
              </div>
              <div className="flex flex-col text-white gap-2">
                <p className="font-inter_regular text-sm tracking-[0.17px]">Download the app</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
