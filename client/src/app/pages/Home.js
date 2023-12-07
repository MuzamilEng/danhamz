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
import RatingsContainer from '../Component/RatingsContainer';

const Home = () => {
    const [showRentSection, setShowRentSection] = useState(true);
  const images = ["images/home.jpg", "images/main.jpg", "images/home.jpg"];

  console.log('promise1');
  setTimeout(() => {
    console.log('promise2');
  }, 1000)

  console.log('Promise3');

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
            <h1 className='text-blue-950 text-[1.9vw] text-center capitalize font-medium'>Latest properties for Sale</h1>
            <div className="grid grid-cols-4 gap-3 mt-2vw">
              {properties?.map((item, index) => (
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.pics?.[0]?.quantity} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bed_rooms} img={item?.img} />
              ))}
            </div>
            <Link to="/" className="bg-pink-400 mt-2vw block p-vw m-vw text-white font-medium text-[0.8vw] text-center">Start your search</Link>
          </div>
          {/* reviews */}
         <div className="w-full">
          <RatingsContainer />
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
            <h1 className='text-blue-950 text-2vw font-medium capitalize'>Latest Properties to Let</h1>
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


  
// /* home page starts */ ----------1
// .hero-box{margin:0 0 60px 0}
// /* .hero-box .bg-box{width:100%;height:100vh;float:left;margin:0;padding:0;} */
// /* .hero-box .bg-box .slide{width:100%;height:100vh;float:left;margin:0;padding:0;} */
// /* .hero-box .bg-box .slide figure{width:100%;height:100vh;float:left;margin:0;padding:0;background-repeat:no-repeat;background-size:cover;background-position:center center;} */
// /* .hero-box .bg-box .slide figure img{display:none;} */
// /* .hero-box .text-box{width:100%;height:100vh;margin:0;padding:0;display:flex;align-items:center;position:absolute;top:0;left:0;} */
// /* .hero-box .text-box .tb-inner{width:100%;float:left;margin:0;padding:0;text-align:center;} */
// .hero-box .text-box .tb-inner h1{margin:0 0 16px 0;font-size:60px;letter-spacing:30px;}
// .hero-box .text-box .tb-inner p{font-size:35px;letter-spacing:7px;}
// .hero-box .text-box .tb-inner label{margin:0 0 118px 0;padding:0 0 6px 0;font-size:15px;letter-spacing:3px;border-bottom:1px solid #FFFFFF;}

// .hero-box.txt-btm .text-box{bottom:120px;}

// .info-box{padding:90px 0 60px 0;}
// .info-box .ib-inner{width:940px;}
// .info-box .ib-inner h1{margin:0 0 16px 0;font-size:60px;letter-spacing:30px;}
// .info-box .ib-inner h2{margin:0 0 16px 0;font-size:50px;letter-spacing:2.5px;}
// .info-box .ib-inner h3{margin:0 0 16px 0;font-size:35px;letter-spacing:1.75px;line-height:50px;}
// .info-box .ib-inner h4{margin:0 0 10px 0;font-size:20px;letter-spacing:4px;line-height:40px;}
// .info-box .ib-inner p{margin:0 0 50px 0;font-size:35px;letter-spacing:1.75px;line-height:50px;}
// .info-box .ib-inner blockquote{margin:0 0 50px 0;font-size:35px;letter-spacing:1.75px;line-height:50px;}
// .info-box .ib-inner blockquote p{margin:0 0 50px 0;font-size:35px;letter-spacing:1.75px;line-height:50px;}
// .info-box .ib-inner ul, .info-box .ib-inner ol{margin:10px 0 10px 0;}
// .info-box .ib-inner ul li{margin:0 0 10px 0;font-size:35px;letter-spacing:1.75px;line-height:50px;}
// .info-box .ib-inner ol li{margin:0 0 10px 0;font-size:35px;letter-spacing:1.75px;line-height:50px;}
// .info-box .ib-inner a{text-decoration-thickness:1px;}
// /* .info-box .ib-inner a:hover{text-decoration:none;} */
// .info-box .ib-inner .standfirst{padding:0 0 40px 0;}
// /* .info-box .ib-inner .standfirst:after{width:200px;margin:0;content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50% );border-bottom:1px solid #999999;}  */
// .info-box .ib-inner .standfirst:after{width:200px;border-bottom:1px solid #999999;} 
// .info-box .ib-inner .p25{font-size:25px;letter-spacing:1.25px;line-height:40px;}

