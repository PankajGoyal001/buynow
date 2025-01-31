import React, { useState } from 'react'
import Outlines from "../../assets/svg/FilterListOutlined.svg";
import arrayDown from "../../assets/svg/Arrowlineright.svg";
import WatchesData from "../../json/AppleWatches.json";
import ArrowUp from "../../assets/svg/ArrowUp.svg";


const Banner1 = () => {
  const [Filter, setFilter] = useState(false);
  const [rotate, setRotate] = useState(false);

  return (
    <>
      <div className="container relative pt-5">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className='text-base font-inter_regular tracking-[0.15px] text-gray-graydark'>Showing 1–9 of 200 results</h3>

            <div className="flex flex-col">
              <div className={`flex ${Filter ? "flex-row-reverse" : "flex-row"} gap-[10px]`}>
                <button onClick={() => setFilter(!Filter)}
                  className="flex items-center px-4 py-[6px] border-[#42265980] border rounded-[30px] gap-2">
                  <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Filter</p>
                  <img src={Outlines} alt="Outlines" />
                </button>

                <button className='flex items-center gap-2 px-4 py-[6px] border-[#42265980] border rounded-[30px]'>
                  <p className="text-sm leading-6 font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Sort by</p>
                  <img className='rotate-90' src={arrayDown} alt="arrowDown" />
                </button>
                {
                  Filter && (<>
                    <div className=" absolute max-w-[270px] w-full bg-white top-[90px] right-5">
                      <div className=" border rounded-[20px] flex gap-[10px] flex-col">
                        <div className="flex items-center p-5 justify-between">
                          <h2 className='font-heebo_Medium text-xl leading-8 tracking-[0.15px] text-gray-graystrong'>Filter </h2>
                          <p className="font-inter_Medium text-sm leading-6 tracking-[0.4px] text-purple-Purple_dark px-2 py-[6px]">Clear all</p>
                        </div>
                          
                          <span className='border-b'></span>
                          <div className="flex flex-col p-5 gap-[10px]">
                          <button onClick={() => setRotate(!rotate)} className="flex justify-between  items-center rounded-[30px]" >
                            <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Category</p>
                            <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                          </button>
                          {
                            rotate && (<>
                            <ul className='flex flex-col gap-[5px]'>
                              {["Watches","Mobiles","Laptops","Tablets","Headphones","Printers","Scanners","Speakers"]?.map((items,index)=>(
                                <li key={index} className='py-[4px] hover:bg-[#4226590A] rounded-[30px] text-gray-graydark text-sm leading-6 tracking-[0.17px] font-inter_Medium pl-4'>{items}</li>

                              ))}
                            </ul>
                            <button className='font-inter_regular text-base tracking-[0.15px] text-purple-Purple_dark text-start hover:cursor-pointer'>View all</button>
                            </>)
                          }
                          </div>
                          
                          <span className='border-b'></span>
                          <div className="flex flex-col p-5 gap-[10px]">
                          <button onClick={() => setRotate(!rotate)} className="flex justify-between  items-center rounded-[30px]" >
                            <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Price</p>
                            <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                          </button>
                          {
                            rotate && (<>
                            <ul className='flex flex-col '>
                            <input className='' type="range" id='price' />
                            <div className="flex items-center justify-between">
                            <li className=" font-inter_regular text-sm tracking-[0.17px] text-gray-graydark ">low: $50.00</li>
                            <li className=" font-inter_regular text-sm tracking-[0.17px] text-gray-graydark ">High: $500.00</li>
                            </div>

                            </ul>
                            </>)
                          }
                          </div>
                         
                          <span className='border-b'></span>
                          <div className="flex flex-col gap-[10px]">
                          <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5 items-center rounded-[30px]" > 
                          <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Color</p>
                            <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                          </button>
                          </div>
                          
                          <span className='border-b'></span>
                          <div className="flex flex-col gap-[10px]">
                          <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5 items-center rounded-[30px]" >
                          <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Brands</p>
                            <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                          </button>
                          </div>
                          
                          <span className='border-b'></span>
                          <div className="flex flex-col gap-[10px]">
                          <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5 items-center rounded-[30px]" >
                          <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Customer review</p>
                            <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                          </button>
                          </div>   

                          <span className='border-b'></span>
                          <div className="flex flex-col gap-[10px]">
                          <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5 items-center rounded-[30px]" >
                          <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Discount</p>
                            <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                          </button>
                          </div>   
                      </div>
                    </div>
                  </>)
                }


              </div>

            </div>
          </div>
          <div className={`grid ${Filter ? "grid-cols-3 gap-6 w-[858px] " : "grid-cols-4 gap-6 w-full"} pb-10 `} >
            {
              WatchesData.map((items, index) => (
                <div className="flex flex-col w-full  h-full gap-[14px] md:gap-5 border rounded-[20px] hover:scale-[0.95] duration-200 hover:shadow-lg relative" key={index}>
                  <img className="max-w-[270px] w-full max-h-[249px] h-full"
                    src={`src/assets/Images/${items.Image}`}
                    alt="product_image"
                  />
                  <img className="max-w-6 w-full absolute top-5 right-5" src={`/src/assets/svg/${items.Heart}`} alt="" />
                  <div className="flex flex-col gap-[10px]">
                    <div className="flex flex-col md:px-5 md:pb-5 px-[10px] gap-[8px] md:gap-[10px]">
                      <h2 className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-gray-graydark">{items.Name}</h2>
                      <div className="flex justify-between">
                        <p className="md:text-xl font-heebo_Medium whitespace-nowrap  text-xl leading-8">{items.Price}</p>
                        <img className='hidden md:block' src={`src/assets/svg/${items.Rating}`} alt="rating_star" />
                      </div>
                      <span className="border-b border"></span>
                      <div className="flex justify-between  items-center gap-[10px]">
                        <p className="text-purple-Purple_light text-sm tracking-[0.17px] font-inter_regular">{items.Stoke}</p>
                        <img className="bg-purple-Purple_dark p-[5px] hover:cursor-pointer rounded-full" src={`src/assets/svg/${items.Shop}`} alt="Shop" />
                      </div>
                    </div>
                  </div>
                </div>

              ))
            }
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  )
}

export default Banner1
