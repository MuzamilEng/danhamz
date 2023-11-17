import React from 'react'

const Reviews = ({ratings, title, para, name}) => {
  return (
    <div>
        <main className="m-vw bg-white cursor-pointer p-2vw w-[25vw] h-[17vw]">
            <div className="">
           <section className="flex">
           <span className='text-yellow-400 text-[1.2vw]'>{ratings}</span>
            <span className='text-yellow-400 text-[1.2vw]'>{ratings}</span>
            <span className='text-yellow-400 text-[1.2vw]'>{ratings}</span>
            <span className='text-yellow-400 text-[1.2vw]'>{ratings}</span>
            <span className='text-yellow-400 text-[1.2vw]'>{ratings}</span>
           </section>
            <p className='text-black mt-vw font-semibold'>{title}</p>
            <p className='text-black mt-vw text-[1vw]'>{para}</p>
            <p className='mt-vw text-vw text-gray-400'>{name}</p>
            </div>
        </main>
    </div>
  )
}

export default Reviews