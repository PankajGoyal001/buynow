import React, { useState } from 'react'
import ArrowUp from "../../assets/svg/ArrowUp.svg";


const FQA = () => {
    const [rotate, setRotate] = useState(false);
    const [rotate1, setRotate1] = useState(false);
    const [rotate2, setRotate2] = useState(false);
    const [rotate3, setRotate3] = useState(false);
    const [rotate4, setRotate4] = useState(false);

    return (
        <>
            <section>
                <div className="container">
                    <div className="py-10 border-t">
                        <div className="flex flex-col gap-[14px] sm:gap-5">
                            <h2 className='Head'>FAQ.</h2>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-[10px] sm:gap-5 p-[15px]  sm:p-[50px] border rounded-[20px]">
                                    <button onClick={() => setRotate(!rotate)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                        <p className="text-gray-graystrong text-base tracking-[0.15px] font-inter_Medium text-left" > Sed Eu, Fames At Accumsan Vitae In Tristique Turpis.</p>
                                        <img className={`transition-all duration-200 ${rotate && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                    </button>
                                    {
                                        rotate && (<>
                                            <p className="text-gray-graydark text-left px-4 pt-2 pb-4">Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>
                                        </>)
                                    }
                                    <span className='border-b'></span>
                                    <button onClick={() => setRotate1(!rotate1)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                        <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" > Eget gravida sapien, volutpat blandit ut sem.</p>
                                        <img className={`transition-all duration-200 ${rotate1 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                    </button>
                                    {
                                        rotate1 && (<>
                                            <p className="text-gray-graydark text-left px-4 pt-2 pb-4">Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>
                                        </>)
                                    }
                                    <span className='border-b'></span>
                                    <button onClick={() => setRotate2(!rotate2)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                        <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" > Sed dui dolor commodo auctor tristique.</p>
                                        <img className={`transition-all duration-200 ${rotate2 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                    </button>
                                    {
                                        rotate2 && (<>
                                            <p className="text-gray-graydark text-left px-4 pt-2 pb-4">Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>
                                        </>)
                                    }
                                    <span className='border-b'></span>
                                    <button onClick={() => setRotate3(!rotate3)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                        <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" > Ac iaculis turpis maecenas tellus.</p>
                                        <img className={`transition-all duration-200 ${rotate3 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                    </button>
                                    {
                                        rotate3 && (<>
                                            <p className="text-gray-graydark text-left px-4 pt-2 pb-4">Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>
                                        </>)
                                    }
                                    <span className='border-b'></span>
                                    <button onClick={() => setRotate4(!rotate4)} className="flex justify-between p-5  items-center rounded-[30px]" >
                                        <p className="text-gray-graystrong text-base tracking-[0.15px] text-left font-inter_Medium" >Dignissim tortor vitae massa vel, id amet.</p>
                                        <img className={`transition-all duration-200 ${rotate4 && "rotate-180"}  opacity-20  group-hover:opacity-100`} src={ArrowUp} alt="arrow" />
                                    </button>
                                    {
                                        rotate4 && (<>
                                            <p className="text-gray-graydark text-left px-4 pt-2 pb-4">Consectetur adipiscing elit. Amet mauris eget vestibulum tempor, maecenas. Mattis egestas augue vitae in sed ut. Nec donec massa, at scelerisque tempor, elit vitae aliquam. Donec pulvinar sollicitudin feugiat diam iaculis pulvinar faucibus suspendisse tincidunt.</p>
                                        </>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FQA
