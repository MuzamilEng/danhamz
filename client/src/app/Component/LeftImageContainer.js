import React from 'react'
import { Link } from "react-router-dom";

const LeftImageContainer = ({bg_color, title, info, img, title_color, info_color, button, btn_text, btn_bg, url, icon}) => {
  return (
    <div>
          <div className={`flex justify-center items-center w-full ${bg_color} p-2vw`}>
            <section className='w-full max-w-[85vw]'>
                <div className="flex justify-between items-start p-vw">
                  <section className='w-[40vw]'>
                    {icon && <span className='text-pink-700 text-8vw'>{icon}</span>}
                    <p className={` text-[1.9vw] ${title_color} font-semibold `}>{title}</p>
                    <p className={`${info_color} text-vw w-full max-w-[35vw]`}>{info}</p>
                    <div className="mt-2vw">
                    {button && <Link to={url} className={`p-vw ${btn_bg} ${btn_text} font-medium text-center`}>{button}</Link>}
                    </div>
                  </section>
                  <section className='w-[40vw]'>
                    <img src={img} alt="rmote" className='w-full h-[30vw]' />
                  </section>
                </div>
            </section>
            </div>
    </div>
  )
}

export default LeftImageContainer