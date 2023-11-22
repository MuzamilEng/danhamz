import React from 'react'
import { rentContainer } from '../Data'
import { Icon } from '@iconify/react';


const RentSection = () => {
  return (
    <div className='bg-white w-full max-w-[38vw] m-vw'>
        <div className="flex flex-col justify-center items-center p-vw w-full">
            <section className='flex justify-between items-centers w-full p-0.5vw'>
                <p className='bg-purple-600 hover:bg-purple-700 cursor-pointer border-[1px] font-medium border-gray-400 text-center text-vw text-white p-vw w-17vw '>Student</p>
                <p className='hover:bg-purple-600 border-[1px] hover:text-white cursor-pointer text-vw border-gray-400 font-medium text-center text-blue-900 p-vw w-17vw '>Professional</p>
            </section>
            <section className='mt-0.5vw p-vw w-full'>
                <p className='text-black text-[0.9vw]'>How many bedrooms do you need?</p>
                <div className="grid grid-cols-9 mt-vw items-center gap-2 w-full max-w-[30vw]">
                            <p className='flex justify-center items-center bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-white'>Any</p>
                            {rentContainer?.[0]?.quantity.map((item, index) => (
                                <p key={index} className='flex justify-center hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-blue-900'>{item?.count}</p>
                            ))}
                </div>
                <div className="mt-vw -ml-vw flex items-center">
                    {rentContainer?.[0]?.container?.map((item, index) =>(
                       <select key={index} defaultValue="no preferences" style={{ outline: 'none' }} className='cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center text-black p-vw w-full max-w-[15vw]'>
                       <option value="no preferences" className='text-blue-950 focus:outline-none text-[0.9vw]' disabled hidden>No Preferences</option>
                       {item?.options?.map((option, index) => (
                        <option key={index} value={option?.id} className='text-start text-[0.9vw] focus:outline-none text-blue-950 p-vw' style={{ outline: 'none' }}>{option?.title}</option>
                       ))}
                   </select>
                    ) )}
                </div>
                <div className="flex ml-vw items-center">
                    <input type="checkbox" className="w-vw h-vw" />
                    <span className='text-[0.8vw] ml-0.5vw'>Show Let Agreed</span>
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

export default RentSection