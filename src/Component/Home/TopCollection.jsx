import React, { useRef } from "react";
import Collection from "../../json/Collection.json";
import CollectionData from "../../json/collectionData.json";
import { Link } from "react-router-dom";
import CollectionCard from "../cards/CollectionCard";


const TopCollection = () => {

  return (
    <>
      <div className="container">
        <div className=" md:py-10 py-[25px]">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <div className="">
                <h2 className="font-heebo_Medium md:text-[34px] text-2xl md:leading-[123.5%] text-gray-graystrong tracking-wide" >
                  Top Collection
                </h2>
              </div>
              <div className="flex gap-[10px] overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] border-b">
                {
                  Collection.map((items, index) => (
                    <div key={index + Date.now() + items}>
                      <Link to={items}>
                        <p className=" px-2 py-3 hover:border-b-2 text-nowrap border-purple-Purple_dark text-gray-graydark hover:text-purple-Purple_dark font-inter_regular text-sm leading-[100%] tracking-[0.4px]">{items.Title}</p>
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="w-full">

           
              {
                CollectionData.map((items, index) => (
                    <CollectionCard key={index + Date.now() + items}
                      Image1={items.Image1}
                      Image2={items.Image2}
                      Image3={items.Image3}
                      Image4={items.Image4}
                      View={items.View}
                      Name={items.Name}
                      Array={items.Array}
                    />
                ))
              }
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCollection;
