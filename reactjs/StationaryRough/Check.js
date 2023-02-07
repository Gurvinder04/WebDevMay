import React from 'react'
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

function Check() {
  return (
    <div className='container-fluid'>
        <div className=' row mb-4'>
      <form className='cat-mainForm' onSubmit={(e)=>e.preventDefault()}>
      <InputGroup className="mt-2 cat-form">
        <Form.Control aria-label="Text input with dropdown button"  placeholder="Search Something...." className='cat-inputForm'>
          </Form.Control>
      </InputGroup>
      </form>
      <hr className='cat-hr2'></hr>
      </div> 
    

      < div className='row checkrow-Css'>
        < div className='col-md-2'>
        <div className='cat-Border'>
        <h6 style={{fontFamily:" 'Secular One', sans-serif",fontSize:'20px'}} className='cat-padding' >Categories</h6>
        <hr className='cat-hr'></hr>
        <ul>
        <li><button>All</button></li>
        <li><button>Notebooks</button></li>
        <li><button>Pens&Pencils</button></li>
        <li><button>Office Stationary</button></li>
        <li><button>Files & Folders</button></li>
        <li><button>Desk Accessories</button></li>
        <li><button>Others</button></li>
        </ul>
        </div>
        </div>
        <div className=' col-md-6 check-Css'>
            <div className='col-md-2'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fw800/background/20210415/pngtree-school-background-with-accessories-image_624094.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fw800/background/20210415/pngtree-school-background-with-accessories-image_624094.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fw800/background/20210415/pngtree-school-background-with-accessories-image_624094.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='col-md-2'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://png.pngtree.com/thumb_back/fw800/background/20210415/pngtree-school-background-with-accessories-image_624094.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
    </div>
    
    
    </div>
  )
}

export default Check