import React from "react";
import footerdata from "../../json/footer.json";
import Letter from "../../assets/svg/newsletter.svg";
import Sender from "../../assets/svg/sender.svg";
import Logo from "../../assets/svg/footer_logo.svg";
import Message from "../../assets/svg/message.svg";
import Location from "../../assets/svg/location.svg";
import Apple from "../../assets/svg/applelogo.svg";
import Playstore from "../../assets/svg/GooglePlaylogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between max-w-[1152px] w-full relative m-auto bg-white mt-20 mb-[-150px] z-1 rounded-[20px] px-[50px]  py-10 border">
        <div className="grid gap-5">
          <img className="max-w-16" src={Letter} alt="newletter" />
          <p className="font-heebo_Medium text-[34px] ">
            Subscribe to our newsletter
          </p>
          <p className="text-base font-inter_regular text-gray-graydark">
            Get 10% discount
          </p>
        </div>
        <div className="mt-[154px] max-w-[346px] w-full px-5 border rounded-[30px]  flex gap-2">
          <input
            className="py-[15px] outline-none w-[274px] text-gray-graydark items-end "
            type="email"
            placeholder="Enter your email..."
          />
          <img src={Sender} alt="sender" />
        </div>
      </div>

      <div className="bg-black pt-[150px]">
        <div className="container mt-20">
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
              <div className="flex flex-col max-w-[350px] font-heebo_Medium w-full text-white gap-2">
                <p className="font-inter_regular text-sm tracking-[0.17px]">
                  Download the app
                </p>
                <div className="flex gap-3">
                  <div className="flex gap-2 border-[#E1E1FE] border px-[15px] py-[13px] rounded-[10px] w-full  ">
                    <img src={Apple} alt="apple-icon" />
                    <div className="flex flex-col gap-[3px]">
                      <p className="text-sm text-nowrap">Download on the</p>
                      <p className="">App Store</p>
                    </div>
                  </div>
                  <div className="flex gap-2 border-[#E1E1FE] border px-[15px] py-[13px] rounded-[10px] w-full  ">
                    <img src={Playstore} alt="playstore-icon" />
                    <div className="flex flex-col gap-[3px]">
                      <p className="text-sm text-nowrap">Get it on</p>
                      <p className="">Google Play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-10 bg-[#693E8E14] rounded-[20px] py-10 px-5 max-w-[564px] w-full">
              <div className="flex justify-between tracking-[0.15px]">
                {footerdata.map((items, index) => (
                  <div className="flex flex-col gap-10">
                    <p className="text-white font-heebo_Medium text-xl leading-8 ">
                      {items.head}{" "}
                    </p>
                    <ul className="flex text-gray-graylight text-base font-inter_regular  flex-col gap-5">
                      <li>{items.text}</li>
                      <li>{items.text1}</li>
                      <li>{items.text2}</li>
                      <li>{items.text3}</li>
                      <li>{items.text4}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <span className="border-b rounded-[5px] border-[#ABB5BA]"></span>
              <div className="flex justify-between">
                <p className="text-white text-sm tracking-[0.17px] font-inter_regular">
                  © 2021. All rights reserved
                </p>
                <div className="flex gap-6 text-gray-graylight text-sm leading-[23px]">
                  <p>Help Center</p>
                  <p>Terms of Service</p>
                </div>
              </div>
              <span className="border-b rounded-[5px] border-[#ABB5BA]"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
