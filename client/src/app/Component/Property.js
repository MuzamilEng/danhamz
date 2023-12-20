import React from 'react'
import { Icon } from '@iconify/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Property = ({tag, icon, quantity, price, location, icon2, bed_rooms, img, img2, img3, img4, img5 }) => {
    const settings = { dots: false, arrows: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };

  return (
    <div>
        <main className='w-full max-w-[20vw] m-vw'>
                <main className='w-full relative'>
            <article className="relative w-full">
                <div className='relative'>
                    <div className=' absolute top-0 left-0 p-2vw w-[7vw] h-[6vw] text-white clip-triangle'></div>
                    <p className='absolute top-0 left-0 p-2vw text-vw text-white'>{tag ? tag : 'Solt TCS'}</p>
                </div>
                <section className='w-full'>
                <Slider {...settings}>
                <img src={img} alt={tag} className='w-full h-[15vw]'/>
                <img src={img2} alt={tag} className='w-full h-[15vw]'/>
                <img src={img3} alt={tag} className='w-full h-[15vw]'/>
                <img src={img4} alt={tag} className='w-full h-[15vw]'/>
                <img src={img5} alt={tag} className='w-full h-[15vw]'/>
                 
                </Slider>
              </section>
                <section className='flex absolute bottom-0 right-0 items-center border-[1px] border-gray-300 bg-white p-vw'>
                    <Icon icon="ion:camera-outline" className='text-[1.2vw]' />
                    <span className='text-[0.6vw] ml-0.5vw text-black'>{quantity} pics</span>
                </section>
            </article>
            <section className='p-2vw bg-white'>
                <p className='text-blue-900 text-[1.6vw] font-bold'>{price}</p>
                <p className='text-black text-vw'>{location}</p>
                <div className="flex w-fit mt-2vw items-center p-vw bg-gray-300">
                    {/* <span className='text-blue-800 text-[0.8vw]'>{icon2}</span> */}
                    <Icon icon="uil:bed" className='text-[1.2vw]' />
                    <span className='text-black ml-0.5vw text-[0.9vw]'>{bed_rooms} bedrooms</span>
                </div>
                <section className="flex items-center mt-2vw">
                    <span className='text-blue-900 text-vw'>More details</span>
                    <Icon icon="ep:arrow-right-bold" className='text-vw text-blue-900'/>
                </section>
            </section>
                </main>
        </main>
    </div>
  )
}

export default Property