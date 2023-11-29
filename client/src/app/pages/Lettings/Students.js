import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/PageAddress'
import { abit_about, danhamzList, lettingProperties, property_loc, quick_search, reasons, smart_rent, stu_accommodation, stu_nav, student_search, thingsToremember } from '../../Data'
import ContentImage from '../../Component/ContentImage'
import RentSection from '../../Component/RentSection'
import BuySection from '../../Component/BuySection'
import RightImageContainer from '../../Component/RightImageContainer';
import { Link } from 'react-router-dom'
import LettingProperty from '../../Component/LettingProperty'
import LeftImageContainer from '../../Component/LeftImageContainer'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../Component/Card'
import SimpleProcess from '../../Component/SimpleProcess'
import Teams from '../../Component/Teams'

const Students = () => {
  const [showRentSection, setShowRentSection] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 cards at a time
    slidesToScroll: 1,
  };

  function foo(){
    return {
      bar: "foo"
    }
  }
  console.log(foo()); //out of foo bar is undefined
  return (
    <div>
      <Layout>
      <PageAddress main="Home" mainLink="/" subLink="/students" category="Lettings" subCategory="Students" />
      <section className='w-full'>
        {stu_nav?.map((item, index) => (
          <ContentImage key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </section>
      {/* about us */}
      <article className='row-center p-3vw bg-white'>
        <p className='text-[2.1vw] text-purple-950 font-semibold w-full max-w-[40vw]'>Love Mates. Hate Bills. Say hello to a smarter way to rent.</p>
        <p className='text-vw text-gray-900 w-full max-w-[40vw]'>Whether it’s our hassle-free all-inclusive tenancies, Unipol accredited properties or friendly personal service –  at HOP, we’re here to make your student letting experience as simple and stress free as possible. <br />
        Our ability to provide safe, affordable student accommodations in Leeds is unmatched. We are uniquely positioned to serve the student community, with an understanding borne from 15 years’ of student lettings experience.  <br /> If you are ready for a smarter way to find student housing in Leeds, look no further than HOP.
        Don’t worry how to split the bills with your housemates! Pay one simple price for your rent and bills with our fully inclusive bills packages..
        </p>
      </article>
      {/* student search */}
      <figure className='w-full col-center bg-gray-200 p-2vw'>
     {
       student_search?.map((item, index) => (
         <main className='w-full flex justify-between p-2vw items-start' key={index}>
             <section className="w-full max-w-[40vw]">
                 <img src={item?.img} alt={item?.title} className='w-full h-full object-cover' />
             </section>
        <section className="w-full max-w-[45vw]">
          <h1 className='text-[2.1vw] text-purple-950 font-semibold'>{item?.title}</h1>
          <p className='text-vw text-gray-900 w-full max-w-[37vw]'>{item?.info}</p>
          <div className="">
          <section className='relative'>
          <div className="absolute flex  -top-[2.5vw]">
            <p className={`${showRentSection ? 'bg-white' : 'bg-gray-300'} text-vw w-7vw cursor-pointer hover:bg-gray-300 p-vw text-center`} onClick={() => setShowRentSection(true)} > Rent</p>
            <p className={`${showRentSection ? 'bg-gray-300' : 'bg-white'} text-vw ml-0.3vw w-7vw hover:bg-white cursor-pointer p-vw text-center`} onClick={() => setShowRentSection(false)} >Buy </p>
          </div>
          </section>
          {/* rent/buy section */}
          <article className='flex mt-[3vw] flex-col w-full -ml-vw'>
              {showRentSection ? <RentSection /> : <BuySection />}
          </article>
          </div>
        </section>
         </main>
       ))
     }
      </figure>
      {/* accommodation */}
      <article className="w-full bg-white">
        {stu_accommodation?.map((item, index) => (
          <LeftImageContainer  key={index} icon={item?.icon} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* quick search */}
      <div className="col-center w-full bg-gray-200 p-3vw">
        <h1 className='text-[2.1vw] italic text-purple-950 text-center font-semibold'>Quick Search</h1>
        <p className='text-[1.3vw] text-gray-900 text-center'>Use the <span className="text-pink-300 cursor-pointer hover:underline">advanced property search</span> or try these quick links.</p>
        <section className="grid grid-cols-5 gap-4 mt-2vw">
          {quick_search?.map((item, index) => (
            <Link to={item?.url} className={`${item?.title === 'Advanced Property Search'? 'bg-pink-300' : 'bg-purple-950'} text-white text-center w-full text-vw p-vw rounded-sm`} key={index}>{item?.title}</Link>
          ))}
        </section>
      </div>
      {/* letting properties */}
      <div className="flex flex-col justify-center items-center w-full p-3vw">
            <h1 className='text-blue-950 text-2vw font-medium capitalize'>Latest Student Properties</h1>
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
      {/* smart rent */}
      <article className="w-full col-center p-3vw bg-purple-950">
        <main className="flex justify-between items-center">
          {smart_rent?.map((item, index) => (
            <section className="w-full flex" key={index}>
                 <div className="w-full max-w-[40vw] -ml-2vw">
                  <iframe
                    className='text-blue-900 mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://www.youtube.com/embed/lbqll5HUPog"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>   
                 <section className="w-full max-w-[40vw] ml-2vw">
                <h1 className='text-2vw text-white font-semibold italic'>{item?.mainTitle}</h1>
                {item?.infos?.map((info, index) => (
                  <div className="mt-vw" key={index}>
                    <p className='text-[1.3vw] text-white font-medium w-full max-w-[30vw]'>{info?.title}</p>
                    <p className='text-vw text-white w-full max-w-[40vw]'>{info?.info}</p>
                  </div>
                ))}
                </section>
            </section>
          ))}
        </main>
      </article>
      {/* quick search */}
      <div className="col-center w-full bg-gray-200 p-3vw">
        <h1 className='text-[2.1vw] italic text-purple-950 text-center font-semibold'>Quick Search</h1>
        <p className='text-[1.3vw] text-gray-900 text-center'>Use the <span className="text-pink-300 cursor-pointer hover:underline">advanced property search</span> or try these quick links.</p>
        <section className="grid grid-cols-3 gap-4 mt-2vw">
          {property_loc?.map((item, index) => (
            <Link to={item?.url} className={`${item?.title === 'Properties in All Student Properties'? 'bg-pink-300' : 'bg-purple-950'} text-white text-center w-full text-vw p-vw rounded-sm`} key={index}>{item?.title}</Link>
          ))}
        </section>
      </div>
      {/* alerts */}
       {/* accommodation */}
       <article className="w-full bg-white">
        {danhamzList?.map((item, index) => (
          <RightImageContainer  key={index} title={item?.title} button={item?.button} btn_bg={item?.btn_bg} btn_text={item?.btn_text} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* reasons */}
      <main className="w-full bg-gray-200 col-center p-3vw">
        <h1 className='text-[2.1vw] text-purple-950 text-center font-semibold'>5 good reasons to rent student housing with HOP</h1>
        <div className="grid grid-cols-5 gap-2">
        {reasons?.map((item, index) => (
          <Card key={index} number={item?.number} title={item?.title} info={item?.info} />
        ))}
        </div>
      </main>

      {/* abit */}
      <article className='w-full'>
        {abit_about?.map((item, index) => (
          <RightImageContainer key={index} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>
      {/* our process  */}
      <div className="section w-full flex justify-center items-center flex-col p-3vw">
            <h1 className="text-purple-950 font-medium text-[1.9vw]">Our Process: 9 steps to your perfect student home</h1>
           <div className="mt-vw">
           <SimpleProcess />
           </div>
        </div>
{/* teams */}
        <div className="">
        <Teams />
       </div>
       {/* remember */}
      <article className='w-full'>
        {thingsToremember?.map((item, index) => (
          <LeftImageContainer key={index} title={item?.title} bg_color={item?.bg_color} info={item?.info} title_color={item?.title_color} info_color={item?.info_color} img={item?.img} />
        ))}
      </article>

      {/* welcome */}
      {/* <article className='col-center bg-white p-3vw'>
              <div className="flex">
              <section className="w-full max-w-[40vw]">
                    <h1 className='text-purple-950 text-[2.1vw] w-full max-w-[30vw] font-medium'>Welcome to the Home of Property</h1>
                    <p className='text-gray-600 text-vw mt-vw max-w-[39vw] font-medium w-full'>At HOP,  we offer a complete suite of property services all under one roof. Whether you’re buying, selling, renting, letting or investing in Leeds and beyond, our friendly experts can help</p>
                   <div className="mt-2vw">
                   {lists?.map((item, index) => (
                    <li  style={{ listStyleType: "disc" }} className='text-blue-950  text-vw list-decimal block' key={index}>
                       <span className='text-black text-[1.2vw] font-bold'>.</span> {item}
                    </li>
                    ))}
                   </div>
                </section>
                <section className="w-full max-w-[40vw]">
                  <iframe
                    className='text-blue-900 mt-vw text-[1vw] h-[25vw] w-[40vw]'
                    src="https://player.vimeo.com/video/434834423?background=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </section>  
              </div>
            </article> */}
      </Layout>
    </div>
  )
}

export default Students