import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  let [search,setsearh]= useState("")

  return (
    <>
    <nav className="navbar  navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="/src/assets/logo.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/"> <i className="fa-solid fa-house" /> Home</Link>
        </li>    
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">  Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">  Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">  Cart <i className="fa-solid fa-cart-shopping"><sup>
    0        </sup></i> </a>
        </li>    
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">  Total Price</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link fw-bolder" aria-current="page" to="/registration">  Register <i className="fa-regular fa-registered" /></Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setsearh(e.target.value)} />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      
    </>
  )
}

export default Nav
