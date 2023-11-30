import React from 'react'
import { ratings } from '../Data'
import Reviews from './Reviews'

const RatingsContainer = () => {
  return (
    <div>
        <div className="slider-container bg-gray-200">
            <h1 className='text-center text-blue-900 text-[1.9vw] font-semibold'>Customer Reviews</h1>
            <div className="slider m-vw">
              {ratings?.map((item, index) => (
                <div key={index} className="review-item m-vw">
                  <Reviews ratings={item?.icon} title={item?.title} para={item?.para} name={item?.name} />
                </div>
              ))}
            </div>
          </div>
    </div>
  )
}

export default RatingsContainer