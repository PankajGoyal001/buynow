import React from 'react'
import DealsProduct from '../Component/Top Deals/DealsProduct'
import WishlistData from "../json/Wishlist.json";
import Practice from './Practice';

const Wishlist = () => {
  return (
    <>
    <DealsProduct Data={WishlistData} Title={"My Wishlist"} Name={"Wishlist"}/>
    <Practice/>
    </>
  )
}

export default Wishlist
