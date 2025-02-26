import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = ({ classname, childname, imageclass, variant,href,image,classnameText}) => {
  // const dfdf = href === "undifjef" && "#"
  return (
    <>
      {variant === "solid" ? (<>
        <Link className='' to={`/${href}`}>
          <button className={` ${classname}flex gap-2 group-hover:cursor-pointer hover:scale-90 ease-in-out  duration-[0.7s] items-center bg-purple-Purple_dark rounded-[30px] py-2 px-[22px]`}>
            <img className={`${imageclass}`} src={`${image}`}  alt="cart-icon" />
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "New" ? (<>
        <Link to={`/${href}`}>
          <button className={` ${classname}flex gap-2 group-hover:cursor-pointer ease-in-out transition-all  duration-[0.7s] items-center bg-transparent rounded-[30px] py-[6px] px-2`}>
            <p  className='text-sm leading-[171%] font-inter_Medium tracking-[0.4px] text-white '>{childname}</p>
            <img className={`${imageclass} `} src={`${image}`}  alt="cart-icon" />
            
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "smart" ? (<>
        <Link className='' to={`/${href}`}>
          <button className={` ${classname}flex gap-2 group-hover:cursor-pointer w-full hover:scale-90 ease-in-out duration-[0.7s] items-center border border-[#42265980] rounded-[30px] py-2 px-[22px]`}>
            <img className={`${imageclass}`} src={`${image}`}  alt="cart-icon" />
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "Hard" ? (<>
        <Link className='' to={`/${href}`}>
          <button className={` ${classname} hover:cursor-pointer hover:scale-105 ease-in-out duration-[0.7s] hover:text-purple-Purple_dark hover:bg-white hover:border-purple-Purple_dark hover:border items-center text-[#FFFFFF] bg-purple-Purple_dark rounded-[30px] py-2 px-[22px]`}>
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "Simple" ? (<>
        <Link className='' to={`/${href}`}>
          <button className={` ${classname} hover:cursor-pointer hover:scale-90 text-purple-Purple_dark font-inter_Medium ease-in-out duration-500 items-center rounded-[30px] py-2 px-[22px]`}>
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

      {variant === "Normal" ? (<>
        <Link className='' to={`${href}`}>
          <button className={` ${classname} hover:cursor-pointer hover:scale-110 border-purple-Purple_dark border rounded-[30px] w-full hover:shadow-neutral-700 ease-in-out duration-500 items-center py-2 px-3 `}>
            {childname}
          </button>
        </Link>
      </>) : (<>

      </>)}

    </>
  )
}

export default Buttons
