import React from 'react'
import CartProduct from '../Component/Cart/CartProduct'
import Gaming from '../Component/Home/Gaming'
import RelatedGames from '../json/RelatedSearch.json'



const Cart = () => {
  return (
    <>
    <CartProduct/>
    <Gaming Heading={"Related item your search"} data={RelatedGames} info={false}/>
    </>
  )
}

export default Cart
