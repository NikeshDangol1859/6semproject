import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminHome from './componets/AdminHome'
import AdminLogin from './componets/AdminLogin'

function AdminSection() {
  return (
    <>
    <Routes>
            
            <Route path="/" element={<AdminHome/>}/>
            {/* <Route path="/registration" element={<Registration/>}/> */}
            <Route path="/login" element={<AdminLogin/>}/>
            
            {/* <Route path="/*" element={<Pagenotfound/>}/> */}
        </Routes>
    </>
  )
}

export default AdminSection
