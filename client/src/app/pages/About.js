import React from 'react'
import Layout from '../Layout/Layout'
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { about_award, about_story, doings, ourTeam, partnerBanner, ratings, studentHomes } from '../Data';
import Card from '../Component/Card';
import Reviews from '../Component/Reviews';

const About = () => {
    const lists = ["Student Lets", "Professional Lets", "Property Management", "Residential Sales", "Investment Sales", "Refurbishments", "Property Sourcing", "Block Management"];
  return (
    <div>
      <Layout>
      <main>
            {/* link */}
          <nav className="bg-gray-300 w-full p-vw">
            <div className="flex items-center ml-10vw">
              <Link to="/" className="flex items-center">
                <p className="text-gray-500 text-[0.8vw]">Home</p>
                <Icon
                  icon="mdi:keyboard-arrow-right"
                  className="text-gray-500 text-[0.8vw]"
                />
              </Link>
              <p className="text-gray-900 text-[0.9vw]">About us</p>
            </div>
          </nav>
            <section className='relative w-full bg-purple-500'>
                {about_award?.map((item, index) => (
                    <div className="relative w-full" key={index}>
                        <img src={item?.img} alt="about" className="w-full h-20vw" />
                        <div className="absolute top-0 p-vw left-7vw w-full max-w-[35vw]">
                            <h1 style={{lineHeight: "2.7vw"}} className='text-white text-[2.5vw] font-medium w-full max-w-[30vw]'>{item?.title}</h1>
                            <p className='text-white text-vw mt-2vw font-medium w-full max-w-[30vw]'>{item?.info}</p>
                            <div className="mt-vw">
                            <Link to="" className="p-vw bg-purple-950 text-white font-medium text-center">Get in touch</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            {/* services */}
            <article className="col-center bg-gray-200 w-full p-3vw">
            <h1 className='text-purple-950 text-[2.1vw] font-medium'>Our Services</h1>
            <p className='text-gray-600 text-vw mt-vw text-center font-medium w-full'>HOP stands for Home of Property, because we offer a complete suite of property services all under one roof.</p>
             {/* doings */}
          <div className="grid grid-cols-4 mt-2vw gap-3">
            {doings?.map((item, index) => {
              return (
                <Card key={index} para={item?.para} desc={item?.desc} title={item?.title} question={item?.question} />
              )
            })}
            </div>
            </article>
            {/* welcome */}
            <article className='col-center bg-white p-3vw'>
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
            </article>
                 {/* story */}
            <div className="flex justify-center items-center w-full bg-gray-200 p-2vw">
            <section className='w-full max-w-[85vw]'>
              {about_story?.map((item, index) => (
                <div className="flex justify-between items-start p-vw" key={index}>
                      <section className='w-[40vw]'>
                    <img src={item?.img} alt="rmote" className='w-full h-[30vw]' />
                  </section>
                  <section className='w-[40vw]'>
                    <p className='text-blue-950 text-[1.9vw] font-semibold'>{item?.title}</p>
                    <p className='text-gray-700 text-vw w-full max-w-[35vw]'>{item?.info}</p>
                    <div className="mt-2vw">
                      <Link to="/" className="bg-pink-400 p-vw text-white font-medium text-[0.8vw] text-center">Learn more</Link>
                    </div>
                  </section>
                </div>
              ))}
            </section>
            </div>
             {/* teams */}
        <main className="w-full bg-white">
          {ourTeam?.map((item, index) => {
            return (
              <div
                className="flex slider-container justify-center items-center flex-col" key={index}>
                <h1 className="text-blue-900 text-center pt-3vw text-2vw text-semibold"> {item?.title} </h1>
                <p className="text-gary-400 text-center pt-0.5vw text-vw"> {item?.info}</p>
                <div className="flex slider mt-2vw w-full">
                  {item?.team?.map((person, index) => (
                    <section className="w-full max-w-[20vw] review-item" key={index}>
                      <img src={person?.img} alt={person?.name} className="w-full max-w-[15vw] h-15vw object-cover" />
                      <h1 className="text-blue-900 text-[1.5vw] text-semibold"> {person?.name} </h1>
                      <h4 className="text-gay-300 text-vw"> {person?.title} </h4>
                      <div className="flex items-center mt-vw">
                        <Link to="#" className="flex items-center">
                          <p className="text-blue-900 text-[0.9vw] font-normal"> View Profile </p>
                          <Icon icon="ep:arrow-right-bold" className="text-blue-900 text-[0.9vw] font-normal" />
                        </Link>
                      </div>
                    </section>
                  ))}
                </div>
                <Link to="#" className="flex justify-center pb-2vw mt-3vw items-center" >
                  <p className="text-white text-[0.9vw] p-vw text-center font-semibold bg-purple-900"> Meet The Full Team </p>
                </Link>
              </div>
            );
          })}
        </main>
        {/* awards */}
        <article className='col-center bg-gray-200 p-3vw'>
        <h1 className='text-center text-purple-950 text-[2.3vw] text-semibold'>Our Awards</h1>
        <p className='text-vw text-gray-700 w-full text-center max-w-[80vw]'>HOP is proud to have won multiple awards since 2012. <br />
        We are incredibly proud of our award wins, which most recently includes the Best Estate Agent Award, officially recognising us as in the top 3% of letting agents in the whole of the UK.</p>
        </article>
        {/* partener banner */}
        <section className='row-center bg-white p-3vw'>
            <div className="flex justify-evenly items-center">
            {partnerBanner?.map((item, index) => (
                <img src={item?.img} alt={index} className='w-full ml-4vw max-w-[10vw]'/>
            ))}
            </div>
        </section>
        {/* reviews */}
        <div className="slider-container bg-gray-200">
            <h1 className='text-center text-purple-950 mt-2vw text-[2.1vw] text-semibold'>Customer Reviews</h1>
            <div className="slider m-vw">
              {ratings?.map((item, index) => (
                <div key={index} className="review-item m-vw">
                  <Reviews ratings={item?.icon} title={item?.title} para={item?.para} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
        </main>
      </Layout>
    </div>
  )
}

export default About