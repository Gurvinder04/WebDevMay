import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'
import { json, Link, useParams } from 'react-router-dom'
import Header from './Component/Header'

function ProductInfo() {
  const [showItems, setshowItems] = useState([])
  const [itemState, setitemState] = useState(false)
  const [showCategory, setshowCategory] = useState([])


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
    
    console.log('hey kidaa show', res)
    console.log('hey ', showItems)
    setitemState(!itemState)
   
  }






    const SearchCategory = async (param) => {
      setitemState (!itemState)
      console.log(param)
      let category = param
      let data = await fetch(`/products/${category}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify()
      })
  
      let res = await data.json()
      setshowCategory(res)
      
      console.log('hey kidaa cat', res)
      console.log('hey ', showCategory)
      
     
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
      ShowProduct()
      
     
    },[showItems])
  return (
   <>
   <Header />
        

   <div className='body-divide container-fluid'>
   
     <Form className="d-flex justify-content-center p-4">
              <Form.Control style={{width: '25%'}}µ
              onChange={(e)=>SearchCategory(e.target.value)}
                type="search"
                placeholder="Search Products by Category"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={ShowProduct}>Search</Button>
            </Form>
     <table className="table" style={{boxShadow:'0px 4px 4px 4px #495057bd',tableLayout: 'fixed'}}>
                    <thead>
                      <tr className="first text-center" style={{height:'2rem',overflow:'hidden'}}>
                        {/* <th>Image</th> */}
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th className="a-center">Category</th>
                        <th className="a-center desp">Description</th>
                        <th className="a-center">Price</th>
                        <th className="a-right">Quantity</th>
                        <th className="a-right">Image</th>
                        <th className="a-right">Featured</th>
                      </tr>
                    </thead>
                    <tbody className='text-center'>
                         {/* {
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
                         } */}


                         {
                          /* SEARCH POINT */
                            showCategory.length == 0 ?
                            (
                            showItems.length != 0 ?
                            showItems.map(val=>(
                           <tr style={{height:'2rem'}}>
                             {
                               Object.keys(val).filter(check => !check.includes("__v")).map((item,index)=>(
                                 <td key={index} style={{overflow:'hidden',whiteSpace:'nowrap',textOverflow:'ellipsis',width:'200'}}>{val[item]}</td> 
                               ))
                             }
                             <td><Link to={`/editproduct/${val._id}`} ><Button variant="outline-success">EDIT</Button></Link></td>
                            <td><BsFillTrashFill onClick={(e)=>DeleteData(val._id)}></BsFillTrashFill></td>
                           </tr>    
                         ))  
                          :
                          'for all'
                          )  
                          :
                          showCategory != undefined ?
                          showCategory.map(val=>(
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
                         'for category'
                         }
                    </tbody>
                    
                  </table>
                 

                  
                 
                  
                   
                  
   
  </div>
   
   </>
  )
}

export default ProductInfo