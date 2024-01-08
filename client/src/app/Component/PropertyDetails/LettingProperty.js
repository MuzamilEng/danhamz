import React from 'react'
import { Icon } from '@iconify/react';

const LettingProperty = ({tag, icon, quantity, weekPrice, location, monthPrice, bedRooms, img, available,furnished, bills, date}) => {
  return (
    <div>
        <main className='w-full max-w-[20vw] m-vw'>
                <main className='w-full relative'>
            <article className="relative w-full">
                <img src={img} alt={tag} className='w-full h-[13vw]'/>
                <section className='flex absolute bottom-0 right-0 items-center border-[1px] border-gray-300 bg-white p-0.5vw'>
                    <span className='text-[1.2vw]'>{icon}</span>
                    <span className='text-0.6vw ml-0.5vw text-black'>{quantity}</span>
                </section>
            </article>
            <section className='p-0.5vw bg-white'>
                <div className="flex p-0.5vw ml-vw items-center">
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
                <div className="flex w-[8vw] h-3vw m-vw items-center p-vw bg-blue-600">
                    <span className='text-white text-[0.8vw]'>{date}</span>
                    <span className='text-white ml-0.5vw text-[0.7vw]'>{available? 'Available' : 'Not Available'}</span>
                </div>
                <div className="flex w-[8vw] m-vw h-3vw items-center p-vw bg-blue-600">
                <Icon icon="mdi:sofa-single-outline" className='text-white text-[1.2vw]' />
                    <span className='text-white ml-0.5vw text-[0.7vw]'>{furnished}</span>
                </div>
                {bills && <div className="flex w-[8vw] h-[3vw] m-vw items-center p-vw bg-blue-600">
                <Icon icon="game-icons:light-bulb" className='text-white text-[1.2vw]' />
                    <span className='text-white ml-0.5vw text-[0.6vw]'>{bills}</span>
                </div>}
                <div className="flex items-center w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
                    <Icon icon="uil:bed" className='text-gary-500 text-[1.2vw]' />
                    <span className='text-gray-800 ml-0.5vw text-[0.6vw]'>{bedRooms} bedrooms</span>
                </div>
                </div>
            </section>
                </main>
        </main>
    </div>
  )
}

export default LettingProperty