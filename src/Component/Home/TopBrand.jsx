import React from "react";
import Back from "../../assets/svg/ArrowBackFilled.svg";
import Next from "../../assets/svg/ArrowBackFilled.svg";
import Branded from "../../json/Brand.json";

const TopBrand = () => {
  return (
    <>
      <div className="container">
        <div className=" py-10">
          <div className="flex flex-col gap-10">
            <div className="flex items-end justify-between">
              <h1 className="text-[34px] leading-[123.5%] font-heebo_Medium text-gray-graystrong tracking-wide">
                Top Brands Products
              </h1>
              <div className="md:flex max-w-[95px] group: hover:cursor-pointer hidden items-center gap-[10px] h-[22px] w-full ">
                <img
                  className="hover:scale-90 ease-in-out duration-200"
                  onClick={() => swiperRef.current?.slidePrev()}
                  src={Back}
                  alt="array_left"
                />
                <span className=" w-[31px] h-[1px]  bg-[#ED5F6014] "></span>
                <img
                  className="hover:scale-90 ease-in-out duration-200 rotate-180"
                  onClick={() => swiperRef.current?.slideNext()}
                  src={Next}
                  alt="array_right"
                />
              </div>
            </div>
            <div className="flex gap-6">
              {
                Branded.map((items, index) => (
                  <div key={index} className="flex flex-col p-10 border rounded-[20px] gap-5">
                    <div className="flex flex-col items-center gap-[10px]">
                      <h4 className="text-gray-graystrong font-heebo_Medium text-xl leading-[133.3%] tracking-[0.15px]">{items.Name}</h4>
                      <div className="flex items-center flex-col">
                        <p className="text-gray-graydark font-inter_regular text-sm tracking-[0.17px]">{items.Price}</p>
                        <p className="text-gray-graydark font-inter_regular text-sm tracking-[0.17px]">{items.Discount}</p>
                      </div>
                      <div className="flex px-2 hover:cursor-pointer py-[6px] gap-[10px]">
                        <p className="text-purple-Purple_dark text-sm leading-[100%] tracking-[0.4px]">{items.buy}</p>
                        <img src={`/src/assets/svg/${items.array}`} alt="" />
                      </div>
                    </div>
                    <img src={`/src/assets/images/${items.Images}`} alt="" />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBrand;
