import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddLettingPropertyMutation, useGetLettingsByIdQuery, useGetSalesByIdQuery, useUpdateLettingPropertyMutation } from '../../store/storeApi';
import { propertyUpdateForm } from '../../Data';
import {useForm, Controller} from 'react-hook-form';
import Layout from '../../Layout/Layout';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import Maps from '../../Component/Map/Maps';
import PinLocation from '../../Component/Map/PinLocation';

const UpdateProperty = () => {
    const {id} = useParams()
    const [searchedLocation, setSearchedLocation] = useState(null)
    const {data: lettings} = useGetLettingsByIdQuery(id);
    const [propertyDetails, setPropertyDetails] = useState(null);
    const [image1URL, setImage1URL] = useState('');
    const [image2URL, setImage2URL] = useState('');
    const [image3URL, setImage3URL] = useState('');
    const [image4URL, setImage4URL] = useState('');
    const [image5URL, setImage5URL] = useState('');
    const [showSearchMap, setShowSearchMap] = useState(false)
    const [updateLettingProperty]= useUpdateLettingPropertyMutation()
    const [addLettingProperty] = useAddLettingPropertyMutation() //
    console.log(propertyDetails, 'propertyDetails111111111');

    const [propertyInfo, setPropertyInfo] = useState({
      propertyName: "", propertyType  :"", pricePerMonth :"", pricePerWeek : 0, furnished :"", propertyLocation :"",
      propertyDescription :"", bedrooms : 0, bathrooms : 0, bills :"", reception :"", keyFeatures: "",
      lettingDetails: "", areaGuide: "", livingRoomGuide: "", kitchenGuide: "", bedroomsGuide: "",
      bathroomsGuide: "", externalsGuide: "", aditionalGuide: "",
      image1: "", image2:"", image3:"", image4:"", image5:"", lat: 0, lng: 0,
        });

    const navigate = useNavigate()
    const [coordinates, setCoordinates] = useState({
        lat: null,
        lng: null
      })
    const {handleSubmit, control, reset, setValue} = useForm({
        defaultValues: {
            propertyName: propertyDetails?.propertyName || "", propertyType : propertyDetails?.propertyType || "",
            pricePerMonth: propertyDetails?.pricePerMonth || "", pricePerWeek : propertyDetails?.pricePerWeek || 0,
            furnished : propertyDetails?.furnished || "", propertyLocation : propertyDetails?.propertyLocation || "",
            propertyDescription :propertyDetails?.propertyDescription || "", bedrooms : propertyDetails?.bedrooms || 0,
            bathrooms : propertyDetails?.bathrooms || 0, bills : propertyDetails?.bills || "", reception : propertyDetails?.reception || "",
            keyFeatures: propertyDetails?.keyFeatures || "", lettingDetails: propertyDetails?.lettingDetails || "",
            areaGuide: propertyDetails?.areaGuide || "", livingRoomGuide: propertyDetails?.livingRoomGuide || "",
            kitchenGuide: propertyDetails?.kitchenGuide || "", bedroomsGuide: propertyDetails?.bedroomsGuide || "",
            bathroomsGuide: propertyDetails?.bathroomsGuide || "", externalsGuide: propertyDetails?.externalsGuide || "",
            aditionalGuide: propertyDetails?.aditionalGuide || "", image1: propertyDetails?.image1?.url || "",
            image2: propertyDetails?.image2?.url || "", image3: propertyDetails?.image3?.url || "", image4: propertyDetails?.image4?.url || "",
            image5: propertyDetails?.image5?.url || "", lat: propertyDetails?.lat || 0, lng: propertyDetails?.lng || 0,
          }
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValue(name, value);
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage1URL(imageURL);
        }
      };
      const handleImageChange5 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage5URL(imageURL);
        }
      };
      const handleImageChange2 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage2URL(imageURL);
        }
      };
      const handleImageChange3 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage3URL(imageURL);
        }
      };
      const handleImageChange4 = (e) => {
        const file = e.target.files[0];
        if (file) {
          setPropertyDetails({ ...propertyDetails, [e.target.name]: file });
          const imageURL = URL.createObjectURL(file);
          setImage4URL(imageURL);
        }
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
        if (!propertyDetails?.lat && !propertyDetails?.lng) {
          formData.append('lat', coordinates?.lat);
          formData.append('lng', coordinates?.lng);
        }
        if (propertyDetails?.lat && propertyDetails?.lng && showSearchMap) {
          formData.append('lat', coordinates?.lat);
          formData.append('lng', coordinates?.lng);
        }
    
        // Append image to formData
        if (propertyDetails?.image1) {
          formData.append('image1', propertyDetails.image1);
        }
        if (propertyDetails?.image2) {
          formData.append('image2', propertyDetails.image2);
        }
        if (propertyDetails?.image3) {
          formData.append('image3', propertyDetails.image3);
        }
        if (propertyDetails?.image4) {
          formData.append('image4', propertyDetails.image4);
        }
        if (propertyDetails?.image5) {
          formData.append('image5', propertyDetails.image5);
        }
    
        try {
          if (id) {
            const result = await updateLettingProperty({ id, data: formData });
            console.log(result, 'update');
            toast.success('Property successfully updated', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
            setTimeout(() => {
              navigate('/cms');
            }, 3000);
          } else {
            const result = await addLettingProperty(formData);
            // console.log(result, 'add');
            toast.success('Property successfully created', {
              position: 'top-right',
              autoClose: 3000,
              hideProgressBar: false,
            });
          }
    
          setTimeout(() => {
            navigate('/cms');
          }, 3000);
        } catch (error) {
          toast.error('An error occurred.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
          });
          console.error(error);
        }
      };
    
    useEffect(() => {
      if (lettings) {
        setPropertyDetails(lettings);
  
        // Set default values when 'lettings' data changes
        Object.keys(propertyInfo).forEach((key) => {
          setValue(key, lettings[key]);
        });
  
        // Set image URLs
        setImage1URL(lettings?.image1?.url || '');
        setImage2URL(lettings?.image2?.url || '');
        setImage3URL(lettings?.image3?.url || '');
        setImage4URL(lettings?.image4?.url || '');
        setImage5URL(lettings?.image5?.url || '');
      }
    }, [lettings, setValue]);
      useEffect(() => {
        console.log(searchedLocation, 'searchedLocation');
        const lat = Number(searchedLocation?.center?.[0]) || 0;
        const lng = Number(searchedLocation?.center?.[1]) || 0;
      
        setCoordinates({ ...coordinates, lat, lng });
      }, [searchedLocation]);
  return (
    <div>
        <Layout>
        <main className="w-full relative col-center bg-gray-100 p-3vw">
          <Link className='text-vw absolute top-3vw left-3vw text-white p-0.5vw bg-blue-500 hover:bg-blue-600 rounded-md' to='/cms'>Go Back</Link>
        <h1 className='text-center text-2vw font-semibold italic underline '>{id ? 'Update Property:' : 'Add Property'} {propertyDetails?.propertyName}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full col-center wax-w-[80vw] p-vw">
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
                   </> : item?.type === 'textarea' ?
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
                       rows={5}
                       placeholder={item?.placeholder}
                     ></textarea>
                   )}
                 /> : 
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
                   }
                </main>
                
            })}
             <div className="flex items-center flex-col w-full max-w-[25vw]">
            <img src={propertyDetails?.image1?.url || image1URL } className='w-full bg-slate-300 mt-vw max-w-[20vw] h-[20vw] rounded-md border-[1px] border-gray-300 ' /> <br />
            <input type="file" name='image1' onChange={handleImageChange} className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md' />
          </div>
          <div className="flex items-center flex-col w-full max-w-[25vw]">
            <img src={propertyDetails?.image2?.url || image2URL } className='w-full bg-slate-300 mt-vw max-w-[20vw] h-[20vw] rounded-md border-[1px] border-gray-300 ' /> <br />
            <input type="file" name='image2' onChange={handleImageChange2} className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md' />
          </div>
          <div className="flex items-center flex-col w-full max-w-[25vw]">
            <img src={propertyDetails?.image3?.url || image3URL } className='w-full bg-slate-300 mt-vw max-w-[20vw] h-[20vw] rounded-md border-[1px] border-gray-300 ' /> <br />
            <input type="file" name='image3' onChange={handleImageChange3} className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md' />
          </div>
          <div className="flex items-center flex-col w-full max-w-[25vw]">
            <img src={propertyDetails?.image4?.url || image4URL } className='w-full bg-slate-300 mt-vw max-w-[20vw] h-[20vw] rounded-md border-[1px] border-gray-300 ' /> <br />
            <input type="file" name='image4' onChange={handleImageChange4} className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md' />
          </div>
          <div className="flex items-center flex-col w-full max-w-[25vw]">
            <img src={propertyDetails?.image5?.url || image5URL} className='w-full bg-slate-300 mt-vw max-w-[20vw] h-[20vw] rounded-md border-[1px] border-gray-300 ' /> <br />
            <input type="file" name='image5' onChange={handleImageChange5} className='text-vw p-0.5vw border-[1px] focus:outline-none w-full focus:shadow-md max-w-[30vw] rounded-md' />
          </div>
            </div>
              <p className='text-vw text-white p-0.5vw cursor-pointer rounded-md bg-blue-500' onClick={() => setShowSearchMap(!showSearchMap)}>Chnage Property Location</p>
            <div className="m-vw relative w-full h-full ">
              {propertyDetails?.lat && propertyDetails?.lng && !showSearchMap ? <PinLocation lat={propertyDetails?.lat} lng={propertyDetails?.lng} />: <Maps setSearchedLocation={setSearchedLocation} /> }
              
            </div>
            <button type="submit" className='bg-blue-500 text-white mt-[27vw] p-0.5vw rounded-md'>{id ? 'Update Property' : 'Add Property'}</button>
        </form>

        </main>

        </Layout>
    </div>
  )
}

export default UpdateProperty