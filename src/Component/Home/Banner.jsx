import React from "react";
import Fire from "../../assets/svg/fire.svg";
import cart from "../../assets/svg/cart.svg";
import hero_img from "../../assets/Images/product.png";
import bg_img from "../../assets/Images/bg_img.png";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between  mt-20 mb-[65px]">
          <div className="grid gap-10 font-heebo_Medium">
            <div className="grid gap-5 max-w-[490px] ">
              <div className="flex items-center ">
                <h3 className=" text-[#422659]  text-xl leading-8">
                  Top Collections{" "}
                </h3>
                <img src={Fire} alt="fire" />
              </div>
              <h1 className="text-[60px]  tracking-tighter leading-[72px] ">
                Best Place To Find And{" "}
                <span className="text-6xl leading-[72px] text-[#67517A]">
                  Buy Products{" "}
                </span>{" "}
                For Your Need
              </h1>
            </div>
            <div className="pt-10 tracking-[0.15px] grid gap-10 border-t-2 ">
              <p className="text-gray-graystrong font-inter_regular text-base">
                For first pruches{" "}
                <span className="text-xl text-yellow-yellow font-inter_Medium">
                  Get 30% off{" "}
                </span>
              </p>
              <div className="flex gap-[30px] group: items-center">
                <button className="flex gap-2 group-hover:cursor-pointer bg-purple-Purple_dark rounded-[30px] py-2 px-[22px] ">
                  <img src={cart} alt="cart-icon" />
                  <p className="text-white text-[15px] font-inter_Medium">
                    Shop Now
                  </p>
                </button>
                <div className="grid ">
                  <p className="font-heebo_Medium text-xl text-gray-graystrong">
                    100k+
                  </p>
                  <p className="text-gray-graydark text-xs tracking-[0.4px]">
                    Collections
                  </p>
                </div>
                <span className="w-[1px] h-10 rounded-[5px] border-r"></span>
                <div className="grid ">
                  <p className="font-heebo_Medium text-xl text-gray-graystrong">
                    60k+
                  </p>
                  <p className="text-gray-graydark text-xs tracking-[0.4px]">
                    Users
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <img className="max-w-[473px] w-full" src={hero_img} alt="product-img" />
          </div>
        </div>
      </div>
      {/* <div className="relative after:max-w-[0000] after:w-ful after:h-[2323] after:bg-[ur('')] after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:z-0  " >
    <img className=""  src="" alt="" />
</div> */}
    </>
  );
};

export default Banner;
