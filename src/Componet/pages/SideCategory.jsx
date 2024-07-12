import React from 'react'
import { Link } from 'react-router-dom'

function SideCategory() {
  return (
    <>

    
    <div className="side-category sticky-md-top bg-warning text-light p-4 rounded shadow my-4">
    <div className="side-category__title text-center mb-3">
        <h2 className="font-weight-bold">Categories</h2>
    </div>
    <div className="side-category__list">
    <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
        <Link to='/'>
            All <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>           
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Laptop <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Mobile <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Accessories <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Mens Wear <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Kids Wear <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Girls Wear <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Watch <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Electronics <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Beauty Products <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Camera <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
        <div className="side-category__item py-2 px-3 mb-2 bg-light text-dark rounded shadow-sm">
            <Link to='#'>
            Foot Wear <i className="fa-solid fa-arrows-turn-right" />
            </Link>
        </div>
    </div>
</div>
    {/* <div className="side-category sticky-md-top bg-primary">        
        <div className="side-category__title text-center"><h2>Categories</h2></div>
        <div className="side-category__list m-3 text-light">
            <div className="side-category__item">Clothing</div>
            <div className="side-category__item">Electronics</div>
            <div className="side-category__item">Furniture</div>
            <div className="side-category__item">Home & Garden</div>
            <div className="side-category__item">Sports & Outdoors</div>

        </div>        
    </div> */}
    {/* <h1 className='sticky-md-top'>Category</h1>
    <h1>Category</h1> */}
      
    </>
  )
}

export default SideCategory
