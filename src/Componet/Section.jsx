import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './Login'
import AdminApp from '../Admin/AdminApp'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import Registration from './Registration'
import Contact from './pages/Contact'

function Section() {
  return (
    <>
    <Routes>
            
            <Route path="/admin/*" element={<AdminApp/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/Products" element={<Products/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/ProductDetails/:pro_id" element={<ProductDetails/>}/>
            <Route path="Products/ProductDetails/:pro_id" element={<ProductDetails/>}/>

            
            {/* <Route path="/*" element={<Pagenotfound/>}/> */}
        </Routes>
      
    </>
  )
}

export default Section
