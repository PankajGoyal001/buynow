import React from 'react'
import DealsProduct from '../Component/Top Deals/DealsProduct'
import RelatedGames from '../json/RelatedSearch.json'

import Gaming from '../Component/Home/Gaming'

const TopDeal = () => {
  return (
    <>
    
    <DealsProduct/>
    <Gaming Heading={"Related item your search"} data={RelatedGames} info={false}/>

    </>
  )
}

export default TopDeal
