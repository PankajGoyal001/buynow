import React from "react";
import Banner from "../Component/Home/Banner";
import Catagory from "../Component/Home/Product_catagory";
import NewArrivals from "../Component/Home/NewArrivals";
import Gaming from "../Component/Home/Gaming";
import CtaProduct from "../Component/Home/CtaProduct";
import NewArrivalsData from "../json/NewArrivals.json"
import ExclusiveData  from "../json/Exclusive.json";
import RelatedItems from "../Component/Home/RelatedItems";
import SpecialOffer from "../Component/Home/SpecialOffer";
import TopCollection from "../Component/Home/TopCollection";


const Home = () => {
  return (
    <>
        <Banner/>
         <Catagory/> 
        <NewArrivals data={ExclusiveData} title={"Top exclusive products"}/>
        <Gaming/>
        <CtaProduct/>
        <RelatedItems/>
        <SpecialOffer/>
        <NewArrivals data={NewArrivalsData} title={"New arrivals products "}/>
        <TopCollection/>
    </>
  );
};

export default Home;
