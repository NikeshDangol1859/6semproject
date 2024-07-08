import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Login'
import Registration from './Registration'

function Section() {
  return (
    <>
    <Routes>
            
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/registration" element={<Registration/>}/> */}
            <Route path="/login" element={<Login/>}/>
            
            {/* <Route path="/*" element={<Pagenotfound/>}/> */}
        </Routes>
      
    </>
  )
}

export default Section
