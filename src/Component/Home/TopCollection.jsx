import React from "react";
import Collection from "../../json/Collection.json";
import Next from "../../assets/svg/ArrowBackFilled.svg";
import CollectionData from "../../json/collectionData.json";
import { Link } from "react-router-dom";


const TopCollection = () => {
  return (
    <>
     <div className="container mt-20">
      <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="">
          <h2 className="font-heebo_Medium text-[34px] leading-[42px] text-gray-graystrong tracking-wide" >Top Collection</h2>
        </div>
        <div className="flex gap-[10px] border-b">
        {
          Collection.map((items,index)=>(
            <div key={index + Date.now() + items}>
              <Link to={items}>
              <p className="px-2 py-3 hover:border-b-2 border-purple-Purple_dark text-gray-graydark hover:text-purple-Purple_dark font-inter_regular text-sm leading-6 tracking-[0.4px]">{items.Title}</p></Link>
            </div>
          ))
        }
        

        </div>
      </div>
      <div className="flex gap-6">
        {
          CollectionData.map((items,index)=>(
        
            <div className="flex flex-col gap-5 bg-[#ED5F600A] rounded-[20px] border items-center px-5 py-5">
              <div className="flex gap-[10px]">
          <p className="font-heebo_Medium text-xl leading-8 -tracking-[0.15px] text-gray-graystrong">{items.Name}</p>
          <img className="rotate-180" src={Next} alt="efd" />
          </div>
          <div className="grid grid-cols-2 max-w-[328px] w-full rounded-[10px]">
            <img className="rounded-tl-[10px]" src={`/src/assets/images/${items.Image1}`} alt="main_Images" />
            <img className="rounded-tr-[10px]" src={`/src/assets/images/${items.Image2}`} alt="main_Images" />
            <img className="rounded-bl-[10px]" src={`/src/assets/images/${items.Image3}`} alt="main_Images" />
            <img className="rounded-br-[10px]" src={`/src/assets/images/${items.Image4}`} alt="main_Images" />
          </div>
         <div className="flex gap-2 px-2 py-[6px]">
          <p className="font-inter_Medium text-sm leading-6 tracking-[0.4px] text-purple-Purple_dark">{items.View}</p>
          <img src={`/src/assets/svg/${items.Array}`} alt="" />
         </div>
        </div>
        ))
      }
      </div>
      </div>
     </div>
    </>
  );
};

export default TopCollection;
