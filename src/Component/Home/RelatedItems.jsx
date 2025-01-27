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
      <div className="container mt-20">
        <div className="flex  flex-col gap-10 ">
          <div className="flex items-end justify-between">
            <h1 className="text-[34px] leading-[42px] font-heebo_Medium text-gray-graystrong tracking-wide">
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
              // breakpoints={{
              //   0: {
              //     width: 425,
              //     slidesPerView: 3.8,
              //   },
              //   640: {
              //     width: 640,
              //     slidesPerView: 3.6,
              //   },
              //   640: {
              //     width: 768,
              //     slidesPerView: 4.3,
              //   },
              //   768: {
              //     width: 1024,
              //     slidesPerView: 4,
              //   },
              // }}
              spaceBetween={24}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={4}
              className="mySwiper"
            >
              {RelatedData.map((items, index) => (
                <SwiperSlide>
                <div className="flex flex-col gap-5 border rounded-[20px] ">
                  <img className="max-w-[270px] w-full h-[249px]"
                    src={`src/assets/Images/${items.Image}`}
                    alt="product_image"
                  />
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col px-5 pb-5 gap-[10px]">
                      <h2 className="text-base font-inter_regular tracking-[0.15px] text-gray-graydark">{items.Name}</h2>
                      <div className="flex gap-[10px]">
                        <p className="">{items.Price}</p>
                        <img src={`src/assets/svg/${items.Rating}`} alt="rating_star" />
                      </div>
                      <span className="border-b border"></span>
                      <div className="flex justify-between gap-[10px]">
                        <p className="">{items.Stoke}</p>
                        <img className="bg-purple-Purple_dark p-[5px] rounded-full" src={`src/assets/svg/${items.Shop}`} alt="Shop" />
                      </div>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default RelatedItems;
