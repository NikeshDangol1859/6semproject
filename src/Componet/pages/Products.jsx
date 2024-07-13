import React, { useContext, useEffect, useState } from 'react'
import SideCategory from './SideCategory';
import { Link } from 'react-router-dom';
import Shopping from '../Shopping';
import { SearchContext } from './SearchContext';

function Products() {
    const [apiData, setApiData] = useState([]);
    const { search } = useContext(SearchContext);


    useEffect(() => {
        // Fetching product data
        fetch('http://localhost:3000/ProductItems')
            .then(res => res.json())
            .then(data => {
                setApiData(data);
            })
            
    }, []);
  return (
    <>
    
    <Shopping/>
    
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <SideCategory/>


            </div>
            <div className="col-md-9">

            <div className="container">
                <h1 className='container text-center bg-warning my-2'>Products</h1>
                <div className="row">
                
                    {apiData.filter((item)=>item.title.toLowerCase().includes(search)) .map((product,index) => (
                        
                        <div className="col-md-4 d-flex my-3">
                        <div className="row" key={product.id}>
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={product.id}>
                                
                                <div className="card-body">
                                <Link to={`ProductDetails/${product.id}`}>
                                <img style={{width:"100%",height:"100%"}} src={product.image} className="card-img-top" alt={product.title} />                                
                                    <p><b className='fs-2 text-center'> {product.title} </b></p>
                                    <p>Description: {product.description}</p>
                                    <p>Price: <b>Rs.</b> {product.price}</p>
                                    </Link>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-warning m-1"> Add To Cart</button>
                                    </div>
                                    

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    
                    ))}
                    
                </div>
            </div>
            </div>
        </div>
    </div>

    
      
    </>
  )
}

export default Products
