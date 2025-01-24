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
              <SwiperSlide>
                  {/* <button onClick={() => swiperRef.current?.slidePrev()}> <img src={Prev} alt="" /> </button> */}
                <div className=" flex flex-col gap-[14px] items-center sm:gap-5 p-[10px] sm:p-5 bg-[#4226590A] border-[#42265914] rounded-[20px]  ">
                  <img key={index} className="sm:p-5 p-[15px] rounded-full w-[55px] sm:w-full bg-white " src={`/src/assets/svg/${items.images}`} alt="SwiperSlideImages" />
                  <p className="text-center font-inter_regular text-sm md:text-base text-gray-graystrong">{items.name}</p>
                </div>
                {/* <button onClick={() => swiperRef.current?.slideNext()}> <img src={Next} alt="" /></button> */}
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default product_catagory;
