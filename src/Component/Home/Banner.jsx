import React from "react";
import Fire from "../../assets/svg/fire.svg"

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between mt-20 mb-[65px]">
          <div className="grid gap-10">
            <div className="grid gap-5 max-w-[490px] ">
              <div className="flex items-center ">
              <h3 className="font-heebo text-gray-Purple font-medium text-xl leading-8" >Top collections </h3>
              <img src={Fire} alt="fire" />
              </div>

            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
