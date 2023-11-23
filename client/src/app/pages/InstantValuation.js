import React from 'react'
import { instantValuation } from '../Data'

const InstantValuation = () => {
  return (
    <div>
        <main className='w-full h-full flex-col flex justify-center'>
            {instantValuation?.map((item, index) => (
                <article key={index} className='w-full relative'>
                    <img src={item?.img} alt={item?.title} className='w-full h-full z-50' />
                    <section className='fixed z-40 top-0 left-1/2 transform -translate-x-1/2 bg-gray-200 bg-opacity-75'>
                        <div className="w-full max-w-[50vw] p-5vw">
                            <h1 className='text-purple-950 text-[2.5vw] text-center font-bold'>{item?.title}</h1>
                            <h3 className='text-purple-950 text-[2.1vw] mt-vw text-center font-medium'>{item?.online}</h3>
                            <p className='text-gray-700 text-vw mt-vw text-center w-full max-w-[43vw]'>{item?.info}</p>
                            <div className="flex justify-center mt-[1.5vw] items-center">
                                <section className="flex text-center relative focus:outline-none border-[1px] border-gray-900 bg-white rounded-full w-full max-w-[15vw]">
                                    <span className='text-black text-vw absolute top-[0.7vw] left-vw'>{item?.icon}</span>
                                    <input type="text" className='text-vw text-center focus:outline-none text-black p-0.5vw border-none rounded-full' />
                                </section>
                                <section className="flex ml-2vw">
                                    <button className='text-white text-vw bg-purple-950 text-center p-0.5vw rounded-full w-15vw'>{item?.location}</button>
                                </section>
                            </div>
                            <div className="col-center mt-2vw">
                                <div className="grid grid-cols-2 items-center">
                                    {item?.choose?.map((item, index) => (
                                        <div key={index} className="flex justify-center m-vw items-center">
                                            <select className='bg-white text-vw border-[1px] border-gray-500 text-purple-950 p-0.5vw rounded-full w-15vw'>
                                                {item?.quantity?.map((item, index) => (
                                                    <option key={index} value={item?.value}>{item?.count}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-center mt-vw">
                            {item?.typeOfval?.map((item, index) => (
                                        <div key={index} className="flex justify-center m-vw items-center">
                                            <select className='bg-white text-vw border-[1px] border-gray-500 text-purple-950 p-0.5vw rounded-full w-15vw'>
                                                {item?.quantity?.map((item, index) => (
                                                    <option key={index} value={item?.value}>{item?.count}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                    <button className='text-white mt-2vw text-vw bg-purple-950 text-center p-0.5vw rounded-full w-15vw'>Submit</button>
                                    <p className='text-black cursor-pointer text-[0.8vw] mt-2vw'>Privacy Policy | Terms and Conditions | Cookie Policy</p>
                            </div>
                        </div>
                    </section>

                </article>
            ))}
        </main>
    </div>
  )
}

export default InstantValuation