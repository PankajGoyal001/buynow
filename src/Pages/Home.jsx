import React from "react";
import Banner from "../Component/Home/Banner";
import Catagory from "../Component/Home/Product_catagory";
import NewArrivals from "../Component/Home/NewArrivals";
import Gaming from "../Component/Home/Gaming";
import CtaProduct from "../Component/Home/CtaProduct";
import NewArrivalsData from "../json/NewArrivals.json"
import ExclusiveData  from "../json/Exclusive.json";
const Home = () => {
  return (
    <>
        <Banner/>
         <Catagory/> 
        <NewArrivals data={ExclusiveData} title={"Top exclusive products"}/>
        {/* <Gaming/> */}
        {/* <CtaProduct/> */}
        <NewArrivals data={NewArrivalsData} title={"New arrivals products "}/>
    </>
  );
};

export default Home;
