import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({ classname, childname, imageclass, variant }) => {
  return (
    <>
      {variant === "solid" ? (<>
        <Link className='' to={"/cart"}>
          <button className={` ${classname}flex gap-2 group-hover:cursor-pointer hover:scale-90 ease-in-out  duration-[0.7s] items-center bg-purple-Purple_dark rounded-[30px] py-2 px-[22px]`}>
            <img className={`${imageclass}`} src="src/assets/svg/cart.svg " alt="cart-icon" />
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "Hard" ? (<>
        <Link className='' to={"/cart"}>
          <button className={` ${classname} hover:cursor-pointer hover:scale-90 ease-in-out duration-[0.7s] items-center text-[#FFFFFF] bg-purple-Purple_dark rounded-[30px] py-2 px-[22px]`}>
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "Simple" ? (<>
        <Link className='' to={"/cart"}>
          <button className={` ${classname} hover:cursor-pointer hover:scale-90 ease-in-out duration-500 items-center rounded-[30px] py-2 px-[22px]`}>
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

    </>
  )
}

export default Buttons
