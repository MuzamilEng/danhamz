import React from 'react'
import Layout from '../Layout/Layout'
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { benefits, carrerBanner, doings, investInPeople, ourTeam, teams, workAtDanham, workAtDanhamz } from '../Data';

const Carrers = () => {
    return (
        <div>
            <Layout>
                {/* link */}
                <nav className="bg-gray-300 w-full p-vw">
                    <div className="flex items-center ml-10vw">
                        <Link to="/" className='flex items-center'>
                            <p className="text-gray-500 text-[0.8vw]">Home</p>
                            <Icon icon="mdi:keyboard-arrow-right" className="text-gray-500 text-[0.8vw]" />
                        </Link>
                        <p className="text-gray-900 text-[0.9vw]">Carrers at Danhamz</p>
                    </div>
                </nav>
                {/* banner */}
                <section className='w-full'>
                    {carrerBanner?.map((item, index) => (
                        <main className='flex h-[23vw] bg-purple-900' key={index}>
                            <div className="flex justify-center items-center w-full max-w-[50vw]">
                                <h1 className='text-3vw font-bold text-pink-300'>{item?.title}</h1>
                            </div>
                            <img src={item?.img} alt={item?.title} className='w-full max-w-[50vw]' />
                        </main>
                    ))}
                </section>
                {/* teams */}
                <article className="w-full flex flex-col justify-center items-center bg-white p-3vw">
                    {teams?.map((item, index) => {
                        return <main className='flex items-center' key={index}>
                            <section>
                                <h1 className='text-blue-950 text-[2.1vw] font-medium'>{item?.title}</h1>
                                <p className='text-gray-600 text-vw mt-vw w-full max-w-[40vw]'>{item?.info}</p>
                                <p className='text-gray-600 text-vw mt-vw w-full max-w-[40vw]'>{item?.para}</p>
                            </section>
                            <img src={item?.img} alt={item?.title} className='w-full max-w-[30vw]' />
                            <section></section>
                        </main>
                    })}
                </article>
                {/* doings */}
                <article className="w-full flex bg-gray-200 flex-col justify-center items-center p-3vw">
                    <h1 className='text-[2.5vw] text-center text-black'>What we do</h1>
                    <div className="grid grid-cols-4 mt-2vw gap-3">
                        {doings?.map((item, index) => {
                            return <section className='bg-[#fff] border-t-[3px] border-blue-900 p-vw w-full max-w-[19vw]' key={index}>
                                <h1 className='text-blue-900 text-[1.5vw] text-medium'>{item?.title}</h1>
                                <p className='text-gray-500 font-medium text-vw w-full mt-vw max-w-[17vw]'>{item?.info}</p>
                                <p className='text-gray-900 text-vw w-full mt-vw max-w-[17vw]'>{item?.para}</p>
                                <p className='text-pink-300 text-vw font-semibold mt-vw w-full max-w-[17vw]'>{item?.question}</p>
                                <div className="flex items-start mt-vw">
                                    <Icon icon="mdi:tick" className='text-vw font-semibold text-blue-800' />
                                    <p className='text-gray-900 text-vw w-full ml-vw max-w-[17vw]'>{item?.desc}</p>

                                </div>
                            </section>
                        })}
                    </div>
                </article>
                {/* benefits */}
                <section className='flex justify-center items-center flex-col bg-[#ffff] p-2vw'>
                    {benefits?.map((item, index) => {
                        return <div className="" key={index}>
                            <h1 className='text-blue-900 text-center text-[2vw] text-semibold'>{item?.title}</h1>
                            <img src={item?.img} alt={item?.title} className='w-full mt-2vw' />
                        </div>
                    })}
                </section>
                {/* teams */}
                <main className='w-full bg-white'>
                    {ourTeam?.map((item, index) => {
                        return <div className="flex slider-container justify-center items-center flex-col" key={index}>
                            <h1 className='text-blue-900 text-center pt-3vw text-[2vw] text-semibold'>{item?.title}</h1>
                            <p className='text-gary-400 text-center pt-0.5vw text-[vw]'>{item?.info}</p>
                            <div className="flex slider mt-2vw w-full">
                                {item?.team?.map((person, index) => (
                                    <section className='w-full max-w-[20vw] review-item' key={index}>
                                        <img src={person?.img} alt={person?.name} className='w-full max-w-[15vw] h-15vw object-cover' />
                                        <h1 className='text-blue-900 text-[1.5vw] text-semibold'>{person?.name}</h1>
                                        <h4 className='text-gay-300 text-[vw]'>{person?.title}</h4>
                                        <div className="flex items-center mt-vw">
                                            <Link to="#" className='flex items-center'>
                                                <p className='text-blue-900 text-[0.9vw] font-normal'>View Profile</p>
                                                <Icon icon="ep:arrow-right-bold" className='text-blue-900 text-[0.9vw] font-normal' />
                                            </Link>
                                        </div>
                                    </section>
                                ))}
                            </div>
                            <Link to="#" className='flex justify-center pb-2vw mt-3vw items-center'>
                                <p className='text-white text-[0.9vw] p-vw text-center font-semibold bg-purple-900'>Meet The Full Team</p>
                            </Link>
                        </div>
                    })}
                </main>

                {/* investor in people */}
                <article className="w-full flex flex-col justify-center items-center p-3vw">
                    {investInPeople?.map((item, index) => {
                        return <main className='flex items-center' key={index}>
                            <img src={item?.img} alt={item?.title} className='w-full max-w-[35vw]' />
                            <section className='ml-4vw'>
                                <h1 className='text-blue-950 text-[2.1vw] font-medium'>{item?.title}</h1>
                                <p className='text-gray-600 text-vw mt-vw w-full max-w-[40vw]'>{item?.info}</p>
                                <Link to="#" className=' mt-2vw'>
                                <p className='text-white text-[0.9vw] w-full max-w-[20vw] p-vw text-center font-semibold bg-pink-400'>Read more about our IIP Accrediation</p>
                            </Link>
                            </section>
                        </main>
                    })}
                </article>
                {/* work at danhamz */}
                <article className="w-full flex flex-col justify-center items-center">
                    {workAtDanhamz?.map((item, index) => {
                        return <main className='flex justify-center w-full flex-col items-center' key={index}>
                            <div className="flex justify-center w-full items-center">
                            <h1 className='text-white bg-purple-950 w-full text-center p-3vw text-[2.5vw] text-semibold'>{item?.title}</h1>
                            </div>
                            </main>
                    })}
                </article>
            </Layout>
        </div>
    )
}

export default Carrers
