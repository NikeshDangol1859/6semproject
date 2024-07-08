import React, { useEffect, useState } from 'react'
import Slidder from '../Slidder';

function Home() {
    const [apiData, setApiData] = useState([]);


    useEffect(() => {
        // Fetching product data
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setApiData(data);
            })
            
    }, []);
  return (
    <>
    <Slidder/>
    <div className="container">
                <h1 className='container-expand-lg text-center bg-warning my-2'>Products</h1>
                <div className="row">
                    {apiData.map(product => (
                        <div className="col-md-3 d-flex my-3">
                        <div className="row">
                        <div className="card" style={{ width: '18rem' }}>
                        
                            <div key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <p>Name: {product.title}</p>
                                    <p>Description: {product.description}</p>
                                    <p>Price: $ {product.price}</p>
                                    <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>

                                </div>
                                

                            </div>
                                
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

    
      
    </>
  )
}

export default Home
