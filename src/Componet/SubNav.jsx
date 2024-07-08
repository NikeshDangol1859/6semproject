import React from 'react'
import { Link } from 'react-router-dom'

function SubNav() {
  return (
    <>
    <div className="container-expand-lg bg-dark">
        <div className="row">
            <div className="col py-3 mx-2 d-flex">
                <h4 className='text-light'>Welcome to Online_shopping </h4>
                <h5 className='text-light mx-4'> <Link className='text-light' to='/login'> Log In </Link></h5>
            </div>
        </div>
    </div>
      
    </>
  )
}

export default SubNav
