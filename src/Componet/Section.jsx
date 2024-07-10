import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Login'
import AdminApp from '../Admin/AdminApp'
import ProductDetails from './pages/ProductDetails'

function Section() {
  return (
    <>
    <Routes>
            
            <Route path="/admin/*" element={<AdminApp/>}/>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/registration" element={<Registration/>}/> */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/ProductDetails/:pro_id" element={<ProductDetails/>}/>
            
            {/* <Route path="/*" element={<Pagenotfound/>}/> */}
        </Routes>
      
    </>
  )
}

export default Section
