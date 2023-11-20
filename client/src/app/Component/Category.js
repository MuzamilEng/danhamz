import React from 'react'
import { categories } from '../Data'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div>
        <main className='flex justify-center items-center bg-gray-200 w-full p-4vw'>
        <div className="grid grid-cols-3 gap-4">
    {categories?.map((category, index) => 
        <section key={index} className='relative w-full max-w-[70vw] h-[15vw]'>
            <img src={category.img} alt={category.title} className='w-full h-full object-cover' />
            <div className='absolute bottom-3 left-3'>
                <Link to={category?.url} className='text-white font-bold text-[1.6vw] hover:text-gray-200'>{category?.title}</Link>
            </div>
        </section>
    )}
</div>
  </main>
    </div>
  )
}

export default Category