import React, { useState } from 'react'
import Layout from '../../Layout/Layout'
import PageAddress from '../Common/PageAddress'
import { lettingProperties } from '../../Data';
import LettingProperty from './LettingProperty';
import Map from '../Map/Map';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetLettingsByIdQuery, useGetSalesByIdQuery } from '../../store/storeApi';
import PropertyRoomsInfo from './PropertyRoomsInfo';
import PropertyImagesDetails from './PropertyImagesDetails';
import PinLocation from '../Map/PinLocation';



const PropertyDetails = ( ) => {
        const { id } = useParams();
        const { data: propertyDetails, isLoading, isError } = useGetLettingsByIdQuery(id);
   
    if (isLoading) {
        return <div></div>;
    }
    if (isError) {
        return <div className='text-center text-2vw text-blue-950'>Error fetching property details</div>;
    }
 
  return (
    <div>
        <Layout>
            <PageAddress main='Home' category='Properties' subCategory={propertyDetails?.info} />
            <article className="flex justify-center items- bg-gray-200 p-4vw">
                <PropertyImagesDetails img1={propertyDetails?.image1?.url} img2={propertyDetails?.image2?.url} img3={propertyDetails?.image3?.url} img4={propertyDetails?.image4?.url} img5={propertyDetails?.image5?.url} img6={propertyDetails?.image6?.url} img7={propertyDetails?.image7?.url} img8={propertyDetails?.image8?.url} img9={propertyDetails?.image9?.url} img10={propertyDetails?.image10?.url} img11={propertyDetails?.image11?.url} img12={propertyDetails?.image12?.url} img13={propertyDetails?.image13?.url} img14={propertyDetails?.image14?.url} img15={propertyDetails?.image15?.url} />
              <PropertyRoomsInfo price={propertyDetails?.pricePerMonth}  info={propertyDetails?.info} available={propertyDetails?.available} furnished={propertyDetails?.furnished} bills={propertyDetails?.bills} bedrooms={propertyDetails?.bedrooms} bathrooms={propertyDetails?.bathrooms} reception={propertyDetails?.reception} weekPrice={propertyDetails?.weekPrice} monthPrice={propertyDetails?.monthPrice} />
            </article>
            <article className="w-full bg-white p-3vw flex justify-center items-start">
                <section className="w-full max-w-[45vw]">
                    <div className="">
                        <p className='text-purple-950 font-medium text-[1.9vw]'>Key Feartures</p>
                        <section className="grid grid-cols-2 gap-4 mt-vw">
                            {propertyDetails?.keyFeatures?.map((feature, i) =>(
                                <li className="text-vw text-gray-800" key={i}>{feature}</li>
                            ))}
                        </section>
                    </div>
                    <div className="">
                        <p className='text-purple-950 mt-vw font-medium text-[1.9vw]'>Letting details</p>
                        <section className="grid mt-vw grid-cols-2 gap-4">
                            {propertyDetails?.lettingDetails?.map((feature, i) =>(
                                <li className="text-vw text-gray-800" key={i}>{feature}</li>
                            ))}
                        </section>
                    </div>
                </section>
                <section className="w-full ml-2vw">
                    <PinLocation lat={propertyDetails?.lat} lng={propertyDetails?.lng}/>
                </section>
            </article>
            <article className="w-full flex justify-center items-start p-4vw bg-white">
                <span className="w-full">
                <div className="ml-4vw">
                        <p className='text-purple-950 w-full max-w-[45vw] font-medium text-[1.9vw]'>Full property description</p>
                        <div className="">
                        <p className="text-[1.2vw] font-semibold  text-gray-700">Area Guide</p>
                        <li className="text-vw list-none mt-0.2vw text-gray-800">Headingley is one of the most sought-after student locations in Leeds. Offering everything on your doorstop from a range of bars, restaurants, cafés and shops, to ample green space and good transport links. Headingley is home to Leeds Beckett University campus with good sports facilities, libraries and more, whilst both Leeds Beckett and the University of Leeds can be easily reached by foot or bus. This really is a hot-spot for students looking to be right in the heart of all the action.</li>
                        <p className="text-[1.2vw] font-semibold  text-gray-700">Living Room</p>
                            <li className="text-vw list-none mt-0.2vw text-gray-800">Living Room Spacious living room coming with two sofas, arm chair, coffee table, tv stand and a large bay window.</li>
                            <p className="text-[1.2vw] font-semibold  text-gray-700">Kitchen</p>
                            <li className="text-vw list-none mt-0.2vw text-gray-800">Kitchen Fully fitted modern kitchen with a grey tile splash back finish. The Kitchen comes with ample cupboard space, electric hobs and oven, washing machine, free standing fridge freezer, sink with drainer and dining table with chairs.</li>
                            <p className="text-[1.2vw] font-semibold  text-gray-700">Bedrooms</p>
                            <li className="text-vw list-none mt-0.2vw text-gray-800">Bedrooms Spacious bedrooms compromising double beds and mattresses, chest for drawers, wardrobes, desks and chairs.</li>
                            <p className="text-[1.2vw] font-semibold  text-gray-700">Bathrooms</p>
                            <li className="text-vw list-none mt-0.2vw text-gray-800">Bathrooms The main bathroom compromises a panelled bath with shower over, hand wash basin and WC. The property also comes with a shower room with a hand wash basin and WC.</li>
                            <p className="text-[1.2vw] font-semibold  text-gray-700">Additional Information</p>
                            <li className="text-vw list-none mt-0.2vw text-gray-800">Additional Information£100pp to be paid to reserve the property.</li>
                        </div>
                        </div>
                </span>
                <span className="w-full max-w-[30vw] ml-6vw">
                    <div className="w-full max-w-[30vw] h-15vw p-2vw bg-pink-400">
                        <h1 className='text-2vw font-semibold text-white w-full max-w-[20vw] italic'>Have a property to sell?</h1>
                        <p className="text-vw text-white w-full max-w-[22vw]">We’ll be with you every step of the way.</p>
                        <div className="mt-2vw">
                        <Link to="/let-or-sell" className='mt-2vw bg-purple-950 p-vw text-center text-white'>Book valuation</Link>
                        </div>
                    </div>
                    <div className="w-full mt-2vw max-w-[30vw] h-15vw p-2vw bg-purple-800">
                        <h1 className='text-2vw font-semibold text-white w-full max-w-[20vw] italic'>Headingley area guide</h1>
                        <p className="text-vw text-white w-full max-w-[22vw]">Click to view our area guide.</p>
                        <div className="mt-2vw">
                        <Link to="/let-or-sell" className='mt-2vw bg-purple-950 p-vw text-center text-white'>Learn more</Link>
                        </div>
                    </div>
                </span>
            </article>
             {/* letting properties */}
          <div className="flex flex-col justify-center items-center w-full p-3vw bg-gray-200">
            <h1 className='text-purple-950 text-2vw font-medium italic'>You may also like this</h1>
            <div className="grid grid-cols-4 gap-2 mt-2vw">
              {lettingProperties?.map((item, index) => (
                <LettingProperty key={index} bedRooms={item?.bedRooms} available={item?.available} icon={item?.icon} img={item?.img} quantity={item?.quantity} weekPrice={item?.weekPrice} monthPrice={item?.monthPrice} bed_icon={item?.bed_icon} location={item?.location} furnished={item?.furnished} furnished_icon={item?.furnished_icon} bill_icon={item?.bill_icon} bills={item?.bills} date={item?.date} />
              ))}
            </div>
          </div>
        </Layout>
    </div>
  )
}

export default PropertyDetails