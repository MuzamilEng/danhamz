import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RentSection from '../Component/RentSection'
import { approach, banner, investors, lettingProperties, news, partnerBanner, properties, ratings, studentHomes, toggleInfo, welcome } from '../Data';
import Category from '../Component/Category';
import Property from '../Component/Property';
import Reviews from '../Component/Reviews';
import LettingProperty from '../Component/LettingProperty';
import Services from '../Component/Services';
import News from '../Component/News';
import BuySection from '../Component/BuySection';
import Layout from '../Layout/Layout';
import LeftImageContainer from '../Component/LeftImageContainer';

const Home = () => {
  const [showRentSection, setShowRentSection] = useState(true);
  const images = ["images/home.jpg", "images/main.jpg", "images/home.jpg"];

  const settings = { dots: true, arrows: false, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };
  return (
    <div>
      <Layout>
          <section className='relative'>
          <div className="absolute flex left-[11.5vw] top-0">
            <p className={`${showRentSection ? 'bg-white' : 'bg-gray-300'} text-vw w-7vw cursor-pointer hover:bg-gray-300 p-vw text-center`} onClick={() => setShowRentSection(true)} > Rent</p>
            <p className={`${showRentSection ? 'bg-gray-300' : 'bg-white'} text-vw ml-0.3vw w-7vw hover:bg-white cursor-pointer p-vw text-center`} onClick={() => setShowRentSection(false)} >Buy </p>
          </div>
          </section>
          <article className='flex mt-[0.5vw] flex-col justify-center items-center w-full p-2vw'>
            <div className="flex -ml-3vw justify-between items-start">
              {showRentSection ? <RentSection /> : <BuySection />}
              <section className='w-full mt-vw max-w-[35vw] ml-vw'>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                    <img src={image} alt={`slide-${index}`} className="w-full" loading="lazy" />
                    </div>
                  ))}
                </Slider>
              </section>
            </div>
          </article>
          <article className='w-full bg-[#ffff] flex justify-center items-center p-4vw'>
            {banner?.map((item, index) => (
              <section className='flex justify-between items-start' key={index}>
                <div className="w-full max-w-[40vw]">
                  <h2 className='text-blue-900 text-[1.5vw] font-semibold w-[35vw]'>{item?.title}</h2>
                  <p className='text-blue-900 font-medium text-[1.4vw]'>{item?.welcome}</p>
                </div>
                <div className="w-full max-w-[40vw] ">
                  <p className='text-blue-900 text-[1.4vw] '>{item?.info}</p>
                  <p className='text-blue-900 mt-vw text-[1vw]'>{item?.para}</p>
                </div>
              </section>
            ))}
          </article>
          <Category />
          {/* approach to sale */}
          <div className="w-full bg-white p-3vw flex justify-center items-center">
            {approach?.map((item, index) => (
              <section className='flex justify-between items-center' key={index}>
                <div className="w-full max-w-[40vw]">
                  <h2 className='text-blue-950 text-[1.9vw] font-medium w-full max-w-[35vw]'>{item?.title}</h2>
                  <p className='text-black text-vw'>{item?.info}</p>
                  <p className='text-black mt-vw text-vw'>{item?.para}</p>
                  <section className="flex -ml-vw mt-vw items-center">
                    <Link to="/" className="bg-pink-400 p-vw m-vw text-white font-medium text-[0.8vw] text-center">Selling with Danhamz</Link>
                    <Link to="/" className="bg-purple-700 m-vw text-center p-vw font-medium text-[0.8vw] text-white">Free Instant Valuation</Link>
                  </section>
                </div>
                <div className="w-full max-w-[40vw]">
                  <iframe
                    className='text-blue-900 mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://www.youtube.com/embed/lbqll5HUPog"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            ))}
          </div>
          {/* properties */}
          <div className="w-full flex-col bg-gray-200 p-2vw flex justify-center items-center">
            <h1 className='text-blue-950 text-[1.5vw] text-center capitalize text-medium'>Latest properties for Sale</h1>
            <div className="grid grid-cols-4 gap-3 mt-2vw">
              {properties?.map((item, index) => (
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.pics?.[0]?.quantity} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bed_rooms} img={item?.img} />
              ))}
            </div>
            <Link to="/" className="bg-pink-400 mt-2vw block p-vw m-vw text-white font-medium text-[0.8vw] text-center">Start your search</Link>
          </div>
          {/* reviews */}
          <div className="slider-container bg-gray-200">
            <h1 className='text-center text-blue-900 text-[1.9vw] text-semibold'>Customer Reviews</h1>
            <div className="slider m-vw">
              {ratings?.map((item, index) => (
                <div key={index} className="review-item m-vw">
                  <Reviews ratings={item?.icon} title={item?.title} para={item?.para} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
          {/* investors */}
          <section className='w-full flex justify-center items-center bg-white p-2vw'>
            {investors?.map((item, index) => (
              <div className="flex justify-between p-2vw items-center" key={index}>
                <img src={item?.img} alt={item?.title} className='w-30vw' />
                <div className="w-full max-w-[40vw]">
                  <h2 className='text-blue-950 text-[1.9vw] font-medium'>{item?.title}</h2>
                  <p className='text-black text-vw w-full max-w-[35vw]'>{item?.info}</p>
                  <div className="mt-2vw">
                    <Link to="/" className="bg-pink-400 p-vw text-white font-medium text-[0.8vw] text-center">Read more</Link>
                  </div>
                </div>
              </div>
            ))}
          </section>
          {/* marketing parteners */}
          <section className='col-center bg-gray-200 p-3vw'>
            <h1 className='text-blue-950 text-2vw font-semibold'>Merketing partners</h1>
            <div className="flex mt-2vw justify-evenly items-center">
            {partnerBanner?.map((item, index) => (
                <img src={item?.img} alt={index} className='w-full ml-4vw max-w-[10vw]'/>
            ))}
            </div>
        </section>
          {/* students homes  */}
          <div>
              {studentHomes?.map((item, index) => (
                  <LeftImageContainer key={index} img={item?.img} info={item?.info} icon={item?.icon} title={item?.title} button={item?.button} url={item?.url} bg_color={item?.bg_color} title_color={item?.title_color} info_color={item?.info_color} btn_bg={item?.btn_bg} btn_text={item?.btn_text}  />
              ))}
          </div>
          {/* letting properties */}
          <div className="flex flex-col justify-center items-center w-full p-3vw">
            <h1 className='text-black text-2vw font-medium capitalize'>Lates Properties to Let</h1>
            <div className="grid grid-cols-4 gap-2 mt-2vw">
              {lettingProperties?.map((item, index) => (
                //  const LettingProperty = ({tag, icon, quantity, weekPrice, location, monthPrice, bedRooms, img, bed_icon, available, furnished_icon,furnished,bill_icon, bills, date}) => {          // 
                <LettingProperty key={index} bedRooms={item?.bedRooms} available={item?.available} icon={item?.icon} img={item?.img} quantity={item?.quantity} weekPrice={item?.weekPrice} monthPrice={item?.monthPrice} bed_icon={item?.bed_icon} location={item?.location} furnished={item?.furnished} furnished_icon={item?.furnished_icon} bill_icon={item?.bill_icon} bills={item?.bills} date={item?.date} />
              ))}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-purple-900 p-vw text-white font-medium text-[0.8vw] text-center">Property search</Link>
            </div>
          </div>
          {/* welcome */}
          <div className="w-full bg-white p-3vw flex justify-center items-center">
            {welcome?.map((item, index) => (
              <section className='flex justify-between items-center' key={index}>
                <div className="w-full max-w-[40vw]">
                  <h2 className='text-blue-950 text-[1.9vw] font-medium w-full max-w-[35vw]'>{item?.title}</h2>
                  <p className='text-black text-vw'>{item?.info}</p>
                  <p className='text-black mt-vw text-vw'>{item?.para}</p>
                </div>
                <div className="w-full max-w-[40vw] ml-2vw">
                  <iframe
                    className='text-blue-900 mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://www.youtube.com/embed/lbqll5HUPog"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </section>
            ))}
          </div>
          {/* services */}
          <div className="flex justify-center p-vw w-full items-center flex-col">
            <div className="w-full max-w-[55vw] p-2vw">
              <h1 className='text-blue-950 text-[2vw] w-full max-w-[47vw] text-center'>Full-Service Estate & Letting Agents in Leeds</h1>
              <p className="text-center w-full max-w-[50vw] p-vw text-black text-vw">Whatever your real estate needs, HOP is here to fulfil them for you. You will find working with our friendly, knowledgeable estate agents a breeze, so give us a call and let us know how we can help.</p>
              <article className="mt-2vw">
                {toggleInfo?.map((item, index) => (
                  <Services key={index} title={item?.title} info={item?.info} />
                ))}
              </article>
            </div>
          </div>
          {/* news */}
          <div className="w-full flex-col bg-white p-3vw flex justify-center items-center">
            <h1 className='text-blue-950 text-[1.8vw]'>Latest News</h1>
            <div className="grid grid-cols-3 gap-3 mt-2vw p-2vw">
              {news?.map((item, index) => {
                return <News img={item?.img} key={index} title={item?.title} date={item?.date} investment={item?.investment} news={item?.news} />
              })}
            </div>
            <div className="mt-2vw">
              <Link to="/" className="bg-purple-900 p-vw text-white font-medium text-[0.8vw] text-center">View all news</Link>
            </div>
            {/* icons-logos */}
            <div className="flex justify-evenly mt-2vw p-2vw items-center">
              <section className="flex text-2vw font-bold text-blue-950 ml-5vw">StuRenst</section>
              <section className="flex text-2vw font-bold text-blue-950 ml-5vw">PrimeLocation.com</section>
              <section className="flex text-2vw font-bold text-blue-950 ml-5vw">HomeSearch</section>
              <section className="flex text-2vw font-bold text-blue-950 ml-5vw">One Deme</section>
            </div>
          </div>
      </Layout>
    </div>
  )
}

export default Home