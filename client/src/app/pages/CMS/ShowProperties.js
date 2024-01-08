import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import { Icon } from '@iconify/react';
import { useGetAllLettingsQuery, useGetAllSalesQuery } from '../../store/storeApi';
import LettingProperty from '../../Component/PropertyDetails/LettingProperty';
import { Link } from 'react-router-dom';
import Property from '../../Component/PropertyDetails/Property';


const ShowProperties = () => {
    const [showLettings, setShowLettings] = useState(true)
    const {data: lettings} = useGetAllLettingsQuery()
    const {data: sales} = useGetAllSalesQuery()

  return (
    <div>
        <Layout>
            <main className="w-full col-center p-3vw">
                <h1 className="text-center text-2vw italic underline font-semibold cursor-pointer text-purple-950 w-full">Welcome to Danhamz's CMS!</h1>
                <section className="flex w-full items-center">
                    <h2 className="font-medium text-vw">Select a category</h2>
                    <div className="flex items-center ml-2vw">
                    <p onClick={() => setShowLettings(true)} className={`text-vw mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showLettings ? 'bg-blue-700' : 'bg-gray-500'} p-[0.7vw]`}><Icon icon="pixelarticons:buildings" className='text-vw mr-0.5vw' />Lettings</p>
                    <p onClick={() => setShowLettings(false)} className={`text-vw mt-2vw w-full max-w-[8vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 ${showLettings ? 'bg-gray-500' : 'bg-blue-700'} p-[0.7vw]`}><Icon icon="teenyicons:house-outline" className='text-vw mr-0.5vw' />Sales</p>
                    <Link to={'/add-lettings-property'}>
                    <p className={`text-vw mt-2vw w-[9vw] rounded-md text-start m-vw flex items-center text-white hover:bg-gray-500 bg-blue-500 p-[0.7vw]`}><Icon icon="teenyicons:house-outline" className='text-vw mr-0.5vw' />Add Lettings</p>
                    </Link>
                    </div>
                </section>
                {showLettings ? 
                <>
                  <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {lettings?.map((item, index) => (
                <Link to={`/edit-property/${item?._id}`}>
                <LettingProperty key={index} id={item?._id}
                 quantity={item?.bedrooms}
                 weekPrice={item?.pricePerWeek} monthPrice={item?.pricePerMonth} location={item?.propertyName}
                 bedRooms={item?.bedrooms}  available={item?.available} furnished={item?.furnished} bills={item?.bills}
                img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
                </Link>
              ))}
            </div>
            </article>
                </>: <>
                <article className="w-full p-2vw  col-center">
                <div className="grid grid-cols-4 gap-2 mt-vw">
              {sales?.map((item, index) => (
                <Link to={`/edit-property/${item?._id}`}>
                <Property key={index} tag={item?.tag} icon={item?.icon} quantity={item?.bedrooms} price={item?.price} location={item?.location} icon2={item?.pics?.[0]?.icon} bed_rooms={item?.bedrooms} img={item?.image1?.url} img2={item?.image2?.url} img3={item?.image3?.url} img4={item?.image4?.url} img5={item?.image5?.url} img6={item?.image6?.url} img7={item?.image7?.url} img8={item?.image8?.url} img9={item?.image9?.url} img10={item?.image10?.url} img11={item?.image11?.url} img12={item?.image12?.url} img13={item?.image13?.url} img14={item?.image14?.url} img15={item?.image15?.url} />
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

export default ShowProperties