// .places-box{margin:0 0 126px 0;}
// .places-box .place{width:680px;height:680px;margin:0 0 52px 0;border:1px solid rgba(112, 112, 112, 0.6)}
// /* .places-box .place:nth-child(even){float:right;} */
// /* .places-box .place .link{height:100%;margin:0;} */
// /* .places-box .place .link .bg{height:100%;margin:0;background-repeat:no-repeat;background-size:cover;background-position:center center;;transition:0.35s all;opacity:1;} */
// /* .places-box .place .link .bg img{display:none;} */
// .places-box .place .link .text{padding:20px}
// /* .places-box .place .link .text .inner{margin:0;} */
// .places-box .place .link .text .inner h3{font-size:35px;letter-spacing:7px;line-height:50px;color:#FFFFFF;}
// /* .places-box .place .link:hover .bg{opacity:0;} */
// /* .places-box .place .link:hover .text{opacity:1;} */
// /* home page ends */


 
// /* home page starts */ ---------- edited
// .hero-box{margin:0 0 3.75vw 0}
// /* .hero-box .bg-box{width:100%;height:100vh;float:left;margin:0;padding:0;} */
// /* .hero-box .bg-box .slide{width:100%;height:100vh;float:left;margin:0;padding:0;} */
// /* .hero-box .bg-box .slide figure{width:100%;height:100vh;float:left;margin:0;padding:0;background-repeat:no-repeat;background-size:cover;background-position:center center;} */
// /* .hero-box .bg-box .slide figure img{display:none;} */
// /* .hero-box .text-box{width:100%;height:100vh;margin:0;padding:0;display:flex;align-items:center;position:absolute;top:0;left:0; px} */
// /* .hero-box .text-box .tb-inner{width:100%;float:left;margin:0;padding:0;text-align:center;} */
// .hero-box .text-box .tb-inner h1{margin:0 0 1vw 0;font-size:3.75vw;letter-spacing:1.875vw;}
// .hero-box .text-box .tb-inner p{font-size:2.1875vw;letter-spacing:0.43750000000000006vw;}
// .hero-box .text-box .tb-inner label{margin:0 0 7.375vw 0;padding:0 0 0.375vw 0;font-size:0.9375vw;letter-spacing:0.1875vw;border-bottom:0.0625vw solid #FFFFFF;}

// .hero-box.txt-btm .text-box{bottom:7.5vw;}

// .info-box{padding:5.625vw 0 3.75vw 0;}
// .info-box .ib-inner{width:58.75vw;}
// .info-box .ib-inner h1{margin:0 0 1vw 0;font-size:3.75vw;letter-spacing:1.875vw;}
// .info-box .ib-inner h2{margin:0 0 1vw 0;font-size:3.125vw;letter-spacing:0.15625vw;}
// .info-box .ib-inner h3{margin:0 0 1vw 0;font-size:2.1875vw;letter-spacing:0.10937500000000001vw;line-height:3.125vw;}
// .info-box .ib-inner h4{margin:0 0 0.625vw 0;font-size:1.25vw;letter-spacing:0.25vw;line-height:2.5vw;}
// .info-box .ib-inner p{margin:0 0 3.125vw 0;font-size:2.1875vw;letter-spacing:0.10937500000000001vw;line-height:3.125vw;}
// .info-box .ib-inner blockquote{margin:0 0 3.125vw 0;font-size:2.1875vw;letter-spacing:0.10937500000000001vw;line-height:3.125vw;}
// .info-box .ib-inner blockquote p{margin:0 0 3.125vw 0;font-size:2.1875vw;letter-spacing:0.10937500000000001vw;line-height:3.125vw;}
// .info-box .ib-inner ul, .info-box .ib-inner ol{margin:0.625vw 0 0.625vw 0;}
// .info-box .ib-inner ul li{margin:0 0 0.625vw 0;font-size:2.1875vw;letter-spacing:0.10937500000000001vw;line-height:3.125vw;}
// .info-box .ib-inner ol li{margin:0 0 0.625vw 0;font-size:2.1875vw;letter-spacing:0.10937500000000001vw;line-height:3.125vw;}
// .info-box .ib-inner a{text-decoration-thickness:0.0625vw;}
// /* .info-box .ib-inner a:hover{text-decoration:none;} */
// .info-box .ib-inner .standfirst{padding:0 0 2.5vw 0;}
// /* .info-box .ib-inner .standfirst:after{width:200px;margin:0;content:'';position:absolute;bottom:0;left:50%;transform:translateX(-50% );border-bottom:0.0625vw solid #999999;}  */
// .info-box .ib-inner .standfirst:after{width:12.5vw;border-bottom:0.0625vw solid #999999;} 
// .info-box .ib-inner .p25{font-size:1.5625vw;letter-spacing:0.078125vw;line-height:2.5vw;}

// .places-box{margin:0 0 7.875vw 0;}
// .places-box .place{width:42.5vw;height:42.5vw;margin:0 0 3.25vw 0;border:0.0625vw solid rgba(112, 112, 112, 0.6)}
// /* .places-box .place:nth-child(even){float:right;} */
// /* .places-box .place .link{height:100%;margin:0;} */
// /* .places-box .place .link .bg{height:100%;margin:0;background-repeat:no-repeat;background-size:cover;background-position:center center;;transition:0.35s all;opacity:1;} */
// /* .places-box .place .link .bg img{display:none;} */
// .places-box .place .link .text{padding:1.25vw}
// /* .places-box .place .link .text .inner{margin:0;} */
// .places-box .place .link .text .inner h3{font-size:2.1875vw;letter-spacing:0.43750000000000006vw;line-height:3.125vw;color:#FFFFFF;}
// /* .places-box .place .link:hover .bg{opacity:0;} */
// /* .places-box .place .link:hover .text{opacity:1;} */
// /* home page ends */


