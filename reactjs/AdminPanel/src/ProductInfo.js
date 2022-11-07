import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import {MdDelete} from 'react-icons/md'
import { json, Link, useParams } from 'react-router-dom'

function ProductInfo() {
  const [showItems, setshowItems] = useState([])
  const [itemState, setitemState] = useState(false)

    const ShowProduct = async () => {
      let data = await fetch('/product', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
  
      let res = await data.json()
      setshowItems(res)
      
      console.log('hey kidaa', res)
      console.log('hey ', showItems)
      setitemState(!itemState)
     
    }
  
  

    
    const DeleteData=async (removeId)=>{
      //e.preventDefault();
        
        console.log(removeId)
        let data = await fetch(`/product/${ removeId}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify()
        })
       
        let res = await data.json()
        console.log('hey',res) 
    }




    useEffect(()=>{
     
     
    },[showItems])
  return (
   <>
   {
    itemState ===false ?
     <Button onClick={ShowProduct}>Show Products</Button>
    :
     <table className="table">
                    <thead>
                      <tr className="first">
                        {/* <th>Image</th> */}
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th className="a-center">Category</th>
                        <th className="a-center desp">Description</th>
                        <th className="a-center">Price</th>
                        <th className="a-right">Quantity</th>
                        <th className="a-right">Image</th>
                      </tr>
                    </thead>
                    <tbody>
                        
                         {
                         showItems.length != 0 ?
                           showItems.map(val=>(
                            <tr>
                              {
                                Object.keys(val).filter(check => !check.includes("__v")).map((item,index)=>(
                                  <td key={index}>{val[item]}</td>
                                ))
                              }
                              <td><Link to={`/editproduct/${val._id}`} ><Button>EDIT</Button></Link></td>
                             <td><MdDelete onClick={(e)=>DeleteData(val._id)}></MdDelete></td>
                            </tr>  
                            
                          ))
                         :
                         ''
                        }
                        
      
                        
                     
                    </tbody>
                    
                  </table>
                 
}
                  
                 
                  
                   
                  
   
  
   
   </>
  )
}

export default ProductInfo