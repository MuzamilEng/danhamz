import React, { useState } from 'react'
import { rentContainer1, } from '../Data'
import CustomDropdown from './CustomDropdown';

  

const RentProperty = () => {
  return (
    <div className='bg-white w-full max-w-[38vw] h-full m-vw'>
        <div className="flex flex-col justify-center items-center p-vw w-full">
            <section className='flex justify-between items-centers w-full p-0.5vw'>
                <p className='bg-purple-800 hover:bg-purple-800 cursor-pointer border-[1px] font-medium border-gray-400 text-center text-vw text-white p-vw w-17vw '>Student</p>
                <p className='hover:bg-purple-800 border-[1px] hover:text-white cursor-pointer text-vw border-gray-400 font-medium text-center text-blue-900 p-vw w-17vw '>Professional</p>
            </section>
            {rentContainer1?.map((item, index) => (
          <section className="mt-0.5vw p-vw w-full" key={index}>
            <p className="text-black text-[0.9vw]">{item?.noOfbeds}</p>
            <div className="grid grid-cols-9 mt-vw items-center gap-2 w-full max-w-[30vw]">
              <p className="flex justify-center items-center bg-purple-800 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-white">
                Any
              </p>
              {item?.quantity?.map((item, index) => (
                <p
                  key={index}
                  className="flex justify-center hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-blue-900"
                >
                  {item?.count}
                </p>
              ))}
            </div>
            <div className="mt-vw -ml-vw grid grid-cols-2">
              {item?.container?.map((item2, index) => (
                <div key={index} className="w-full">
                  <label className="text-[0.7vw] ml-vw text-gray-900" htmlFor={item2?.title}>
                    {item2?.title}
                  </label>
                  {item2?.type === 'select' && (
                    <select
                      defaultValue="no preferences"
                      style={{ outline: 'none' }}
                      className="-mt-[0.02vw] cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center text-black p-vw w-full max-w-[15vw]"
                    >
                      {item2?.options?.map((option, index) => (
                        <option
                          key={index}
                          value={option?.value}
                          className="text-start text-[0.9vw] focus:outline-none text-blue-950 p-vw"
                          style={{ outline: 'none' }}
                        >
                          {option?.title}
                        </option>
                      ))}
                    </select>
                  )}
                  {item2?.type === 'checkbox' && (
                    <div className="w-full">
                        <CustomDropdown options={item2?.options} />
                    </div>
                  )}
                </div>
              ))}
            </div>
              <article className="w-full">
              <label className="text-[0.7vw] text-gray-900" htmlFor="">Available From</label>
              <select
                      defaultValue="no preferences"
                      style={{ outline: 'none' }}
                      className="-mt-[0.2vw] -ml-[0.2vw] cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center max-w-[33vw] text-black p-vw w-full"
                    >
                      {item?.availableOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option?.value}
                          className="text-start text-[0.9vw] focus:outline-none text-blue-950 p-vw"
                          style={{ outline: 'none' }}
                        >
                          {option?.title}
                        </option>
                      ))}
                    </select>
              </article>
          </section>
        ))}
        </div>
    </div>
  )
}

export default RentProperty