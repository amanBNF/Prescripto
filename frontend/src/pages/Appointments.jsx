import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Appointments = () => {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null)

  const fetchDoctor = async () => {
    const docInfo = doctors.find(doc => doc._id === docId);
    setDocInfo(docInfo);
    console.log(docInfo);
  }

  useEffect(() => {
    fetchDoctor();
  }, [doctors, docId])
  

  return (
    <div></div>
  )
}

export default Appointments;