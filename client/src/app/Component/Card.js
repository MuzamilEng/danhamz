import React from 'react'
import { Icon } from "@iconify/react";


const Card = ({title, info, para, question, desc, number}) => {
  return (
    <>
                <section className={`bg-[#fff] m-vw border-t-[3px] border-blue-900 p-vw w-full max-w-[19vw] h-28vw`}>
                { number &&  <h1 className='w-full row-center max-w-[15vw] h-[10vw] m-vw bg-purple-950 text-center text-pink-400 text-3vw font-bold'>{number}</h1>} 
                   <h1 className="text-blue-900 text-[1.5vw] text-medium">{title}</h1>
                  <p className="text-gray-500 font-medium text-vw w-full mt-vw max-w-[17vw]">{info}</p>
                  <p className="text-gray-900 text-vw w-full mt-vw max-w-[17vw]">{para}</p>
                  <p className="text-pink-300 text-vw font-semibold mt-vw w-full max-w-[17vw]">{question}</p>
                  <div className="flex items-start mt-vw">
                    {desc && <Icon icon="mdi:tick" className="text-vw font-semibold text-blue-800" />}
                    <p className="text-gray-900 text-vw w-full ml-vw max-w-[17vw]">{desc}</p>
                  </div>
                </section>
        </>
  )
}

export default Card