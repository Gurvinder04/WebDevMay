import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import AddToCart from './Components/AddToCart'
import FormatPrice from './Helpers/FormatPrice'
import PageNavigation from './Components/PageNavigation'
import { useCartContext } from './Context/CartContext.js'
import { useProductContext } from './Context/ProductContext'
import CardAmount from './Components/CardAmount'




function ProductDetail() {
    
    const { id } = useParams()
    const {getSingleProduct,SingleProduct} = useProductContext()
   // const [detail, setdetail] = useState([])
   
    const API = 'http://localhost:4000'


    useEffect(() => {
    //     fetch(`http://localhost:4000/product/${id}`)
    //       .then(response => response.json())
    //       .then(data => {
    //         //console.log(data)
    //         setdetail(data)
    // })

    getSingleProduct(`${API}/product/${id}`)
          },[])
  return (
    <>
    <div>
      <PageNavigation title={SingleProduct.category} />
    </div>

  
    <div id="product">
    <div className="product_images">
    <img variant="top" src='https://wallpapers.com/images/hd/cute-colorful-confetti-stars-rxuh1k7oq89g2b1i.jpg' style={{width:'41rem',height:'71vh'}} />
    </div>
    <div className="product_details">
        <h2>{SingleProduct.productname}</h2>
        <h3>{<FormatPrice price={SingleProduct.price}/>}</h3>

        <div className="about">
            <p>Availability :<span>{SingleProduct.quantity}</span></p>
            <p>Product Code : <span>#4657</span></p>   
            <p>Tags : <span>Fashion, Hood, Classic</span> </p>
        </div>

        <p>{SingleProduct.description}</p>  
        
        <div className="cta">
        <label>Quantity:</label>
        <CardAmount product={SingleProduct}/>
         {/* <AddToCart  product ={SingleProduct}/> */}
    </div>
</div>  
{/* {console.log('here comes deatil',detail)} */}
</div> 
</>
  )
}

export default ProductDetail