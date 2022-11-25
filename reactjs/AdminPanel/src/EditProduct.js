import React, { useEffect, useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import productinfo from './ProductInfo'
//import {MdDelete} from 'react-icons/md'

function EditProduct() {
    const {id} = useParams()
  const navigate = useNavigate()
  const [singleData,setSingleData] = useState({
    productid: '',
    productname:'',
    category:'',
    description:'',
    price:'',
    quantity:'',
    fileimage:''
    
  })
  
  
  let name, value;
  const Data = (e) => {
    console.log('entered data')
    name = e.target.name
    value = e.target.value
    setSingleData({ ...singleData, [name]: value })
    console.log(singleData)
  }

  const UpdateData = async () => {
    const { productname,category, description, price,quantity,fileimage } = singleData
    if (productname || category || description || price || quantity || fileimage) {
      let data = await fetch(`/product/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productname,category, description, price,quantity,fileimage })
      })

      let res = await data.json()
      console.log('hey', res)
      if (res.status === 400 || res === null) {
        window.alert("Invalid details")
      }
      else {
        //dispatch({type:"USER",payload:true})
        window.alert("successfully submitted")
        navigate('/productinfo')
      }
    }
    else {
      console.log('INVALID INPUT')
    }

  }

  const  fetchData =async()=>{
    let data= await   fetch(`/product/${id}`,{
           method:'GET',
           headers:{
             'Content-Type':'application/json'
           },
           body:JSON.stringify()
         })
      let res = await data.json()
        console.log('hey with id',res)
        // let obj ={
        //   productid: res._id,
        //   productname: res.productname,
        //   category:res.category,
        //   description: res.description,
        //   price: res.price,
        //   quantity:res.quantity,
        //   //fileimage:res.image

        // }
       
        console.log('In Object') 
        setSingleData({
          productid: res._id,
          productname: res.productname,
          category:res.category,
          description: res.description,
          price: res.price,
          quantity:res.quantity,
          //fileimage:res.image
        })
        console.log('single data is here',singleData)
      
   }
  useEffect(()=>{
    fetchData();
  
    },[])

        

 
  
 
  return (
    <>    
        <div className="container container_product">
          <section className="panel panel-default">
          <div className="panel-heading">
          <h3 className="panel-title">Edit Product</h3>
        </div>

            <div className="panel-body">

              <form  method='POST'  className="form-horizontal" enctype="multipart/form-data">
                <div className="form-group">
                  <label className="col-sm-3 control-label">Product ID</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name='productid' value={singleData.productid}  onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Product Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name='productname' value={singleData.productname} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Category</label>
                  <div className="col-sm-3">
                    <select className="form-control" name='category' value={singleData.category} onChange={Data}>
                      <option value=""></option>
                      <option value="Pens&Pencils">Pens&Pencils</option>
                      <option value="Notebooks">Notebooks</option>
                      <option value="Office Stationary">Office Stationary</option>
                      <option value="Covers">Covers</option>
                      <option value="Stuffs">Stuffs</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Description</label>
                  <div className="col-sm-9">
                    <textarea className="form-control" name='description' value={singleData.description} onChange={Data}></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Price</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" name='price' value={singleData.price} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Availability</label>
                  <div className="col-sm-3">
                    <input type="text" className=" col-sm-3 form-control"  name='quantity' value={singleData.quantity} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Upload Image</label>
                  <div className="col-sm-3">
                    <label className="control-label small" 
                    >informat like (jpg/png):</label> <input type="file" name="fileimage" value={singleData.fileimage} onChange={Data} />
                  </div>
                </div>
                <hr></hr>
                <div className="form-group">
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-primary addbutton" onClick={UpdateData}>UPDATE</button>
                   
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
        
    
        
      {console.log(id)}
      


    </>
  )
}

export default EditProduct