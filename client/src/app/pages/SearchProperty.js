import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import RentSection from '../Component/RentSection';
import BuySection from '../Component/BuySection';
import PageAddress from '../Component/PageAddress';
import RentProperty from '../Component/RentProperty';

const SearchProperty = () => {
    const [showRentSection, setShowRentSection] = useState(true);

  return (
    <div>
        <Layout>
        <PageAddress main="Home" mainLink="/" category="Property Search" />
        <section className='relative'>
          <div className="absolute flex left-[11vw] top-0">
            <p className={`${showRentSection ? 'bg-white' : 'bg-gray-300'} text-vw w-7vw cursor-pointer hover:bg-gray-300 p-vw text-center`} onClick={() => setShowRentSection(true)} > Rent</p>
            <p className={`${showRentSection ? 'bg-gray-300' : 'bg-white'} text-vw ml-0.3vw w-7vw hover:bg-white cursor-pointer p-vw text-center`} onClick={() => setShowRentSection(false)} >Buy </p>
          </div>
          </section>
          <article className='flex mt-[0.5vw] flex-col justify-center items-center w-full p-2vw'>
            <div className="flex -ml-3vw justify-between items-start">
              {showRentSection ? <RentProperty /> : <BuySection />}
              <section className='w-full mt-vw max-w-[35vw] ml-vw'>
                {/* <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                    <img src={image} alt={`slide-${index}`} className="w-full" loading="lazy" />
                    </div>
                  ))}
                </Slider> */}
                <img src="images/landlord_0.jpg" alt="image" className='w-full'/>
              </section>
            </div>
          </article>
          </Layout>
        </div>
  )
}

export default SearchProperty