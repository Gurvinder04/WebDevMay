import React, { useEffect, useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {MdDelete} from 'react-icons/md'

function EditProduct() {
    const {id} = useParams()
  const navigate = useNavigate()
  const [Sample, setsample] = useState({
    productid: '',
    productname: '',
    category:'',
    description: '',
    rate: '',
    quantity:'',
    fileimage:''
  })
  let name, value;
  const Data = (e) => {
    console.log('entered data')
    name = e.target.name
    value = e.target.value
    setsample({ ...Sample, [name]: value })
    console.log(Sample)
  }

  const SubmitData = async () => {
    const { productname,category, description, rate,quantity,fileimage } = Sample
    if (productname && category && description && rate &&quantity && fileimage) {
      let data = await fetch('/product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ productname,category, description, rate,quantity,fileimage })
      })

      let res = await data.json()
      console.log('hey', res)
      if (res.status === 400 || res === null) {
        window.alert("Invalid details")
      }
      else {
        //dispatch({type:"USER",payload:true})
        window.alert("successfully submitted")


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
      console.log(res)
      setsample(res)
      console.log('hey sample1',Sample)
      
   }

  useEffect(()=>{
    //fetchData();
  
    },[])

        

 
  
 
  return (
    <>
    
        
        <div className="container container_product">

          <section className="panel panel-default">
          <div className="panel-heading">
          <h3 className="panel-title">Edit Product</h3>
        </div>

            <div className="panel-body">

              <form  action='POST'  className="form-horizontal" role="form">
                <div className="form-group">
                  <label className="col-sm-3 control-label">Product ID</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name='productid' value={Sample.productid} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Product Name</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control" name='productname' value={Sample.productname} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Category</label>
                  <div className="col-sm-3">
                    <select className="form-control" name='category' value={Sample.category} onChange={Data}>
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
                    <textarea className="form-control" name='description' value={Sample.description} onChange={Data}></textarea>
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Price</label>
                  <div className="col-sm-3">
                    <input type="text" className="form-control" name='rate' value={Sample.rate} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-sm-3 control-label">Availability</label>
                  <div className="col-sm-3">
                    <input type="text" className=" col-sm-3 form-control"  name='quantity' value={Sample.quantity} onChange={Data} />
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-3 control-label">Upload Image</label>
                  <div className="col-sm-3">
                    <label className="control-label small" 
                    >informat like (jpg/png):</label> <input type="file" name="fileimage" value={Sample.fileimage} onChange={Data} />
                  </div>

                </div>

                <hr></hr>
                <div className="form-group">
                  <div className="col-sm-offset-3 col-sm-9">
                    <button type="submit" className="btn btn-primary addbutton" onClick={SubmitData}>UPDATE</button>
                   
                    
                  </div>
                </div>
              </form>

            </div>
          </section>


        </div>
        
    
        
      <Button onClick={fetchData}>get data</Button>
{
    console.log(id)
}
      


    </>
  )
}

export default EditProduct