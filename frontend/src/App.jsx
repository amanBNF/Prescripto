import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div id='root' className='mx-4 sm:mx-[10%]'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/appointment/:docId' element={<Appointments />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App