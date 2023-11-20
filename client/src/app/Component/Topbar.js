import React from 'react'
import { topbar } from '../Data'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <>
    <div className="bg-[#f2f2f2] w-full flex justify-center items-center">
        <div className="w-full p-vw max-w-[80vw]">
            {topbar?.map((item, index) => {
                return <main key={index} className="flex justify-between">
                    <section className="flex items-center">
                        <Link to={item?.path} className="flex items-center">
                        <span className='text-pink-500 text-[1.3vw]'>{item?.icon}</span>
                        <span className='text-blue-800 font-semibold text-[0.9vw] ml-0.5vw'>{item?.phone}</span>
                        </Link>
                    </section>
                    <section className="flex justify-evenly items-center">
                        {item?.links?.map((link, index2) => {
                            return <Link to={link?.path} key={index2}>
                            <span className='text-blue-900 font-medium hover:underline ml-vw text-[.7vw]'>{link?.title}</span>
                            </Link>
                        })}
                        <div className="ml-2vw">
                            <Link to="/login" className="flex items-center p-vw text-center bg-pink-400 text-white">
                            <Icon icon="ei:user" className="text-white text-[1.4vw] ml-0.4vw" />
                            <span className="text-white font-semibold text-vw">Log in</span>
                            </Link>
                        </div>
                    </section>
                </main>
            })}
        </div>
    </div>
    </>
  )
}

export default Topbar