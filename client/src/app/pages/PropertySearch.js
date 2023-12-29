import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { useGlobalContext } from '../UserContext/UserContext'
import PageAddress from '../Component/PageAddress';
import PropertyImagesDetails from '../Component/PropertyImagesDetails';
import PropertyRoomsInfo from '../Component/PropertyRoomsInfo';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Property from '../Component/Property';
import LettingProperty from '../Component/LettingProperty';

const PropertySearch = () => {
    const {searchedLettingsProperties} = useGlobalContext();
    const [listView, setListView] = useState(true);
    console.log(searchedLettingsProperties, 'searchedLettingsProperties');
  return (
    <div>
        <Layout>
            <main className="w-full bg-gray-200">
                <PageAddress main='Home' subLink={'/searchProperty'} mainLink={'/'} category={'Property Search'} subCategory={"Search Results"} />
                <h1 className='text-3vw text-center w-full text-purple-950 font-medium m-vw'>Search results</h1>
                <article className="w-full p-2vw">
                    <h1 className='text-[1.3vw] text-start ml-6vw w-full text-gray-400 font-medium'>Currently Showing: {searchedLettingsProperties?.length} properties</h1>
                    <div className="flex justify-between items-center">
                    <Link to='/searchProperty' className='text-vw mt-2vw w-full max-w-[11vw] rounded-md text-start ml-6vw flex items-center text-white bg-pink-700 p-[0.7vw]'><Icon icon="bx:edit" className='text-vw mr-0.5vw' /> Filter My Results</Link>
                    <section className='flex items-center w-full max-w-[30vw]'>
                    <p onClick={() => setListView(true)} className={`text-vw mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${listView ? 'bg-blue-700' : 'bg-gray-500'} p-[0.7vw]`}><Icon icon="gg:list" className='text-vw mr-0.5vw' />List View</p>
                    <p onClick={() => setListView(false)} className={`text-vw mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${listView ? 'bg-gray-500' : 'bg-blue-700'} p-[0.7vw]`}><Icon icon="bx:grid" className='text-vw mr-0.5vw' />Grid View</p>
                    </section>
                    </div>
                </article>
                {listView ? <>
                    <article className="w-full p-3vw col-center">
                    <div className="">
                        {searchedLettingsProperties?.map((item, index) => {
                            return <main className='w-full m-vw flex items-center'key={index}>
                                <PropertyImagesDetails img1={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                                <PropertyRoomsInfo weekPrice={item?.pricePerWeek}
                                 monthPrice={item?.pricePerMonth} bills={item?.bills}
                                  furnished={item?.furnished} info={item?.info} available={item?.available} 
                                 price={item?.price} location={item?.location}
                                 bedrooms={item?.bedrooms} bathrooms={item?.bathrooms} reception={item?.reception} />
                            </main>
                        })}
                    </div>
                </article>
                </> : <>
                <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {searchedLettingsProperties?.map((item, index) => (
                <Link to={`/details/${item?._id}`}>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.info}
                 bedRooms={item?.bedrooms}  available={item?.available} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                </Link>
              ))}
            </div>
            </article>
            </>}
            </main>
        </Layout>
    </div>
  )
}

export default PropertySearch