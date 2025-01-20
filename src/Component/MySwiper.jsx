import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function MySwiper() {
  return (
    <>
      <Swiper
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 4</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 5</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 6</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 7</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 8</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[200px] bg-red-500">Slide 9</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default MySwiper;
