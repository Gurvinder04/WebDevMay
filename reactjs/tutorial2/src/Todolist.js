import {Row,Col,Button} from 'react-bootstrap'

export default function ToDoList(){
    return(
        <Row className='justify-content-center' >
            <Col md={6}>
            <InputGroup className="mb-3">
           <Form.Control
            placeholder="todo"
           aria-label="todo"
           aria-describedby="basic-addon1"
           />
           <Button>ADD</Button>
           </InputGroup>
         </Col>
        </Row>
    )
}