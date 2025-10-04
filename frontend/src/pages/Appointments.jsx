import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointments = () => {

  const { docId } = useParams();
  const { doctors, CurrencySymbol } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null)

  const fetchDoctor = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDoctor();
  }, [doctors, docId])

  if (!docInfo) {
    return <p>loading........</p>
  }


  return (
    <div>
      {/* ---doctors details--- */}
      <div className='flex flex-col sm:flex-row gap-4'>

        <div className='bg-primary w-full sm:max-w-72 rounded-lg'>
          <img src={docInfo.image} alt="" />
        </div>

        {/* ---doc name and degree--- */}
        <div className='flex-1 border border-gray-400 p-8 py-7 rounded-lg bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-500'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>


          {/* ---doc about--- */}
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900'>About <img src={assets.info_icon} alt="" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <p>
            Appointment Fee : <span>{CurrencySymbol}{docInfo.fees}</span>
          </p>

        </div>

      </div>
    </div>
  )
}

export default Appointments;