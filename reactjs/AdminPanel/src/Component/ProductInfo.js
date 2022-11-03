import React from 'react'
import { Button } from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'
import { useParams } from 'react-router-dom'
function ProductInfo(showitems) {
    
    const DeleteData=async (removeId)=>{
        const dataId = removeId
        console.log(dataId)
        let data = await fetch('/product',{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({dataId})
        })
       
        let res = await data.json()
        console.log('hey',res) 
    }
  return (
   <>
     <table className="table">
                    <thead>
                      <tr className="first">
                        {/* <th>Image</th> */}
                        <th>Product Name</th>
                        <th className="a-center">Stock</th>
                        <th className="a-center">Price</th>
                        <th className="a-center">Category</th>
                        <th className="a-right">Published</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{showitems.prop.ProductName}</td>
                            <td>Limited</td>
                            <td></td>
                            <td>Pens</td>
                            <td></td>
                            <td>EDIT</td>
                            <td><MdDelete></MdDelete></td>
                        </tr>
                     
                    </tbody>
                  </table>
   
   {
    console.log('info ala',showitems)
   }
   
   </>
  )
}

export default ProductInfo