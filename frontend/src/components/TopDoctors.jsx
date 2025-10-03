import React, { useContext } from 'react'
// import { doctors } from '../assets/assets';
import {useNavigate} from 'react-router-dom' 
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className='flex flex-col items-center gap-4 my-15 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>

            <div className="flex-row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {doctors.slice(0, 8).map((item, index) => (
                    <div
                        onClick={() => navigate(`/appointment/${item._id}`)}
                        key={index}
                        className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:-translate-y-2 transition-transform duration-300"
                    >
                        {/* Doctor Image */}
                        <img
                            className="w-full bg-blue-100 h-60 object-cover"
                            src={item.image}
                            alt={item.name}
                        />

                        {/* Card Body */}
                        <div className="w-full p-4 text-center">
                            {/* Availability */}
                            <div className="flex items-center justify-center gap-2 text-sm text-green-500 mb-2">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Available</span>
                            </div>

                            {/* Doctor Info */}
                            <p className="font-semibold text-gray-800">{item.name}</p>
                            <p className="text-gray-500 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => {navigate('/doctors'); scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
        </div>
    )
}

export default TopDoctors;