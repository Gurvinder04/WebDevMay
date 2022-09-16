import React, { useRef, useState } from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import {MdDeleteForever} from 'react-icons/md'

function Homepage() {
    const[todolist, setTodoList] = useState(['Go to Shopping','Hit the Gym'])
    const inputRef = useRef()
    const delRef = useRef()

    const AddItem =()=>{
        console.log(inputRef.current.value)
        let temp = []
          if(inputRef.current.value !== ''){
            temp.push(inputRef.current.value)
           setTodoList([...todolist,...temp])
          }

    }

    const DeleteItem =(index)=>{
     setTodoList((item) => todolist.filter((value, i) => i !== index));
        console.log(index)
        // setTodoList((list) => {
        //     let items = [...list];
        //     console.log(items);
        //     items.splice(index, 1);
        //     return items;
        //   });
    }
  return (
   <Container className='text-center bg-warning '>
    <h1><em>TODO LIST</em></h1>
        <Form>
          <input type="text" placeholder="Add New Task" ref={inputRef} style={{borderRadius:"4px",width:"24rem", height:"4vh"}} />
          <Button onClick={AddItem} className='m-2 bg-success' type='reset'>Add</Button>
        </Form>
        <ul style={{listStyle:"none"}}>
        {
           todolist.map((item,index)=>(
            <li key={index} style={{boxShadow:"4px 4px 4px 4px #0000005c",margin:"11px",padding:"3px"}}>{item}<MdDeleteForever onClick={(e) => DeleteItem(index)}></MdDeleteForever></li>
            ))
        }
        </ul>
        {console.log(todolist)}
        
    </Container>
    
  )
}

export default Homepage