import React, { useState } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom';
import ProductInfo from './Component/ProductInfo'
import {MdDelete} from 'react-icons/md'

function AddProduct() {
  const[check,setCheck]=useState(false)
  const navigate = useNavigate()
  const [showItems, setshowItems] = useState([])
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


      }
    }

    else {
      console.log('INVALID INPUT')
    }

  }


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
   setCheck(!check)
    //navigate('/productinfo')
  }

  const Go=()=>{
    if(check){
      return (
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
                                 <td>{showItems.ProductName}</td>
                                 <td>Limited</td>
                                 <td>{showItems.Price}</td>
                                 <td>Pens</td>
                                 <td></td>
                                 <td>EDIT</td>
                                 <td><MdDelete></MdDelete></td>
                             </tr>
                          
                         </tbody>
                       </table>
   )     
      }
    
    else{
      return(
        <>
         <div class="container container_product">

<section class="panel panel-default">
<div class="panel-heading">
<h3 class="panel-title">Product Form</h3>
</div>

  <div class="panel-body">

    <form  action='POST'  class="form-horizontal" role="form">
      <div class="form-group">
        <label class="col-sm-3 control-label">Product Name</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" name='productname' value={Sample.productname} onChange={Data} />
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">Category</label>
        <div class="col-sm-3">
          <select class="form-control" name='category' value={Sample.category} onChange={Data}>
            <option value=""></option>
            <option value="Pens&Pencils">Pens&Pencils</option>
            <option value="Notebooks">Notebooks</option>
            <option value="Office Stationary">Office Stationary</option>
            <option value="Covers">Covers</option>
            <option value="Stuffs">Stuffs</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">Description</label>
        <div class="col-sm-9">
          <textarea class="form-control" name='description' value={Sample.description} onChange={Data}></textarea>
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">Price</label>
        <div class="col-sm-3">
          <input type="text" class="form-control" name='rate' value={Sample.rate} onChange={Data} />
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label">Availability</label>
        <div class="col-sm-3">
          <input type="text" class=" col-sm-3 form-control"  name='quantity' value={Sample.quantity} onChange={Data} />
        </div>
      </div>
      <div class="form-group">
        <label  class="col-sm-3 control-label">Upload Image</label>
        <div class="col-sm-3">
          <label class="control-label small" 
          >informat like (jpg/png):</label> <input type="file" name="fileimage" value={Sample.fileimage} onChange={Data} />
        </div>

      </div>

      <hr></hr>
      <div class="form-group">
        <div class="col-sm-offset-3 col-sm-9">
          <button type="submit" class="btn btn-primary addbutton" onClick={SubmitData}>Add Product</button>
         
          
        </div>
      </div>
    </form>

  </div>
</section>


</div>

        
        </>
      )
     
    }
  }



  return (
    <>
      {/* <Form action='POST' onSubmit={(e)=>{
      e.preventDefault()
      
    }}>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name='productname' value={Sample.productname} onChange={Data} />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" name='description' value={Sample.description} onChange={Data} />
        </Form.Group>
      </Row>

      {/* <Form.Group as={Col}>
          <Form.Label>Category</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option></option>
            <option>Pens&Pencils</option>
            <option>Notebooks</option>
            <option>Office Stationary</option>
            <option>Covers</option>
            <option>Stuffs</option>
          </Form.Select>
        </Form.Group> */}

      {/* <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' name='rate' value={Sample.rate} onChange={Data}/>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={SubmitData}>
        Submit
      </Button>

      <Button variant="primary" type="submit" onClick={ShowProduct}>
        Show Products
      </Button>
    </Form>
    

    {
      showItems != undefined ?
      showItems.map((items, index) => (
        <ProductInfo items={items} key={index}  />

      ))
      :
      ''
    }
    {
      console.log('hey ',showItems) 
    } */}


      <div class="container1">
        <div class="header">
          <div class="header-logo">
            <svg class="site-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M512 256a15 15 0 00-7.1-12.8l-52-32 52-32.5a15 15 0 000-25.4L264 2.3c-4.8-3-11-3-15.9 0L7 153.3a15 15 0 000 25.4L58.9 211 7.1 243.3a15 15 0 000 25.4L58.8 301 7.1 333.3a15 15 0 000 25.4l241 151a15 15 0 0015.9 0l241-151a15 15 0 00-.1-25.5l-52-32 52-32.5A15 15 0 00512 256zM43.3 166L256 32.7 468.7 166 256 298.3 43.3 166zM468.6 346L256 479.3 43.3 346l43.9-27.4L248 418.7a15 15 0 0015.8 0L424.4 319l44.2 27.2zM256 388.3L43.3 256l43.9-27.4L248 328.7a15 15 0 0015.8 0L424.4 229l44.1 27.2L256 388.3z" />
            </svg>
            <span class="site-title">Shopify</span>

          </div>
          <div class="header-search">
            <button class="button-menu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 385">
              {/* <path d="M12 120.3h361a12 12 0 000-24H12a12 12 0 000 24zM373 180.5H12a12 12 0 000 24h361a12 12 0 000-24zM373 264.7H132.2a12 12 0 000 24H373a12 12 0 000-24z" /> */}
            </svg></button>
            {/* <input type="search" placeholder="Search Documentation..." /> */}
          </div>
          <Button className='AdminLogout'>LogOut</Button>
        </div>
        <div class="main">
          <div class="sidebar">
            <ul>
              <li><a href="/home" class="active"><i class="lni lni-home"></i><span>Dashboard</span></a></li>
              <li><a href="/addproduct"><i class="lni lni-text-format"></i><span>Add Product</span></a></li>
              <li><a href="#"><i class="lni lni-bar-chart"></i><span>Customer</span></a></li>
              <li><a href="#"><i class="lni lni-grid"></i><span>Events</span></a></li>
              <li><a href="#"><i class="lni lni-bullhorn"></i><span>Notifications</span></a></li>
              <li><a href="#"><i class="lni lni-support"></i><span>Help & Support</span></a></li>
            </ul>
          </div>

        </div>
        </div>
        
        {/* <div class="container container_product">

          <section class="panel panel-default">
          <div class="panel-heading">
          <h3 class="panel-title">Product Form</h3>
        </div>

            <div class="panel-body">

              <form  action='POST'  class="form-horizontal" role="form">
                <div class="form-group">
                  <label class="col-sm-3 control-label">Product Name</label>
                  <div class="col-sm-9">
                    <input type="text" class="form-control" name='productname' value={Sample.productname} onChange={Data} />
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-3 control-label">Category</label>
                  <div class="col-sm-3">
                    <select class="form-control" name='category' value={Sample.category} onChange={Data}>
                      <option value=""></option>
                      <option value="Pens&Pencils">Pens&Pencils</option>
                      <option value="Notebooks">Notebooks</option>
                      <option value="Office Stationary">Office Stationary</option>
                      <option value="Covers">Covers</option>
                      <option value="Stuffs">Stuffs</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-3 control-label">Description</label>
                  <div class="col-sm-9">
                    <textarea class="form-control" name='description' value={Sample.description} onChange={Data}></textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-3 control-label">Price</label>
                  <div class="col-sm-3">
                    <input type="text" class="form-control" name='rate' value={Sample.rate} onChange={Data} />
                  </div>
                </div>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Availability</label>
                  <div class="col-sm-3">
                    <input type="text" class=" col-sm-3 form-control"  name='quantity' value={Sample.quantity} onChange={Data} />
                  </div>
                </div>
                <div class="form-group">
                  <label  class="col-sm-3 control-label">Upload Image</label>
                  <div class="col-sm-3">
                    <label class="control-label small" 
                    >informat like (jpg/png):</label> <input type="file" name="fileimage" value={Sample.fileimage} onChange={Data} />
                  </div>

                </div>

                <hr></hr>
                <div class="form-group">
                  <div class="col-sm-offset-3 col-sm-9">
                    <button type="submit" class="btn btn-primary addbutton" onClick={SubmitData}>Add Product</button>
                   
                    
                  </div>
                </div>
              </form>

            </div>
          </section>


        </div>
       */}
       <Go></Go>
      <Button variant="primary" type="submit" onClick={ShowProduct}>
        Show Products
      </Button>
{
  console.log(showItems)
}

    </>
  )
}

export default AddProduct