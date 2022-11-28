import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
    const { id } = useParams()
    const [detail, setdetail] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/product/${id}`)
          .then(response => response.json())
          .then(data => {
            console.log(data)
            setdetail(data)
    })
          },[])
  return (
    <div id="product">
    <div class="product_images">
    <img variant="top" src='https://images.all-free-download.com/images/graphiclarge/color_stationery_03_hd_pictures_166662.jpg' />
    </div>
    <div class="product_details">
        <div class="back">
            <span class="material-symbols-outlined">chevron_left</span>
           <h6>Back to <a href="">Woman</a></h6>
        </div>

        <h2>{detail.productname}</h2>
        <h3>€{detail.price}</h3>

        <div class="about">
            <p>Availability :<span>{detail.quantity}</span></p>
            <p>Product Code : <span>#4657</span></p>   
            <p>Tags : <span>Fashion, Hood, Classic</span> </p>
        </div>

        <p>{detail.description}</p>
        <ul>
            <li>Dark blue suit for a tone-on-tone look</li>
            <li>Regular fit</li>
            <li>100% Cotton</li>
            <li>Free shipping with 4 days delivery</li>
        </ul>

        <a href="">Clear Selection</a>
        
        <div class="cta">
            <div class="btn btn_primary">add to cart</div>
            <div class="btn btn_outline_secondary">
                <span class="material-symbols-outlined">favorite</span>add to wishlist</div>
        </div>
    </div>
</div>   
  )
}

export default ProductDetail