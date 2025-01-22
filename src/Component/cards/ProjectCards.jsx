import React from 'react'

const ProjectCards = ({head,image,color,shop,buy,array}) => {
  return (
    <>
     <div className="flex  items-center flex-col border rounded-[20px]">
                  <h3 className="p-5 text-gray-graystrong max-w-[230px] w-full font-inter_regular text-sm leading-6 tracking-[0.15px]">
                    {head}
                  </h3>
                  <img className="p-5"  src={`src/assets/Images/${image}`} alt="images" />
                  <img className="max-w-14 w-full " src={`src/assets/svg/${color}`} alt="images" />
                  <div className="mt-5  border-t">
                    <div className="flex items-center gap-[130px] justify-between  p-5">
                      <img className="bg-purple-Purple_dark p-[5px] rounded-full"  src={`src/assets/svg/${shop}`} alt="images"/>
                      <div className="flex py-[6px] px-2  gap-2">
                        <p>{buy}</p>
                        <img  src={`src/assets/svg/${array}`} alt="images"/>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default ProjectCards
