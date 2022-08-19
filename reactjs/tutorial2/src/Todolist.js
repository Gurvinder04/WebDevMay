import {Row,Col,Button,InputGroup,Form} from 'react-bootstrap'
import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export default function ToDoList(){
    const[todo,setTodo]=useState('')
    const[todos,setTodos]=useState(['javascript','java'])
    const handleInput = (e)=>{
        //handle input value attribute
     console.log('handle Input',e.target.value,e.target)
     setTodo(e.target.value)
    }

    const handleClick = (e)=>{
        console.log('testingggg =>',todo)
        setTodos([...todos,todo])
    }
    return(
        <Row className='justify-content-center' >
            <Col md={6}>
            <InputGroup className="mb-3">
           <Form.Control
           onChange={handleInput}
            placeholder="todo"
           aria-label="todo"
           aria-describedby="basic-addon1"
           />
           <Button onClick={handleClick}>ADD</Button>
           {console.log(todos)}
           </InputGroup>
           <hr/>
           <ul>
            {
                todos.map(todo=>(
                    <li key={uuidv4()}>{todo}</li>
                ))
            }
           </ul>
         </Col>
        </Row>
    )
}