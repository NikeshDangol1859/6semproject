import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ProductDetails() {
    
    const { pro_id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        // Fetching product data by ID
        fetch(`http://localhost:3000/ProductItems/${pro_id}`)
            .then(res => res.json())
            .then(data =>setProduct(data))
    }, []);
    // console.log(product);
//     fetch( `https://fakestoreapi.com/products/${pro_id}`)
//             .then(res=>res.json())
//             .then(data=>setProduct(data))


//   },[])
    
  return (
    <>
<h1 className='text-center'>Product Details</h1>
    
<div className="container">        
        <div className="container">
            <div className="row">
            <div className="col-3">
            {/* <img className='card-img-top' src={product.image} alt="" /> */}
            <img style={{width:"100%",height:"100%"}} src={`http://localhost:3000/${product.image}`} className="card-img-top" alt={product.title} />
            {console.log(product.image)}
            </div>
            <div className="col">
                <h2 className='text-center'>{product.title} </h2>
                <h2>Description: </h2> <p className='text-justify'> {product.description} </p>
                <h2>Price: RS. {product.price} </h2>
                <div>
                                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                                        <button type="button" className="btn btn-danger m-1">Cancel</button>
                                    </div>
            </div>
            
                
            </div>
            
        </div>
    </div>
    
    
   
      
    </>
  )
}

export default ProductDetails
