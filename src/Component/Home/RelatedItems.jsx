import React, { useRef } from "react";
import RelatedData from "../../json/Related.json";
import Back from "../../assets/svg/ArrowBackFilled.svg";
import Next from "../../assets/svg/ArrowBackFilled.svg";
import RelatedCards from "../cards/RelatedCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

const RelatedItems = () => {
  const swiperRef = useRef();
  return (
    <>
      <div className="container">
        <div className=" md:py-10 py-[25px]">
          <div className="flex  flex-col md:gap-10 gap-5 ">
            <div className="flex items-end justify-between">
              <h1 className="md:text-[34px]  leading-[123.5%] font-heebo_Medium text-gray-graystrong text-2xl md:tracking-wide">
                Related items for you
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
                {RelatedData.map((items, index) => (
                  <SwiperSlide key={index}>
                    <RelatedCards
                      Image={items.Image}
                      Heart={items.Heart}
                      Name={items.Name}
                      Price={items.Price}
                      Rating={items.Rating}
                      Stoke={items.Stoke}
                      Shop={items.Shop}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedItems;
