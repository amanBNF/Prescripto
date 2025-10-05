import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({ docId, speciality }) => {

    const { doctors } = useContext(AppContext)
    const navigate = useNavigate()

    const [relDoc, setRelDoc] = useState([])

    useEffect(() => {
        if (doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData);
        }
    }, [doctors, speciality, docId])

    return (

        <div className="flex-row mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relDoc.slice(0, 5).map((item, index) => (
                <div
                    onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
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

    )
}

export default RelatedDoctors