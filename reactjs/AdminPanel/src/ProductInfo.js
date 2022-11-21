import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'
import { json, Link, useParams } from 'react-router-dom'
import Header from './Component/Header'

function ProductInfo() {
  const [showItems, setshowItems] = useState([])
  const [itemState, setitemState] = useState(false)

    // const ShowProduct = async () => {
    //   let data = await fetch('/product', {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify()
    //   })
  
    //   let res = await data.json()
    //   setshowItems(res)
      
    //   console.log('hey kidaa', res)
    //   console.log('hey ', showItems)
    //   setitemState(!itemState)
     
    // }
  
  

    
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
      ShowProduct()
     
    },[showItems])
  return (
   <>
   <Header />
        

   <div className='body-divide container-fluid'>
   {/* {
    itemState ===false ?
     <Button onClick={ShowProduct}>Show Products</Button>
    : */}
     <Form className="d-flex justify-content-center p-4">
              <Form.Control style={{width: '25%'}}
                type="search"
                placeholder="Search Products"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
     <table className="table" style={{boxShadow:'0px 4px 4px 4px #495057bd'}}>
                    <thead>
                      <tr className="first text-center">
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
                              <td><Link to={`/editproduct/${val._id}`} ><Button variant="outline-success">EDIT</Button></Link></td>
                             <td><BsFillTrashFill onClick={(e)=>DeleteData(val._id)}></BsFillTrashFill></td>
                            </tr>  
                            
                          ))
                         :
                          ''
                         }
                        
      
                        
                     
                    </tbody>
                    
                  </table>
                 
{/* } */}
                  
                 
                  
                   
                  
   
  </div>
   
   </>
  )
}

export default ProductInfo