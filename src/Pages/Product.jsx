import React from 'react'
import ProductHeading from '../Component/Product/ProductHeading'
import AppleProduct from '../Component/Product/AppleProduct'
import RelatedGames from '../json/RelatedSearch.json'
import Gaming from '../Component/Home/Gaming'

const Product = () => {
  return (
    <>
    <ProductHeading/>
    <AppleProduct/>
    <Gaming Heading={"Related item your search"} data={RelatedGames} info={false}/>

    </>
  )
}

export default Product
