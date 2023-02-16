import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Signup from './Signup'

const AllRoutes = () => {
  return (
    <div>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default AllRoutes
