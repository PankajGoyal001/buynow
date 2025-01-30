import React, { useRef } from "react";
import Back from "../../assets/svg/ArrowBackFilled.svg";
import Next from "../../assets/svg/ArrowBackFilled.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import GameProjuct from "../cards/GameProjuct";


const Gaming = ({Heading , data,info,step}) => {
  const swiperRef = useRef();
  return (
    <div className="container py-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          
          {
            step === "solid" ? (<>
              <h1 className="sm:text-[34px] sm:leading-[42px] text-2xl font-heebo_Medium text-gray-graystrong tracking-wide">
            {Heading}
          </h1>
          <div className="flex items-end justify-between">
            <p className="sm:text-base text-gray-graydark font-inter_regular text-sm tracking-[0.15px]">
              {info}
            </p>
            <div className="sm:flex max-w-[95px] hidden group: hover:cursor-pointer items-center gap-[10px] h-[22px] w-full ">
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
           </> ): (
            <>
            <div className="flex justify-between items-end">
            <h1 className="sm:text-[34px] sm:leading-[42px] text-2xl font-heebo_Medium text-gray-graystrong tracking-wide">
            {Heading}
          </h1>
          <div className="flex items-end justify-between">
           
            <div className="sm:flex max-w-[95px] hidden group: hover:cursor-pointer items-center gap-[10px] h-[22px] w-full ">
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
            </>
           )
          }
        </div>
        <div >
          <Swiper
            pagination={false}
            loop={true}
            navigation={false}
            breakpoints={{
              0: {
                width: 425,
                slidesPerView: 1.9,
              },
              425: {
                width: 640,
                slidesPerView: 2.5,
              },
              640: {
                width: 768,
                slidesPerView: 3.5,
              },
              768: {
                width: 1024,
                slidesPerView: 3.58,
              },
            }}
            spaceBetween={24}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={4}
            className="mySwiper"
          >
            {data.map((items, index) => (
              <SwiperSlide key={index}>
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
