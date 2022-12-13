import React, { useEffect } from 'react'
import { Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap'
import styled from "styled-components"
import FilterSection from './Components/FilterSection'
import CardLayout from './Components/CardLayout'
import Sort from './Components/Sort'
import { useFilterContext } from './Context/FilterContext'
import { FaSearch } from 'react-icons/fa'
import FormatPrice from './Helpers/FormatPrice'

function Products() {
  const{filter_products} = useFilterContext()
  const {filters:{text,category,price},searchValue,all_products} = useFilterContext()


useEffect(()=>{
  
})
  return (
    <Container className='mt-5'>
      {console.log('filtering',filter_products)}
      <Row className='d-flex flex-delivery'>
        <Col>
          <div className='cat-Border'>
        <h6 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'20px'}} className='cat-padding' >Categories</h6>
        <hr className='cat-hr'></hr>
        <ul className='cat-ul'>
        <li name="category" value="all" onClick={searchValue}>All</li>
        <li name="category" value="Notebooks" onClick={searchValue}>Notebooks</li>
        <li name="category" value="Pens&Pencils" onClick={searchValue}>Pens&Pencils</li>
        <li name="category" value="Office Stationary" onClick={searchValue}>Office Stationary</li>
        <li name="category" value="Files & Folders" onClick={searchValue}>Files & Folders</li>
        <li name="category" value="Desk Accessories" onClick={searchValue}>Desk Accessories</li>
        <li name="category" value="Others" onClick={searchValue}>Others</li>
        </ul>
        </div>

        <div className='cat-Border mt-3'>
        <h6 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'20px'}} className='cat-padding' >Filter by price</h6>
        <p>
          <FormatPrice />
        </p>
        <input
         type='range'
         name='price'
        //  min={minvalue} 
        //  max={maxvalue}
         value={price}
         onChange={searchValue}
         />
        </div>
        </Col>
        <Col>
        <Row>
        <form onSubmit={(e)=>e.preventDefault()}>
      <InputGroup className="mt-2 cat-form">
        <Form.Control aria-label="Text input with dropdown button" name='text' value={text} onChange={searchValue} placeholder="Search Something...." className='cat-inputForm'>
          </Form.Control>
      </InputGroup>
      </form>
      <hr className='cat-hr2'></hr>
        </Row>
        <Row>
          {
              filter_products.length != 0 ?
              filter_products.map((product,index) => (
                <CardLayout product={product} key={index} />
          
              ))
              :
              <div>.......Loading</div>
          }
          </Row>
          </Col>
    </Row>
    {console.log('searching',text)}
    </Container>

   
  )
}


export default Products
