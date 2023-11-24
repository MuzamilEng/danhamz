import React from 'react'
import { Icon } from '@iconify/react';
import { login } from '../Data';
import { Link } from 'react-router-dom';


const Login = () => { 
  return (
    <div>
        <main className='w-full max-w-[45vw] shadow-lg'>
            <nav className="w-full bg-gray-800 flex justify-between items-center p-vw">
                <img src="images/pr_file.png" alt="property_login" className='w-full max-w-[7vw]' />
                <Icon icon="mdi:cancel-bold" className='text-white text-2vw' />
            </nav>
            <article className='w-full bg-gray-200 col-center p-3vw'>
                <h1 className='text-2vw text-gray-800 font-medium'>Sign in to PropertyFile</h1>
                <section>
                    {login?.map((item, index) => (
                        <div className="mt-vw" key={index}>
                            <label className='text-gray-800 text-vw' htmlFor={item?.name}>{item?.label}</label>
                            <div className="flex items-center">
                            <input type={item?.type} name={item?.name} placeholder={item?.placeholder} className='w-full max-w-[40vw] p-vw bg-white' />
                            <span className='text-gray-400 text-[1.3vw] -ml-[2.3vw]'>{item?.icon}</span>
                            </div>
                        </div>
                    ))}
                    <button type='btn' className='text-white text-vw font-semibold text-center bg-blue-500 p-vw rounded-sm mt-vw'>Sign In</button>
                    <Link className='text-blue-600 text-vw text-center mt-vw'>Can't access your account?</Link>
                </section>
            </article>
        </main>
    </div>
  )
}

export default Login