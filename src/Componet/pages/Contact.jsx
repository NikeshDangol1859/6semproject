import React from 'react'
import Shopping from '../Shopping'

function Contact() {
  return (
    <>
    <Shopping/>
    <div className="Cont">
        
        <div className="Crow">
                {/* sidnav bar (Catagory)*/}
                <ul className="navbar-nav me-auto text-center">
                <li className="nav-item bg-info">
                    <div className="nav-link text-light"><h2>Contacts</h2></div>
                </li>
                <div className='bg-light'>
                <p className="text-dark mt-3">
                    <i className="fa-solid fa-phone mt-3" /> 9812345678
                    <br />
                    <i className="fa-solid fa-location-dot mt-3" /> Chapagaun,Lalitpur
                    <br />
                    <i className="fa-solid fa-envelope mt-3" /> info@gmail.com
                </p>
                </div>
                </ul>
        </div>
        
        <div className='img'>
                {/* contats */}     
            <img src="location.png" className="d-block w-100" alt=" "/>         
        </div>
        <div className="col-md-4 "> 
            <div className="info">
                
                    {/* contats */}
                            
                        <p align="justify" className="m-auto">E-commerce has evolved over the past few years and since it’s easier 
                            and more convenient, it is evident that customers are actually switching 
                            to the trend of online shopping. Daraz, the Nepali shopping store, brings 
                            a whole new concept by showcasing a number of famous brands under one 
                            roof. Not only does it fulfill clothing necessities of both men and women 
                            but you can also shop for all kinds of appliances like air conditioners,
                            heaters, refrigerators, LED TVs and a lot more. Simply select your 
                            favorite brand like Samsung, Apple, HP, Huawei, Dell, Canon, Nikon, 
                            etc and get yourself the best electronic items.
                        </p>       
                </div>
            </div>
    </div>
      
    </>
  )
}

export default Contact
