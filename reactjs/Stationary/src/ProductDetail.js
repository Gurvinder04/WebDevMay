import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { BsDash, BsFileMinus, BsPlus } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import AddToCart from './AddToCart'
import { useCartContext } from './Context/CartContext'
import CartTable from './Components/CartTable'



function ProductDetail() {
    
    const { id } = useParams()
    const [detail, setdetail] = useState([])
    const [BuyQuantity,setBuyQuantity] = useState(0)
    const addQuantity =(id)=>{
         setBuyQuantity(BuyQuantity++)
    }

    const minQuantity =(id)=>{
        setBuyQuantity(BuyQuantity--)
        
    }

    useEffect(() => {
        fetch(`http://localhost:4000/product/${id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setdetail(data)
    })
          },[detail])
  return (
    <div id="product">
    <div class="product_images">
    <img variant="top" src='https://images.all-free-download.com/images/graphiclarge/color_stationery_03_hd_pictures_166662.jpg' />
    </div>
    <div class="product_details">
        <h2>{detail.productname}</h2>
        <h3>€{detail.price}</h3>

        <div class="about">
            <p>Availability :<span>{detail.quantity}</span></p>
            <p>Product Code : <span>#4657</span></p>   
            <p>Tags : <span>Fashion, Hood, Classic</span> </p>
        </div>

        <p>{detail.description}</p>  
        <div>
        <label>Quantity:</label>
        <BsPlus onClick={(e)=>addQuantity(id)}></BsPlus>
        <input type='text' placeholder='' className='quantity-plus' value={BuyQuantity}></input>
       <BsDash onClick={(e)=>minQuantity(id)}></BsDash>
        </div>
        <div class="cta">
         <AddToCart  product ={detail}/>
    </div>
</div>  
{console.log('here comes deatil',detail)}
</div> 
  )
}

export default ProductDetail