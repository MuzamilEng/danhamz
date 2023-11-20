import React from 'react'
import { footer } from '../Data'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='pb-15vw'>
    <footer className="w-full bg-white flex justify-center items-center p-3vw">
      <main className='border-t-[1.7px] w-full max-w-[80vw] p-2vw border-blue-900'>
        <div className="flex justify-evenly items-start">
          {footer?.map((item, index)=> {
            return <section className={`${item?.title ? 'w-18vw' : 'w-25vw'}`} key={index}>
              <h1 className='text-blue-950 text-[1.2vw]'>{item?.title}</h1>
              <img src={item?.logo} alt="" />
              <div className="">
                {item?.Links?.map((link, index)=> (
                  <main className='' key={index}>
                    <Link to={link?.url} className='flex mt-0.3vw hover:underline items-center'>
                      <span className='text-vw text-blue-900'>{link?.icon}</span>
                      <span className={`text-[.9vw] ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
                <h1 className='text-blue-950 mt-vw text-[1.2vw]'>{item?.find}</h1>
                {item?.social?.map((link, index)=> (
                  <main className='' key={index}>
                    <Link to={link?.url} className='flex mt-0.3vw hover:underline items-center'>
                      <span className='text-vw text-blue-900'>{link?.icon}</span>
                      <span className={`text-[.9vw] ${link?.icon ? 'ml-vw' : ''} `}>{link?.title}</span>
                    </Link>
                  </main>
                ))}
              </div>
            </section>
          })}
        </div>
      </main>
    </footer>
        <div className="w-full p-2vw bg-purple-900">
          <p className='text-[0.8vw] text-white'>© Home of Property Ltd trading as HOP 2022 All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer