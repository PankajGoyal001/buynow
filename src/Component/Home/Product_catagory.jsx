import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import Product from "../../json/catagory.json";
import Prev from "../../assets/svg/pagination_left.svg";
import Next from "../../assets/svg/pagination_right.svg";

const product_catagory = () => {
  const swiperRef = useRef();

  return (
    <>
      <div className="container">
        <div className=" sm:py-10 py-[25px]  relative">
          <button
            className="absolute top-[45%] z-50 left-[-1px]"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img
              className="max-w-[32px] w-full sm:max-w-[40px] sm:w-full"
              src={Prev}
              alt=""
            />
          </button>
          <Swiper
            pagination={false}
            loop={true}
            navigation={false}
            breakpoints={{
              0: {
                width: 425,
                slidesPerView: 3.8,
              },
              640: {
                width: 640,
                slidesPerView: 3.6,
              },
              640: {
                width: 768,
                slidesPerView: 4.3,
              },
              768: {
                width: 1024,
                slidesPerView: 5.4,
              },
            }}
            spaceBetween={20}
            slidesPerView={6}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {Product?.length &&
              Product &&
              Product?.map((items, index) => (
                <SwiperSlide key={index}>
                  <div className=" flex flex-col gap-[14px] items-center sm:gap-5 p-[10px] sm:p-5 bg-[#4226590A] border-[#42265914] rounded-[20px]  ">
                    <div className="sm:p-5 p-[15px] rounded-full sm:w-full bg-white relative z-20 ">
                      <img
                        key={index}
                        className=""
                        src={`/src/assets/svg/${items.images}`}
                        alt="SwiperSlideImages"
                      />
                    </div>
                    <p className="text-center font-inter_regular text-sm md:text-base text-gray-graystrong leading-[123.5%]">
                      {items.name}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          <button
            className="absolute top-[45%] z-50 right-[10px]"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img
              className="max-w-[32px] w-full sm:max-w-[40px] sm:w-full"
              src={Next}
              alt=""
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default product_catagory;
