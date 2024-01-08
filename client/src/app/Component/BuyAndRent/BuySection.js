import React from 'react'
import { buyContainer, rentContainer } from '../../Data'
import { Icon } from '@iconify/react';


const BuySection = () => {
    return (
        <div className='bg-white w-full max-w-[38vw]'>
            <div className="flex flex-col -ml-vw justify-center items-center p-vw w-full">
                <section className='mt-0.5vw p-vw w-full'>
                    <div className="">
                        {buyContainer?.map((item, index) => (
                            <section className='' key={index}>
                                <div className="flex items-center">
                                   <div className="flex">
                                   {item?.price?.map((price, index) => (
                                        <select key={index} className='cursor-pointer m-0.5vw border-[1px] font-medium border-gray-400 text-center text-blue-950 text-[0.7vw] p-[0.8vw] w-8vw' style={{ outline: 'none' }}>
                                            {price?.options?.map((option, index) => (
                                                <option key={index} value={option?.id} className='text-start text-[0.6vw] focus:outline-none text-blue-950 p-vw' style={{ outline: 'none' }}>{option?.title}</option>
                                            ))}
                                        </select>
                                    ))}
                                   </div>
                                    <div className="flex items-center">
                                    {item?.beds?.map((bed, index) => (
                                        <select key={index} className='cursor-pointer m-0.5vw border-[1px] font-medium border-gray-400 text-center text-blue-950 text-[0.7vw] p-[0.8vw] w-8vw' style={{ outline: 'none' }}>
                                        {bed?.options?.map((option, index) => (
                                            <option key={index} value={option?.id} className='text-start text-[0.6vw] focus:outline-none text-blue-950 p-vw' style={{ outline: 'none' }}>{option?.count}</option>
                                        ))}
                                    </select>
                                    ))}
                                    </div>
                                </div>
                                <div className="flex items-center mt-vw">
                                <div className="flex items-center">
                                    {item?.Type?.map((type, index) => (
                                        <select key={index} className='cursor-pointer m-0.5vw border-[1px] font-medium border-gray-400 text-center text-blue-950 text-[0.7vw] p-[0.8vw] w-17vw' style={{ outline: 'none' }}>
                                        {type?.options?.map((option, index) => (
                                            <option key={index} value={option?.id} className='text-start text-[0.6vw] focus:outline-none text-blue-950 p-vw' style={{ outline: 'none' }}>{option?.title}</option>
                                        ))}
                                    </select>
                                    ))}
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                    <div className="flex mt-2vw ml-vw items-center">
                        <input type="checkbox" />
                        <span className='text-[0.8vw] ml-0.5vw'>Include Sold STC</span>
                    </div>
                    <div className="flex items-end justify-end mr-vw">
                        <section className='flex justify-center mr-vw items-center bg-slate-300 p-vw'>
                            <Icon icon="solar:settings-linear" className='text-[1.3vw] text-white' />
                            <span className='text-white text-vw font-medium pl-[0.3vw] cursor-pointer'>Advanced search</span>
                        </section>
                        <section className='flex justify-center items-center bg-pink-400 p-vw'>
                            <Icon icon="solar:settings-linear" className='text-[1.3vw] text-white' />
                            <span className='text-white text-vw font-medium pl-[0.3vw] cursor-pointer'>Search</span>
                        </section>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default BuySection
