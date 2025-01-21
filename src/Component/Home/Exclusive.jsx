import React from "react";
import ExclusiveData from "../../json/Exclusive.json";
import Back from "../../assets/svg/ArrowBackFilled.svg";
import Next from "../../assets/svg/ArrowBackFilled.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const Exclusive = () => {
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h1 className="text-[34px] leading-[42px] font-heebo_Medium text-gray-graystrong tracking-wide">
            Top Exclusive Products
          </h1>
          <div className="flex max-w-[95px] items-center gap-[10px] h-[22px] w-full ">
            <img className="" src={Back} alt="" />
            <span className=" w-[31px] h-[1px]  bg-[#ED5F6014] "></span>
            <img className="rotate-180" src={Next} alt="" />
          </div>
        </div>

        <Swiper
          pagination={false}
          // loop={true}
          navigation={false}
          // breakpoints={{
          //   576: {
          //     width: 576,
          //     slidesPerView: 2,
          //   },
          //   768: {
          //     width: 768,
          //     slidesPerView: 4,
          //   },
          // }}
          spaceBetween={24}
          slidesPerView={4}
          className="mySwiper"
        >
          {ExclusiveData.map((items, index) => (
            <SwiperSlide>
              <div className="flex gap-6">
                <div className="flex  items-center w-full flex-col border rounded-[20px]">
                  <h1 className="p-5 text-gray-graystrong font-inter_regular text-sm leading-6 tracking-[0.15px]">
                    {items.head}
                  </h1>
                  <img
                    className="p-5" key={index}
                    src={`src/assets/svg/${items.image}`}
                    alt="images"
                  />
                  <img
                    className="max-w-14 w-full " key={index}
                    src={`src/assets/svg/${items.color}`}
                    alt="images"
                  />
                  <div className="mt-5  border-t" key={index}>
                    <div className="flex items-center gap-[130px] justify-between  p-5">
                      <img
                        className="bg-purple-Purple_dark p-[5px] rounded-full" key={index}
                        src={`src/assets/svg/${items.shop}`}
                        alt="images"
                      />
                      <div className="flex py-[6px] px-2  gap-2">
                        <p className="">{items.buy}</p>
                        <img
                          className=""
                          src={`src/assets/svg/${items.array}`}
                          alt="images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Exclusive;
