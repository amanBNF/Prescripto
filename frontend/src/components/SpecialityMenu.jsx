import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id='speciality'>
        <h1>Find by Speciality</h1>
        <p>Explore our list of medical specialities to find the right doctor for your needs.</p>
        <div>
            {specialityData.map((item,index) => (
                <Link to={`/doctors/${item.speciality}`}>
                    
                </Link>
            ))}
        </div>
    </div>
  )
}

export default SpecialityMenu