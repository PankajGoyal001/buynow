import React from "react";
import Banner from "../Component/Home/Banner";
import Catagory from "../Component/Home/Product_catagory";
import NewArrivals from "../Component/Home/NewArrivals";
import Gaming from '../Component/Home/Gaming'
import CtaProduct from "../Component/Home/CtaProduct";
import NewArrivalsData from "../json/NewArrivals.json"
import ExclusiveData  from "../json/Exclusive.json";
import RelatedItems from "../Component/Home/RelatedItems";
import SpecialOffer from "../Component/Home/SpecialOffer";
import TopCollection from "../Component/Home/TopCollection";
import TopBrand from "../Component/Home/TopBrand";
import Partner from "../Component/Home/Partner";
import Process from "../Component/Home/Process";
import GameData from "../json/Gaming.json";



const Home = () => {
  return (
    <>
        <Banner/>
         <Catagory/> 
        <NewArrivals data={ExclusiveData} title={"Top exclusive products"} />
        <Gaming Heading={"Gaming & toy products"} step={"solid"} data={GameData} info={"Best selling in games & toy up to 30% off"}/>
        <CtaProduct/>
        <RelatedItems/>
        <SpecialOffer/>
        <NewArrivals data={NewArrivalsData} title={"New arrivals products "}/>
        <TopCollection/>
        {/* <TopBrand/> */}
        <Partner/>
        <Process/>
    </>
  );
};

export default Home;
