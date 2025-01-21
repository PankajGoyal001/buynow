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
                <div className=" flex flex-col gap-5 p-5   bg-[#4226590A] border-[#42265914] rounded-[20px]  ">
                  <img
                    key={index}
                    className="p-5 rounded-full bg-white "
                    src={`/src/assets/svg/${items.images}`}
                    alt="SwiperSlideImages"
                  />
                  <p className="text-center font-inter_regular text-base text-gray-graystrong">
                    {items.name}
                  </p>
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
