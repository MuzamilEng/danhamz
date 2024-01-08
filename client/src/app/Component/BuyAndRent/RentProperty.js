import React, { useState } from 'react'
import { rentContainer1, } from '../../Data'
import CustomDropdown from '../CustomDropdown';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetAllLettingsQuery } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';
import { Icon } from '@iconify/react';
  

const RentProperty = () => {
  const {setSearchedLettingsProperties} = useGlobalContext();
  const [activeCategory, setActiveCategory] = useState('Student');
  const [selectedBedrooms, setSelectedBedrooms] = useState(null);
  const {data: lettings} = useGetAllLettingsQuery()
  const navigate = useNavigate()
  const { handleSubmit, setValue, control } = useForm({
      defaultValues: {
          minPrice: null,
          maxPrice: null,
          bedrooms: null,
          bathrooms: null,
          propertyType: '',
          location: '',
      },
  });


  const handleBedroomClick = (value) => {
      setSelectedBedrooms(value);
      setValue('bedrooms', value);
      // console.log(value, "value")
      // You can perform additional actions with the selected value if needed
    };

    
    const handleDropdownChange = (selectedValues) => {
      console.log('Selected values:', selectedValues);
      setValue('location', selectedValues?.[0]?.value)
      // Do something with the selected values
    };

    const onSubmit = async (data, e) => {
      e.preventDefault();
    
      try {
        let queryString = '';
    
        // Conditionally build the query string
        if (data?.maxPrice !== null) {
          queryString += `&maxPrice=${data?.maxPrice}`;
        }
        if (data?.bedrooms !== null) {
          queryString += `&bedrooms=${data?.bedrooms}`;
        }
        if (data?.bathrooms !== null) {
          queryString += `&bathrooms=${data?.bathrooms}`;
        }
        if (data?.location !== '') {
          queryString += `&location=${data?.location}`;
        }
        if (data?.propertyType !== '') {
          queryString += `&propertyType=${data?.propertyType}`;
        }
    
        // Remove the leading '&' if there is a query string
        queryString = queryString ? queryString.slice(1) : '';
    
        // Make the request only if there is a valid query string
        if (queryString) {
          const fetchData = await axios.get(`http://localhost:5000/api/v1/lettings/advancedSearch?${queryString}`);
          const result = await fetchData.data
          setSearchedLettingsProperties(result);
          console.log(result, "Successful search");
          navigate('/propertySearch')
        } else {
          setSearchedLettingsProperties(lettings);
          navigate('/propertySearch')
        }
      } catch (error) {
        console.error('Error during search:', error);
      }
    };
    
    // c

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full max-w-[38vw] h-full m-vw'>
        <div className="flex flex-col justify-center items-center p-vw w-full">
        <section className='flex justify-between items-centers w-full p-0.5vw'>
          <p className={`${ activeCategory === 'Student' ? 'bg-purple-950 text-white font-medium' : 'bg-white'} hover:bg-purple-800 hover:text-white cursor-pointer border-[1px] font-medium border-gray-400 text-center text-vw text-purple-950 p-vw w-17vw `}
            onClick={() => setActiveCategory('Student')} > Student</p>
          <p className={`${ activeCategory === 'Professional' ? 'bg-purple-950 text-white font-medium' : 'bg-white' } hover:bg-purple-800 border-[1px] hover:text-white cursor-pointer text-vw border-gray-400 font-medium text-center text-purple-950 p-vw w-17vw `}
            onClick={() => setActiveCategory('Professional')}> Professional </p>
        </section>
            {rentContainer1?.map((item, index) => (
          <section className="mt-0.5vw p-vw w-full" key={index}>
            <p className="text-black text-[0.9vw]">{item?.noOfbeds}</p>
            <div className="grid grid-cols-9 mt-vw items-center gap-2 w-full max-w-[30vw]">
          <p className={`flex justify-center items-center ${ !selectedBedrooms ? 'bg-purple-800 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-white' : 'hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-blue-900' }`}
            onClick={() => handleBedroomClick('Any')} > Any </p>
          {activeCategory === 'Student' ? (
            item?.quantity.map((item, index) => (
              <p key={index} className={`flex justify-center hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] ${
                  selectedBedrooms === item?.count ? 'bg-purple-950 text-white' : 'text-blue-900' }`} onClick={() => handleBedroomClick(item?.count)}>
             {item?.count} </p>
            ))
          ) : (
            <>
              {item?.quantity?.slice(0, 5).map((item, index) => (
                <p key={index} className={`flex justify-center hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] ${
                selectedBedrooms === item?.count ? 'bg-purple-950 text-white' : 'text-blue-900' }`} onClick={() => handleBedroomClick(item?.count)}>
                {item?.count} </p>
              ))}
            </>
          )}
        </div>
          
            <div className="mt-vw -ml-vw grid grid-cols-2">
                    {item?.container?.map((item2, index) => (
                        <div key={index} className="w-full">
                        <label className="text-[0.7vw] mt-0.5vw ml-vw text-gray-900" htmlFor={item2?.title}>{item2?.title}</label>
                        {item2?.type === 'select' ? (
                            <Controller
                            name={item2?.name}
                            control={control}
                            render={({ field }) => (
                                <select
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e);
                                    // handleInputChange();
                                }}
                                className="cursor-pointer focus:outline-none text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center text-black p-vw w-full max-w-[15vw]"
                                >
                                <option value="no preferences" className="text-blue-950 focus:outline-none text-[0.9vw]" disabled hidden>
                                    No Preferences
                                </option>
                                {item2?.options?.map((option, optionIndex) => (
                                    <option
                                    key={optionIndex}
                                    value={option?.value}
                                    className="text-start text-[0.9vw] focus:outline-none text-blue-950 p-vw"
                                    style={{ outline: 'none' }}
                                    >
                                    {option?.title}
                                    </option>
                                ))}
                                </select>
                            )}
                            />
                        ) : (
                          <div className='mt-vw'><CustomDropdown options={item2?.options} onChange={handleDropdownChange} /></div>
                        )}
                        </div>
                    ))}
                </div>
              <article className="w-full">
              <label className="text-[0.7vw] text-gray-900" htmlFor="">Available From</label>
              <select
                      defaultValue="no preferences"
                      style={{ outline: 'none' }}
                      className="-mt-[0.2vw] -ml-[0.2vw] cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center max-w-[33vw] text-black p-vw w-full"
                    >
                      {item?.availableOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option?.value}
                          className="text-start text-[0.9vw] focus:outline-none text-blue-950 p-vw"
                          style={{ outline: 'none' }}
                        >
                          {option?.title}
                        </option>
                      ))}
                    </select>
              </article>
          </section>
        ))}
        <div className="flex items-end justify-end mr-vw">
                {/* <section className='flex justify-center mr-vw items-center bg-slate-300 p-vw'>
                            <Icon icon="solar:settings-linear" className='text-[1.3vw] text-white' />
                            <span className='text-white text-vw font-medium pl-[0.3vw] cursor-pointer'>Advanced search</span>
                        </section> */}
                        
                        <button type='submit' className='flex justify-center text-white items-center bg-pink-400 p-vw'>
                            <Icon icon="solar:settings-linear" className='text-[1.3vw] text-white' /> <span className='text-vw'>Search</span>
                        </button>
                </div>
        </div>
    </form>
  )
}

export default RentProperty