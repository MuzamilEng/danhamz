import React from 'react'
import { Icon } from '@iconify/react';

const Property = ({tag, icon, quantity, price, location, icon2, bed_rooms, img}) => {
  return (
    <div>
        <main className='w-full max-w-[20vw] m-vw'>
                <main className='w-full relative'>
            <article className="relative w-full">
                <div className='relative'>
                    <div className=' absolute top-0 left-0 p-2vw w-[7vw] h-[6vw] text-white clip-triangle'></div>
                    <p className='absolute top-0 left-0 p-2vw text-vw text-white'>{tag}</p>
                </div>
                <img src={img} alt={tag} className='w-full h-[15vw]'/>
                <section className='flex absolute bottom-0 right-0 items-center border-[1px] border-gray-300 bg-white p-vw'>
                    <span className='text-[1.2vw]'>{icon}</span>
                    <span className='text-[0.6vw] ml-0.5vw text-black'>{quantity}</span>
                </section>
            </article>
            <section className='p-2vw bg-white'>
                <p className='text-blue-900 text-[1.6vw] font-bold'>{price}</p>
                <p className='text-black text-vw'>{location}</p>
                <div className="flex w-fit mt-2vw items-center p-vw bg-gray-300">
                    <span className='text-blue-800 text-[0.8vw]'>{icon2}</span>
                    <span className='text-black ml-0.5vw text-[0.9vw]'>{bed_rooms}</span>
                </div>
                <section className="flex items-center mt-2vw">
                    <span className='text-blue-900 text-vw'>More details</span>
                    <Icon icon="ep:arrow-right-bold" className='text-vw text-blue-900'/>
                </section>
            </section>
                </main>
        </main>
    </div>
  )
}

export default Property