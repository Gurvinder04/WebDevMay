import React, { useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import Header from './Component/Header';


function AddProduct() {
  
  const navigate = useNavigate()

  
  const [Sample, setsample] = useState({
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
        setsample({
          productname: '',
          category:'',
          description: '',
          rate: '',
          quantity:'',
          fileimage:''
        })


      }
    }

    else {
      console.log('INVALID INPUT')
    }

  }

 
  
 
  return (
    <>
    <Header/>
    <div className='body-divide container-fluid'>
        <div className="container container_product">

          <section className="panel panel-default p-5">
          <div className="panel-heading">
          <h3 className="panel-title">Product Form</h3>
        </div>

            <div className="panel-body">

              <form action='/product'   className="form-horizontal" method='post'   encType="multipart/form-data">
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
                    <button type="submit" className="btn btn-dark addbutton" onClick={SubmitData}>Add Product</button>
                   
                    
                  </div>
                </div>
              </form>

            </div>
          </section>


        </div>
        </div>
      

      


    </>
  )
}

export default AddProduct