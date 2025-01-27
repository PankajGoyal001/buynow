import React, { useRef } from "react";
import GameData from "../../json/Gaming.json";
import Back from "../../assets/svg/ArrowBackFilled.svg";
import Next from "../../assets/svg/ArrowBackFilled.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import GameProjuct from "../cards/GameProjuct";

const Gaming = () => {
  const swiperRef = useRef();
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="text-[34px] leading-[42px] font-heebo_Medium text-gray-graystrong tracking-wide">
            {" "}
            Gaming & toy products
          </h1>
          <div className="flex items-end justify-between">
            <p className="text-base text-gray-graydark font-inter_regular tracking-[0.15px]">
              {" "}
              Best selling in games & toy up to 30% off{" "}
            </p>
            <div className="flex max-w-[95px] group: hover:cursor-pointer items-center gap-[10px] h-[22px] w-full ">
              <img
                className="hover:scale-90 ease-in-out duration-200"
                onClick={() => swiperRef.current?.slidePrev()}
                src={Back}
                alt="Prev"
              />
              <span className=" w-[31px] h-[1px]  bg-[#ED5F6014] "></span>
              <img
                className="hover:scale-90 ease-in-out duration-200 rotate-180"
                onClick={() => swiperRef.current?.slideNext()}
                src={Next}
                alt="Next"
              />
            </div>
          </div>
        </div>
        <div className="py-[30px] my-[30px]">
          <Swiper
            pagination={false}
            loop={true}
            navigation={false}
            spaceBetween={24}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={4}
            className="mySwiper"
          >
            {GameData.map((items, index) => (
              <SwiperSlide>
                <GameProjuct
                  Image={items.Image}
                  title={items.title}
                  Rating={items.Rating}
                  Price={items.Price}
                  buy={items.buy}
                  array={items.array}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gaming;
