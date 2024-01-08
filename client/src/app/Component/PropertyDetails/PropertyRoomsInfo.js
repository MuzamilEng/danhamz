import React, { useState } from 'react'
import SocialShare from '../SocialShare'
import { Icon } from '@iconify/react';

const PropertyRoomsInfo = ({price, info, available, furnished, bills, bedrooms, bathrooms, reception, weekPrice, monthPrice}) => {
    const [share, setShare] = useState(false);
    return (
    <section className='p-0.5vw pb-vw bg-white w-full max-w-[27vw] ml-vw'>
    <div className="flex p-0.5vw ml-vw items-center">
        {price ? <>
            <p className='text-blue-900 text-[1.9vw] italic mt-2vw font-bold'>{price}</p>
        </>:
         <>
        <section className='p-vw border-r-[1px] border-gray-700'>
        <p className='text-blue-900 text-[1.6vw] font-bold'>${weekPrice}</p>
        <p className='text-gray-400 text-vw'>per week</p>
        </section>
        <section className='ml-4vw'>
        <p className='text-blue-900 text-[1.6vw] font-bold'>${monthPrice}</p>
        <p className='text-gray-400 text-vw'>per month</p>
        </section>
        </>}
    </div>
    <p className='text-black ml-vw font-medium text-[1.2vw]'>{info}</p>
   <span className="col-center">
   <div className="grid grid-cols-3 w-full max-w-[29vw] items-start gap-2 -ml-2vw">
   {available && <div className="flex w-[8vw] h-3vw m-vw items-center p-vw bg-blue-600">
        <span className='text-white ml-0.5vw text-[0.7vw]'>{available}</span>
    </div>}
  {furnished &&  <div className="flex w-[8vw] m-vw h-3vw items-center p-vw bg-blue-600">
        <span className='text-white text-vw'><Icon icon="cil:sofa" /></span>
        <span className='text-white ml-0.5vw text-[0.8vw]'>{furnished}</span>
    </div>}
   {bills && <div className="flex w-[8vw] h-[3vw] m-vw items-center p-vw bg-pink-700">
        <span className='text-white ml-0.5vw text-vw'><Icon icon="ion:bulb-outline" /></span>
        <span className='text-white ml-0.5vw text-[0.6vw]'>{bills}</span>
    </div>}
    {bedrooms && <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
        <span className='text-gray-600 text-vw'><Icon icon="tabler:bed" /></span>
        <span className='text-gray-600 ml-0.5vw text-[0.7vw]'>{bedrooms} Bedrooms</span>
    </div>}
   {bathrooms && <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
        <span className='text-gray-600 text-vw'><Icon icon="majesticons:bath-shower-line" /></span>
        <span className='text-gray-600 ml-0.5vw text-[0.7vw]'>{bathrooms} Bathrooms</span>
    </div>}
   {reception && <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
        <span className='text-gray-600 text-vw'><Icon icon="cil:sofa" /></span>
        <span className='text-gray-600 ml-0.5vw text-[0.7vw]'>{reception} Reception</span>
    </div>}
    </div>
   </span>
    <div className="mt-2vw">
    {!share ?
    <div className="flex justify-center w-full max-w-[12vw] items-center p-vw m-vw cursor-pointer bg-purple-950" onClick={() => setShare(!share)}>
        <span className='text-white text-[0.8vw]'>Share this property</span>
        <Icon icon="uil:share" className='text-white ml-0.5vw text-[0.8vw]' />
    </div>
    : <SocialShare fbURL={'https://www.facebook.com'} twURL={'https://www.twitter.com'} waURL={'https://www.whatsapp.com'} hideShare={() => setShare(!share)}/>}
    </div>
</section>
  )
}

export default PropertyRoomsInfo