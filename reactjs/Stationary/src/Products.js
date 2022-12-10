import React, { useEffect } from 'react'
import { Col, Container, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap'
import styled from "styled-components"
import FilterSection from './Components/FilterSection'
import CardLayout from './Components/CardLayout'
import Sort from './Components/Sort'
import { useFilterContext } from './Context/FilterContext'
import { FaSearch } from 'react-icons/fa'

function Products() {
  const{filter_products} = useFilterContext()
  const {filters:{text,category},searchValue,all_products} = useFilterContext()


useEffect(()=>{
  
})
  return (
    <Container className=''>
      {console.log('filtering',filter_products)}
        <form onSubmit={(e)=>e.preventDefault()}>
      <InputGroup className="mt-2 form-style">
        <Form.Control aria-label="Text input with dropdown button" name='text' value={text} onChange={searchValue} placeholder="Search Something...." >
          </Form.Control>
        
        <select
          name="category"
          onClick={searchValue}
        >
          
          <option  name="category" value="all">All</option>
          <option name="category"  value="Notebooks">Notebooks</option>
          <option  name="category" value="Pens&Pencils">Pens&Pencils</option>
          <option  name="category" value="Office Stationary">Office Stationary</option>
          <Dropdown.Divider />
          <option>Discount Offers</option>
        </select>
        
       
      </InputGroup>
      </form>
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
    {console.log('searching',text)}
    </Container>

   
  )
}


export default Products
