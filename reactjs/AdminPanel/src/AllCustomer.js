import React, { useEffect, useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import {BsFillTrashFill} from 'react-icons/bs'
import { json, Link, useParams } from 'react-router-dom'
import Header from './Component/Header'

function AllCustomer() {
  const [Customers, setCustomers] = useState([])
  const [showCategory, setshowCategory] = useState([])


  const ShowCustomer = async () => {
    let data = await fetch('/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    })

    let res = await data.json()
    setCustomers(res)
    
    console.log('hey kidaa show', res)
    console.log('hey ', Customers)
    
   
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
      ShowCustomer()
      
     
    },[Customers])
  return (
   <>
   <Header />
   <div className='body-divide container-fluid'>
     <Form className="d-flex justify-content-center p-4">
              <Form.Control style={{width: '25%'}}µ
              // onChange={(e)=>SearchCategory(e.target.value)}
                type="search"
                placeholder="Search Customer by email"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
     <table className="table" style={{boxShadow:'0px 4px 4px 4px #495057bd',tableLayout: 'fixed'}}>
                    <thead>
                      <tr className="first text-center" style={{height:'2rem',overflow:'hidden'}}>
                        {/* <th>Image</th> */}
                        <th> ID</th>
                        <th>First Name</th>
                        <th className="a-center">Last Name</th>
                        <th className="a-center">Email</th>
                      </tr>
                    </thead>
                    <tbody className='text-center'>
                         {
                         Customers.length != 0 ?
                           Customers.map(val=>(
                            <tr>
                              {
                                Object.keys(val).filter(check => !check.includes("__v"&&"password")).map((item,index)=>(
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
  </div>
   
   </>
  )
}


export default AllCustomer