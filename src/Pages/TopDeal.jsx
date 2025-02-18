import React from 'react'
import DealsProduct from '../Component/Top Deals/DealsProduct'
import RelatedGames from '../json/RelatedSearch.json'
import DealData from "../json/dealing.json";


import Gaming from '../Component/Home/Gaming'

const TopDeal = () => {
  return (
    <>
    
    <DealsProduct Data={DealData} Title={"Top Deals"} Name={"Products"} New={"Solid"}/>
    <Gaming Heading={"Related item your search"} data={RelatedGames} info={false}/>

    </>
  )
}

export default TopDeal
