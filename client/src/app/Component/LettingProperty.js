import React from 'react'
import { Icon } from '@iconify/react';

const LettingProperty = ({tag, icon, quantity, weekPrice, location, monthPrice, bedRooms, img, bed_icon, available, furnished_icon,furnished,bill_icon, bills, date}) => {
  return (
    <div>
        <main className='w-full max-w-[20vw] m-vw'>
                <main className='w-full relative'>
            <article className="relative w-full">
                <img src={img} alt={tag} className='w-full h-[15vw]'/>
                <section className='flex absolute bottom-0 right-0 items-center border-[1px] border-gray-300 bg-white p-vw'>
                    <span className='text-[1.2vw]'>{icon}</span>
                    <span className='text-0.6vw ml-0.5vw text-black'>{quantity}</span>
                </section>
            </article>
            <section className='p-vw bg-white'>
                <div className="flex p-vw items-center">
                    <section className='p-vw border-r-[1px] border-gray-700'>
                    <p className='text-blue-900 text-[1.6vw] font-bold'>{weekPrice}</p>
                    <p className='text-gray-400 text-vw'>per week</p>
                    </section>
                    <section className='ml-vw'>
                    <p className='text-blue-900 text-[1.6vw] font-bold'>{monthPrice}</p>
                    <p className='text-gray-400 text-vw'>per month</p>
                    </section>
                </div>
                <p className='text-black ml-vw text-vw'>{location}</p>
                <div className="grid grid-cols-2 items-start gap-2 -ml-vw">
                <div className="flex w-[8vw] h-3vw m-vw items-center p-vw bg-purple-700">
                    <span className='text-white text-[0.8vw]'>{date}</span>
                    <span className='text-white ml-0.5vw text-[0.7vw]'>{available}</span>
                </div>
                <div className="flex w-[8vw] m-vw h-3vw items-center p-vw bg-purple-700">
                    <span className='text-white text-[0.8vw]'>{furnished_icon}</span>
                    <span className='text-white ml-0.5vw text-[0.7vw]'>{furnished}</span>
                </div>
                {bills && <div className="flex w-[8vw] h-[3vw] m-vw items-center p-vw bg-purple-700">
                    <span className='text-white text-[0.8vw]'>{bill_icon}</span>
                    <span className='text-white ml-0.5vw text-[0.6vw]'>{bills}</span>
                </div>}
                <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
                    <span className='text-gary-500 text-[1.2vw]'>{bed_icon}</span>
                    <span className='text-gray-500 ml-0.5vw text-[0.6vw]'>{bedRooms}</span>
                </div>
                </div>
            </section>
                </main>
        </main>
    </div>
  )
}

export default LettingProperty