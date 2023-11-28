import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../../Component/PageAddress'
import { quick_search, stu_accommodation, stu_nav, student_search } from '../../Data'
import ContentImage from '../../Component/ContentImage'
import RentSection from '../../Component/RentSection'
import BuySection from '../../Component/BuySection'
import LeftImageContainer from '../../Component/LeftImageContainer';
import { Link } from 'react-router-dom'

const Students = () => {
  const [showRentSection, setShowRentSection] = useState(true);

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
      </Layout>
    </div>
  )
}

export default Students