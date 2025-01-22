import React, { useRef } from "react";
import ExclusiveData from "../../json/NewArrivals.json";
import Back from "../../assets/svg/ArrowBackFilled.svg";
import Next from "../../assets/svg/ArrowBackFilled.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import ProjectCards from "../cards/ProjectCards";

const NewArrivals = ({data,title}) => {
  const swiperRef = useRef();
  return (
    <div className="container mt-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-end justify-between">
          <h1 className="text-[34px] leading-[42px] font-heebo_Medium text-gray-graystrong tracking-wide">
         {title}
          </h1>
          <div className="flex max-w-[95px] group: hover:cursor-pointer items-center gap-[10px] h-[22px] w-full ">
            <img className="hover:scale-90 ease-in-out duration-200"  onClick={() => swiperRef.current?.slidePrev()} src={Back} alt="" />
            <span className=" w-[31px] h-[1px]  bg-[#ED5F6014] "></span>
            <img className="hover:scale-90 ease-in-out duration-200 rotate-180" onClick={() => swiperRef.current?.slideNext()}src={Next} alt="" />
          </div>
        </div>

        <div className="flex gap-6">
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
            {data.map((items, index) => (
              <SwiperSlide>
                <ProjectCards
                  head={items.head}
                  image={items.image}
                  color={items.color}
                  shop={items.shop}
                  buy={items.buy}
                  array={items.array}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default NewArrivals;
