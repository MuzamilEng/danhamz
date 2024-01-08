import React, { useState } from 'react'
import { rentContainer } from '../../Data'
import { Icon } from '@iconify/react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown';
import axios from 'axios';
import { useGetAllLettingsQuery } from '../../store/storeApi';
import { useGlobalContext } from '../../UserContext/UserContext';




const RentSection = () => {
  const {setSearchedLettingsProperties} = useGlobalContext()
    const [activeCategory, setActiveCategory] = useState('Student');
    const [selectedBedrooms, setSelectedBedrooms] = useState(null);
    const {data: lettings} = useGetAllLettingsQuery()
    const navigate = useNavigate()
    const { handleSubmit, setValue, control } = useForm({
        defaultValues: {
            minPrice: null,
            maxPrice: null,
            bedrooms: null,
            propertyType: '',
            location: '',
            // bathrooms: null,
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
            navigate('/propertySearch')
          } else {
            setSearchedLettingsProperties(lettings);
            navigate('/propertySearch')
          }
        } catch (error) {
          console.error('Error during search:', error);
        }
      };
      
      // console.log(searchedProperties, "properties");
      
      
      
    return (
    <form onSubmit={handleSubmit(onSubmit)} className='bg-white w-full max-w-[38vw]'>
        <div className="flex flex-col justify-center items-center p-vw w-full">
        <section className='flex justify-between items-centers w-full p-0.5vw'>
      <p className={`${ activeCategory === 'Student' ? 'bg-purple-950 text-white font-medium' : 'bg-white'} hover:bg-purple-800 hover:text-white cursor-pointer border-[1px] font-medium border-gray-400 text-center text-vw text-purple-950 p-vw w-17vw `}
        onClick={() => setActiveCategory('Student')} > Student</p>
      <p className={`${ activeCategory === 'Professional' ? 'bg-purple-950 text-white font-medium' : 'bg-white' } hover:bg-purple-800 border-[1px] hover:text-white cursor-pointer text-vw border-gray-400 font-medium text-center text-purple-950 p-vw w-17vw `}
        onClick={() => setActiveCategory('Professional')}> Professional </p>
    </section>
            <section className='mt-0.5vw p-vw w-full'>
                <p className='text-black text-[0.9vw]'>How many bedrooms do you need?</p>
                <div className="grid grid-cols-9 mt-vw items-center gap-2 w-full max-w-[30vw]">
          <p className={`flex justify-center items-center ${ !selectedBedrooms ? 'bg-purple-800 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-white' : 'hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] text-blue-900' }`}
            onClick={() => handleBedroomClick('Any')} > Any </p>
          {activeCategory === 'Student' ? (
            rentContainer?.[0]?.quantity.map((item, index) => (
              <p key={index} className={`flex justify-center hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] ${
                  selectedBedrooms === item?.count ? 'bg-purple-950 text-white' : 'text-blue-900' }`} onClick={() => handleBedroomClick(item?.count)}>
             {item?.count} </p>
            ))
          ) : (
            <>
              {rentContainer?.[0]?.quantity?.slice(0, 5).map((item, index) => (
                <p key={index} className={`flex justify-center hover:text-white items-center border-[1px] border-gray-400 hover:bg-purple-600 text-[0.9vw] p-vw text-center w-[2.5vw] h-[2.5vw] ${
                selectedBedrooms === item?.count ? 'bg-purple-950 text-white' : 'text-blue-900' }`} onClick={() => handleBedroomClick(item?.count)}>
                {item?.count} </p>
              ))}
            </>
          )}
        </div>
                <div className="mt-vw -ml-vw flex items-center">
                    {rentContainer?.[0]?.container?.map((item, index) => (
                        <div key={index} className="w-full">
                        {item?.type === 'select' ? (
                            <Controller
                            name={item?.name}
                            control={control}
                            render={({ field }) => (
                                <select
                                {...field}
                                onChange={(e) => {
                                    field.onChange(e);
                                    // handleInputChange();
                                }}
                                className="cursor-pointer text-[0.9vw] m-vw border-[1px] font-medium border-gray-400 text-center text-black p-vw w-full max-w-[15vw]"
                                >
                                <option value="no preferences" className="text-blue-950 focus:outline-none text-[0.9vw]" disabled hidden>
                                    No Preferences
                                </option>
                                {item?.options?.map((option, optionIndex) => (
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
                          <div className='mt-vw'><CustomDropdown options={item?.options} onChange={handleDropdownChange} /></div>
                        )}
                        </div>
                    ))}
                </div>

                <div className="flex ml-vw items-center">
                    <input type="checkbox" className="w-vw h-vw" />
                    <span className='text-[0.8vw] ml-0.5vw'>Show Let Agreed</span>
                </div>
                <div className="flex items-end justify-end mr-vw">
                <section className='flex justify-center mr-vw items-center bg-slate-300 p-vw'>
                            <Icon icon="solar:settings-linear" className='text-[1.3vw] text-white' />
                            <span className='text-white text-vw font-medium pl-[0.3vw] cursor-pointer'>Advanced search</span>
                        </section>
                        
                        <button type='submit' className='flex justify-center text-white items-center bg-pink-400 p-vw'>
                            <Icon icon="solar:settings-linear" className='text-[1.3vw] text-white' /> <span className='text-vw'>Search</span>
                        </button>
                </div>
            </section>
        </div>
    </form>
  )
}

export default RentSection