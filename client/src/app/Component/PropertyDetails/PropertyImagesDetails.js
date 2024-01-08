import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyImagesDetails = ({img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15}) => {
    const CustomPrevArrow = (props) => (
        <span {...props} className="text-vw text-black absolute cursor-pointer bottom-0 left-1 z-50">
        <FontAwesomeIcon icon={faArrowLeft} className='text-vw text-black  rounded-md hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
      </span>);
      const CustomNextArrow = (props) => (
          <span {...props} className="text-vw text-black absolute cursor-pointer  bottom-0 left-[3.1vw]">
        <FontAwesomeIcon icon={faArrowRight} className='text-vw text-red-800 rounded-md hover:bg-gray-100 bg-white p-[0.7vw] text-center' />
      </span> );

const settings = { dots: false, prevArrow: <CustomPrevArrow />, nextArrow: <CustomNextArrow />, arrows: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 };

  return (
    <section className='w-full max-w-[43vw]'>
                <Slider {...settings}>
                {img1 && <img src={img1} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img2 && <img src={img2} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img3 && <img src={img3} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img4 && <img src={img4} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img5 && <img src={img5} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img6 && <img src={img6} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img7 && <img src={img7} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img8 && <img src={img8} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img9 && <img src={img9} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img10 && <img src={img10} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img11 && <img src={img11} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img12 && <img src={img12} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img13 && <img src={img13} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img14 && <img src={img14} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                {img15 && <img src={img15} alt={'slide'} className="w-full rounded-sm h-[28.5vw] max-w-[43vw]" loading="lazy" />}
                 </Slider>
              </section>
  )
}

export default PropertyImagesDetails