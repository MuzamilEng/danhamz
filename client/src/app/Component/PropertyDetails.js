import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import PageAddress from './PageAddress'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lettingProperties } from '../Data';
import LettingProperty from './LettingProperty';
import { Icon } from '@iconify/react';
import Map from './Map';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetSalesByIdQuery } from '../store/storeApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon} from 'react-share'



const PropertyDetails = (tag, icon, quantity, weekPrice, location, monthPrice, bedRooms, img, bed_icon, available, furnished_icon,furnished,bill_icon, bills, date
    ) => {
        const { id } = useParams();
        const { data: propertyDetails, isLoading, isError } = useGetSalesByIdQuery(id);
        // console.log(propertyDetails, "propertyDetails");
        const [share, setShare] = useState(false);
        const CustomPrevArrow = (props) => (
            <span {...props} className="text-vw text-black absolute cursor-pointer bottom-0 left-1 z-50">
            <FontAwesomeIcon icon={faArrowLeft} className='text-vw text-black  rounded-md hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
          </span>);
          const CustomNextArrow = (props) => (
              <span {...props} className="text-vw text-black absolute cursor-pointer  bottom-0 left-[3.1vw]">
            <FontAwesomeIcon icon={faArrowRight} className='text-vw text-red-800 rounded-md hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
          </span> );

    const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };

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
            <article className="flex justify-center items-start p-4vw">
            <section className='w-full max-w-[43vw]'>
                <Slider {...settings}>
                <img src={propertyDetails?.image1?.url} alt={'slide'} className="w-full rounded-sm h-[26.5vw] max-w-[43vw]" loading="lazy" />
                <img src={propertyDetails?.image2?.url} alt={'slide'} className="w-full rounded-sm h-[26.5vw] max-w-[43vw]" loading="lazy" />
                <img src={propertyDetails?.image3?.url} alt={'slide'} className="w-full rounded-sm h-[26.5vw] max-w-[43vw]" loading="lazy" />
                <img src={propertyDetails?.image4?.url} alt={'slide'} className="w-full rounded-sm h-[26.5vw] max-w-[43vw]" loading="lazy" />
                </Slider>
              </section>
              <section className='p-0.5vw pb-2vw bg-white w-full max-w-[35vw] ml-vw'>
                <div className="flex p-0.5vw ml-vw items-center">
                    {propertyDetails?.price ? <>
                        <p className='text-blue-900 text-[1.9vw] italic mt-2vw font-bold'>{propertyDetails?.price}</p>
                    </>: <>
                    <section className='p-2vw border-r-[1px] border-gray-700'>
                    <p className='text-blue-900 text-[1.6vw] font-bold'>$2000</p>
                    <p className='text-gray-400 text-vw'>per week</p>
                    </section>
                    <section className='ml-5vw'>
                    <p className='text-blue-900 text-[1.6vw] font-bold'>$5000</p>
                    <p className='text-gray-400 text-vw'>per month</p>
                    </section>
                    </>}
                </div>
                <p className='text-black ml-vw font-medium text-[1.2vw]'>{propertyDetails?.info}</p>
               <span className="col-center">
               <div className="grid grid-cols-3 w-full max-w-[29vw] items-start gap-2 -ml-vw">
                <div className="flex w-[8vw] h-3vw m-vw items-center p-vw bg-blue-600">
                    <span className='text-white text-[0.8vw]'>01 Feb 2022</span>
                    <span className='text-white ml-0.5vw text-[0.7vw]'>{available}</span>
                </div>
                <div className="flex w-[8vw] m-vw h-3vw items-center p-vw bg-blue-600">
                    <span className='text-white text-vw'><Icon icon="cil:sofa" /></span>
                    <span className='text-white ml-0.5vw text-[0.8vw]'>{propertyDetails?.furnished}</span>
                </div>
                <div className="flex w-[8vw] h-[3vw] m-vw items-center p-vw bg-pink-700">
                    <span className='text-white ml-0.5vw text-vw'><Icon icon="ion:bulb-outline" /></span>
                    <span className='text-white ml-0.5vw text-[0.6vw]'>{propertyDetails?.bills}</span>
                </div>
                <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
                    <span className='text-gray-600 text-vw'><Icon icon="tabler:bed" /></span>
                    <span className='text-gray-600 ml-0.5vw text-[0.7vw]'>{propertyDetails?.bedrooms} Bedrooms</span>
                </div>
                <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
                    <span className='text-gray-600 text-vw'><Icon icon="majesticons:bath-shower-line" /></span>
                    <span className='text-gray-600 ml-0.5vw text-[0.7vw]'>{propertyDetails?.bathrooms} Bathrooms</span>
                </div>
                <div className="flex w-[8vw] p-vw m-vw h-[3vw] bg-gray-300">
                    <span className='text-gray-600 text-vw'><Icon icon="cil:sofa" /></span>
                    <span className='text-gray-600 ml-0.5vw text-[0.7vw]'>{propertyDetails?.reception} Reception</span>
                </div>
                </div>
               </span>
                <div className="mt-3vw">
                {!share ?
                <div className="flex justify-center w-full max-w-[12vw] items-center p-vw m-vw cursor-pointer bg-purple-950" onClick={() => setShare(!share)}>
                    <span className='text-white text-[0.8vw]'>Share this property</span>
                    <Icon icon="uil:share" className='text-white ml-0.5vw text-[0.8vw]' />
                </div>
                : <div className='flex border-[1px] bg-purple-950 p-[0.7vw] ml-vw justify-evenly rounded-md w-full max-w-[13vw] items-center' onClick={() => setShare(!share)}>
                    <FacebookShareButton className='text-vw' url='https://www.facebook.com'>
                        <FacebookIcon size={32} round={true} logoFillColor='white' ></FacebookIcon>
                    </FacebookShareButton>
                    <TwitterShareButton className='text-vw' url='https://www.twitter.com'>
                        <TwitterIcon size={32} round={true} logoFillColor='white' ></TwitterIcon>
                    </TwitterShareButton>
                    <WhatsappShareButton className='text-vw' url='https://www.whatsapp.com'>
                        <WhatsappIcon size={32} round={true} logoFillColor='white' ></WhatsappIcon>
                    </WhatsappShareButton>
                    </div>}
                </div>
            </section>
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
                <section className="w-full max-w-[30vw] ml-2vw">
                    <Map />
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
                //  const LettingProperty = ({tag, icon, quantity, weekPrice, location, monthPrice, bedRooms, img, bed_icon, available, furnished_icon,furnished,bill_icon, bills, date}) => {          // 
                <LettingProperty key={index} bedRooms={item?.bedRooms} available={item?.available} icon={item?.icon} img={item?.img} quantity={item?.quantity} weekPrice={item?.weekPrice} monthPrice={item?.monthPrice} bed_icon={item?.bed_icon} location={item?.location} furnished={item?.furnished} furnished_icon={item?.furnished_icon} bill_icon={item?.bill_icon} bills={item?.bills} date={item?.date} />
              ))}
            </div>
          </div>
        </Layout>
    </div>
  )
}

export default PropertyDetails