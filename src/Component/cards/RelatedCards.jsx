import React from 'react'

const Related = ({Image,Name,Price,Rating,Stoke,Shop,Heart}) => {
  return (
    <>
    <div className="flex flex-col max-w-[270px] w-full  h-full gap-[14px] md:gap-5 border rounded-[20px] hover:scale-[0.95] duration-200 hover:shadow-lg relative ">
                  <img className="max-w-[270px] w-full max-h-[249px] h-full"
                    src={`src/assets/Images/${Image}`}
                    alt="product_image"
                  />
                  <img className="max-w-6 w-full absolute top-5 right-5" src={`/src/assets/svg/${Heart}`} alt="" />
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col md:px-5 md:pb-5 px-[10px] gap-[8px] md:gap-[10px]">
                      <h2 className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-gray-graydark">{Name}</h2>
                      <div className="flex gap-[10px]">
                        <p className="md:text-2xl font-heebo_Medium  text-xl leading-8">{Price}</p>
                        <img className='hidden md:block' src={`src/assets/svg/${Rating}`} alt="rating_star" />
                      </div>
                      <span className="border-b border"></span>
                      <div className="flex justify-between  items-center gap-[10px]">
                        <p className="text-purple-Purple_light text-sm tracking-[0.17px] font-inter_regular">{Stoke}</p>
                        <img className="bg-purple-Purple_dark p-[5px] hover:cursor-pointer rounded-full" src={`src/assets/svg/${Shop}`} alt="Shop" />
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Related
