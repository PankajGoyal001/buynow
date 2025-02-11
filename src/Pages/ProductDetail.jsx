import React from 'react'
import BannerProduct from '../Component/Details/BannerProduct'
import Information from '../Component/Details/Information'
import Details from '../Component/Details/Details'
import Custmer from '../Component/Details/Custmer'
import FQA from '../Component/Details/FQA'
import RelatedGames from '../json/RelatedSearch.json'
import Gaming from '../Component/Home/Gaming'


const ProductDetail = () => {
  return (
    <>
    <BannerProduct/>
    <Information/>
    <Details/>
    <Custmer/>
    <FQA/>
    <Gaming Heading={"Related item your search"} data={RelatedGames} info={false}/>
    
    </>
  )
}

export default ProductDetail
