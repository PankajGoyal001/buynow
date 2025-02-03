import React from "react";
import Fire from "../../assets/svg/fire.svg";
import cart from "../../assets/svg/cart.svg";
import hero_img from "../../assets/Images/product.png";
import bg_img from "../../assets/Images/bg_img.png";

const Banner = () => {
  return (
    <> 
      {/* <div className="bg-[url('src/assets/Images/background.png')] w-full bg-cover"> */}
      <div className="container">
        <div className="pt-20 pb-10">

          <div className="justify-between md:flex-row flex flex-col items-center pb-[50px] md:pb-[65px]">
            <div className="grid md:gap-10 gap-[30px] font-heebo_Medium">
              <div className="grid gap-5 max-w-[490px]">
                <div className="flex items-center ">
                  <h3 className="text-[#422659] text-base font-inter_Medium md:font-heebo_Medium md:text-xl leading-[160%]">
                    Top Collections{" "}
                  </h3>
                  <img className="md:w-6 w-5" src={Fire} alt="fire" />
                </div>
                <h1 className="md:text-[60px] text-[34px] leading-[123.5%] tracking-wide md:tracking-tighter md:leading-[200%]">
                  Best Place To Find And<span className="text-[#67517A] "> Buy Products</span>For Your Need
                </h1>
              </div>
              <div className="md:pt-10 pt-[30px] tracking-[0.17px] md:tracking-[0.15px] grid gap-[30px] md:gap-10 border-t-2 ">
                <p className="text-gray-graystrong font-inter_regular text-sm md:text-base">
                  For first purchases{" "}
                  <span className="leading-[160%] text-xl text-yellow-yellow font-inter_Medium">
                    Get 30% off{" "}
                  </span>
                </p>
                <div className="flex gap-[25px] md:gap-[30px] group items-center">
                  <button className="flex gap-2 group-hover:cursor-pointer hover:scale-90 ease-in-out duration-[0.7s] items-center bg-purple-Purple_dark rounded-[30px] py-2 px-[22px]">
                    <img src={cart} alt="cart-icon" />
                    <p className="text-white text-[15px] leading-[173.33%] tracking-[0.46px] font-inter_Medium"> Shop Now </p>
                  </button>
                  <div className="flex gap-[15px] md:gap-[30px]">
                    <div className="grid ">
                      <p className="font-heebo_Medium text-xl text-gray-graystrong">100k+</p>
                      <p className="text-gray-graydark text-xs tracking-[0.4px]">Collections</p>
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
            </div>
            <div className="pt-20 md:pt-0 ">
              <img className="w-[222px] md:max-w-[473px] md:w-full" src={hero_img} alt="product-img" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Banner;
