import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLettingsByIdQuery, useGetSalesByIdQuery } from '../../store/storeApi';
import { propertyUpdateForm } from '../../Data';
import {useForm, Controller} from 'react-hook-form';
import Layout from '../../Layout/Layout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Maps from '../../Component/Maps';

const UpdateProperty = () => {
    const {id} = useParams()
    const {data: lettings} = useGetLettingsByIdQuery(id);
    const [propertyDetails, setPropertyDetails] = useState(lettings);
    const [searchedLocation, setSearchedLocation] = useState(null)
    const navigate = useNavigate()
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
      })
    console.log(lettings, 'update');
    const {handleSubmit, control, reset, setValue} = useForm({
        defaultValues: {
            propertyName: "",
            PropertyType  :"",
            pricePerMonth :"",
            pricePerWeek : 0,
            furnished :"",
            propertyLocation :"",
            propertyDescription :"",
            bedrooms : 0,
            bathrooms : 0,
            bills :"",
            reception :"",
            keyFeatures: "",
            lettingDetails: "",
            areaGuide: "",
            livingRoomGuide: "",
            kitchenGuide: "",
            bedroomsGuide: "",
            bathroomsGuide: "",
            externalsGuide: "",
            additionalGuide: "",
            lat: 0,
            lng: 0,
            }
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue(name, value);
      };

      const onSubmit = async (data) => {
        const formData = new FormData();
      
        // Append text data to formData
        for (const key in data) {
          if (data[key] !== undefined) {
            formData.append(key, data[key]);
          }
        }
        // Convert coordinates to numbers and append to formData
      formData.append('lat', coordinates?.lat);
      formData.append('lng', coordinates?.lng);
     
        // // Append image to formData
        // if (tradesManProfile?.image) {
        //   formData.append('image', tradesManProfile.image);
        // }
      
        try {
          const result = await (formData);
      
          toast.success("Post Added successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
          });
      
          setTimeout(() => {
            // navigate('/');
          }, 3000);
      
          console.log(result, "from onSubmit")
        //   navigate(`/profile/${profileId}`);
        } catch (error) {
          toast.error("An error occurred while adding post", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
          });
          console.error(error);
        }
      };

      useEffect(() => {
        console.log(searchedLocation, 'searchedLocation');
        const lat = Number(searchedLocation?.center?.[0]) || 0;
        const lng = Number(searchedLocation?.center?.[1]) || 0;
      
        setCoordinates({ ...coordinates, lat, lng });
      }, [searchedLocation]);
  return (
    <div>
        <Layout>
        <main className="w-full col-center bg-gray-100 p-3vw">
        <h1 className='text-center text-2vw font-semibold italic underline '>Update Property: {propertyDetails?.propertyName}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full col-center wax-w-[80vw] p-vw">
            <div className="grid grid-cols-2 w-full gap-2">
            {propertyUpdateForm?.map((item, index)=>{
                return <main className='p-vw' key={index}>
                    <label htmlFor="" className='text-vw m-0.5vw font-medium mb-0.3vw'>{item?.label}</label> <br />
                   {item?.type === 'text' || item?.type === 'number' ? <>
                   <Controller
                      name={item?.name}
                      control={control}
                      rules={item?.rules}
                      render={({ field }) => (
                        <input
                          {...field}
                          onChange={handleInputChange}
                          className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                          type={item?.type}
                          placeholder={item?.placeholder}
                        />
                      )}
                    />
                   </>: item?.type === 'select' ? <>
                   <Controller 
                   name={item?.name}
                   control={control}
                   render={({ field }) => (
                     <select 
                     className='text-vw p-0.5vw border-[1px] w-full max-w-[30vw] focus:outline-none focus:shadow-md rounded-md'
                     {...field}
                     onChange={handleInputChange}
                     >
                        <option className='text-vw' value="">Select the option</option>
                     {item?.options?.map((option, index)=>{
                         return <option className='text-vw' key={index} value={option?.value}>{option?.label}</option>
                     })}
                     </select>
                   )}
                   />
                   </> : 
                   <Controller
                   name={item?.name}
                   control={control}
                   rules={item?.rules}
                   render={({ field }) => (
                     <textarea
                       {...field}
                       onChange={handleInputChange}
                       className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md spin-button-none'
                       type={item?.type}
                       placeholder={item?.placeholder}
                     ></textarea>
                   )}
                 />
                   }
                </main>
            })}
            </div>
            <div className="m-vw w-full ">
            <Maps setSearchedLocation={setSearchedLocation} />
            </div>
            {/* <button type="submit" className='bg-blue-500 text-white mt-30vw p-0.5vw rounded-md'>Update Property</button> */}
        </form>

        </main>

        </Layout>
    </div>
  )
}

export default UpdateProperty