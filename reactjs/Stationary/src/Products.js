import React, { useEffect } from 'react'
import { Button, Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap'
import styled from "styled-components"
import FilterSection from './Components/FilterSection'
import CardLayout from './Components/CardLayout'
import Sort from './Components/Sort'
import { useFilterContext } from './Context/FilterContext'
import { FaSearch } from 'react-icons/fa'
import FormatPrice from './Helpers/FormatPrice'
import Dummy from './Dummy'

function Products() {
  const{filter_products} = useFilterContext()
  const {filters:{text,category,price,minPrice,maxPrice},searchValue,all_products,clearFilters} = useFilterContext()


useEffect(()=>{
  
})
  return (
    <Container fluid={true} className='mt-5'>
      {console.log('filtering',filter_products)}
      <div className='mb-4'>
      <form className='cat-mainForm' onSubmit={(e)=>e.preventDefault()}>
      <InputGroup className="mt-2 cat-form">
        <Form.Control aria-label="Text input with dropdown button" name='text' value={text} onChange={searchValue} placeholder="Search Something...." className='cat-inputForm'>
          </Form.Control>
      </InputGroup>
      </form>
      <hr className='cat-hr2'></hr>
      </div> 
      
      <div className='row flex-delivery'>
        {/* <Col>
          <div className='cat-Border'>
        <h6 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'20px'}} className='cat-padding' >Categories</h6>
        <hr className='cat-hr'></hr>
        <ul className='cat-ul'>
        <li><button className='cat-btn'  name="category"  value="all"  onClick={searchValue}>All</button></li>
        <li><button className='cat-btn'  name="category" value="Notebooks"  onClick={searchValue}>Notebooks</button></li>
        <li><button className='cat-btn'   name="category"value="Pens&Pencils"  onClick={searchValue}>Pens&Pencils</button></li>
        <li><button className='cat-btn'   name="category"value="Office Stationary"  onClick={searchValue}>Office Stationary</button></li>
        <li><button className='cat-btn'   name="category"value="Files & Folders"  onClick={searchValue}>Files & Folders</button></li>
        <li><button className='cat-btn'   name="category"value="Desk Accessories"  onClick={searchValue}>Desk Accessories</button></li>
        <li><button className='cat-btn'   name="category"value="Others"  onClick={searchValue}>Others</button></li>
        </ul>
        </div>

        <div className='cat-Border mt-3'>
        <h6 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'20px'}} className='cat-padding' >Filter by price</h6>
        <p>
           <FormatPrice price={price}/>
        </p>
        <input
         type='range'
         name='price'
         min={minPrice} 
         max={maxPrice}
         value={price}
         onChange={searchValue}
         />
        </div>
        <div> <Button className='bg-danger m-5' onClick={clearFilters}>Clear Filters</Button></div>
       
        </Col> */}
        <div className='col d-flex colrough'>
          {
            
              filter_products.length != 0 ?
              filter_products.map((product,index) => (
                //<CardLayout product={product} key={index} />
                 <Dummy product={product} key={index} />
          
              ))
              :
              <div>.......Loading</div>
            
          }
          </div>

        
          
  

    </div>
    {console.log('searching',text)}
    </Container>

   
  )
}


export default Products
