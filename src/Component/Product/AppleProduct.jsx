import React, { useState } from 'react'
import Outlines from "../../assets/svg/FilterListOutlined.svg";
import arrayDown from "../../assets/svg/Arrowlineright.svg";
import WatchesData from "../../json/AppleWatches.json";
import ArrowUp from "../../assets/svg/ArrowUp.svg";
import arrowRight from "../../assets/svg/ArrowRight.svg";
import { Link } from 'react-router-dom';

const Banner1 = () => {
  const [selectColor, setselectColor] = useState(false)
  const [Filter, setFilter] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [rotate1, setRotate1] = useState(false);
  const [rotate2, setRotate2] = useState(false);
  const [rotate3, setRotate3] = useState(false);
  const [rotate4, setRotate4] = useState(false);
  const [rotate5, setRotate5] = useState(false);

  return (
    <>
      <div className="container ">
        <div className=" sm:pt-20 pt-10">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5 sm:gap-10">
              <div className="flex flex-col gap-[10px]">
                <h1 className='CommonHead'>Apple watches</h1>
                <div className="sm:flex hidden items-center pb-5 border-b border-[#42265914]">
                  <Link to={"/"}>
                    <h6 className="SameText">Home</h6>
                  </Link>
                  <img className='' src={arrowRight} alt="arrow" />
                  <h6 className="SameText ">Products</h6>
                </div>

              </div>
              <div className="sm:flex relative grid gap-[10px] w-full items-center justify-between">
                <div className={`flex ${Filter ? " justify-between " : ""} justify-between w-full gap-6`}>
                 
                  <h3 className={`text-base ${Filter ? "pl-[300px]" : ""} font-inter_regular tracking-[0.15px] text-gray-graydark`}>Showing 1–9 of 200 results</h3>
                  <div className="flex gap-[10px]"> 
                  <button onClick={() => setFilter(!Filter)}
                    className={`flex items-center px-4 py-[6px] border-[#42265980] border rounded-[30px] gap-2 ${Filter ? "hidden " : ""}`}>
                    <p className="text-sm leading-[24px] font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Filter</p>
                    <img src={Outlines} alt="Outlines" />
                  </button>
                    <button className='flex items-center gap-2 px-4 py-[6px] border-[#42265980] border rounded-[30px]'>
                      <p className="text-sm leading-[24px] font-inter_Medium tracking-[0.4px] text-purple-Purple_dark">Sort by</p>
                      <img className='rotate-90' src={arrayDown} alt="arrowDown" />
                    </button>
                    {
                      Filter && (<>
                        <div className=" absolute max-w-[270px] w-full bg-white left-0 top-[0px]">
                          <div className=" border rounded-[20px] flex gap-[10px] flex-col">
                            <div className="flex items-center p-5 justify-between">
                              <h2 className='font-heebo_Medium text-xl leading-[133.3%] tracking-[0.15px] text-gray-graystrong'>Filter </h2>
                              <button onClick={() => setFilter(false)}
                                className="font-inter_Medium text-sm leading-[24px] tracking-[0.4px] text-purple-Purple_dark px-2 py-[6px]">Clear all</button>
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
                                    {["Watches", "Mobiles", "Laptops", "Tablets", "Headphones", "Printers", "Scanners", "Speakers"]?.map((items, index) => (
                                      <li key={index} className='py-[4px] hover:bg-[#4226590A] rounded-[30px] text-gray-graydark text-sm leading-[24px] tracking-[0.17px] font-inter_Medium pl-4'>{items}</li>
                                    ))}
                                  </ul>
                                  <button className='font-inter_regular text-base tracking-[0.15px] text-purple-Purple_dark text-start hover:cursor-pointer'>View all</button>
                                </>)
                              }
                            </div>

                            <span className='border-b'></span>
                            <div className="flex flex-col p-5 gap-[10px]">
                              <button onClick={() => setRotate1(!rotate1)} className="flex justify-between  items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Price</p>
                                <img className={`transition-all duration-200 ${rotate1 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                              </button>
                              {
                                rotate1 && (<>
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
                              <button onClick={() => setRotate2(!rotate2)} className="flex justify-between p-5 items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Color</p>
                                <img className={`transition-all duration-200 ${rotate2 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                              </button>
                              {
                                rotate2 && (<>
                                  <div className="grid grid-cols-6 gap-[15px]">
                                    {["#202a2e", "#5d9ede", "#81c785", "#4ccfe0", "#4cb5ab", "#78909c", "#67517a", "#ff8a66", "#ffb84d", "#b967c7", "#d15a82", "#f06291"]?.map((items, index) => (
                                      <button key={index} onClick={() => setselectColor(items)}
                                        style={{ backgroundColor: items }}
                                        className={`rounded-full  w-[25px] h-[25px] border  ${selectColor === items ? "border-black" : "border-none"} m-[2px]`}></button>
                                    ))}
                                  </div>
                                </>)
                              }
                              <p className="text-purple-Purple_dark text-base font-inter_regular tracking-[0.15px]">+12 more</p>
                            </div>

                            <span className='border-b'></span>
                            <div className="flex flex-col gap-[10px]">
                              <button onClick={() => setRotate3(!rotate3)} className="flex justify-between p-5 items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Brands</p>
                                <img className={`transition-all duration-200 ${rotate3 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                              </button>
                            </div>

                            <span className='border-b'></span>
                            <div className="flex flex-col gap-[10px]">
                              <button onClick={() => setRotate4(!rotate4)} className="flex justify-between p-5 items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Customer review</p>
                                <img className={`transition-all duration-200 ${rotate4 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                              </button>
                            </div>

                            <span className='border-b'></span>
                            <div className="flex flex-col gap-[10px]">
                              <button onClick={() => setRotate5(!rotate5)} className="flex justify-between p-5 items-center rounded-[30px]" >
                                <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium" > Discount</p>
                                <img className={`transition-all duration-200 ${rotate5 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </>)
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div className={`grid    ${Filter ? "grid-cols-3 w-full max-w-[858px]" : "grid-cols-4 w-full"} md:gap-6 pb-10 `} >
                {
                  WatchesData.map((items, index) => (
                    <div className="flex flex-col w-[270px] h-full gap-[14px] md:gap-5 border rounded-[20px] hover:scale-[0.95] duration-200 hover:shadow-lg relative" key={index}>
                      <img className="max-w-[270px] w-full max-h-[249px] h-full"
                        src={`src/assets/Images/${items.Image}`}
                        alt="product_image"
                      />
                      <img className="max-w-6 w-full absolute top-5 right-5" src={`/src/assets/svg/${items.Heart}`} alt="" />
                      <div className="flex flex-col gap-[10px]">
                        <div className="flex flex-col md:px-5 md:pb-5 px-[10px] gap-[8px] md:gap-[10px]">
                          <h2 className="md:text-base text-sm font-inter_regular tracking-[0.17px] md:tracking-[0.15px] text-gray-graydark">{items.Name}</h2>
                          <div className="flex justify-between">
                            <p className="md:text-xl font-heebo_Medium whitespace-nowrap  text-xl leading-[133.3%]">{items.Price}</p>
                            <img src={`src/assets/svg/${items.Rating}`} alt="rating_star" />
                          </div>
                          <span className="border-b border"></span>
                          <div className="flex justify-between pb-[14px] md:py-0 items-center gap-[10px]">
                            <p className="text-purple-Purple_light text-sm tracking-[0.17px] font-inter_regular">{items.Stoke}</p>
                            <img className="bg-purple-Purple_dark p-[5px] hover:cursor-pointer rounded-full" src={`src/assets/svg/${items.Shop}`} alt="Shop" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner1;
