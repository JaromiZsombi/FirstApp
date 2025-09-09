import React from 'react'
import { todosData } from '../data'
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { FaTrash } from "react-icons/fa"
import { NewTodo } from './NewTodo';

export const Todo = () => {
  const [todos, setTodos] = useState(todosData)
  //console.log(todos);
  console.log("renderelődik a todo")

  const handleDelete = (id) => {
    console.log(id)
    setTodos(prev => prev.filter(obj => obj.id != id))
  }

  const handleDone=(id)=>{
    console.log("handledone", id)
    setTodos(prev=>prev.map(obj=>obj.id == id ? {...obj,isDone:!obj.isDone} : obj))
    console.log();
  }

  return (
    <div style={{maxWidth:"600px", padding:"1rem", margin:"auto", border:"1px solid red"}}>
      <NewTodo/>
      <ListGroup>
        {todos.map(obj =>
          <ListGroupItem key={obj.id} className="d-flex justify-content-between">
            <IoCheckmarkDoneCircle style={{ color: obj.isDone ? "green" : "red", fontSize: "2rem" }} onClick={()=>handleDone(obj.id)}/>
            <div style={{ textDecoration: obj.isDone ? "line-through" : "none", }}>
              {obj.descr}
            </div>
            <FaTrash style={{ color: "red", fontSize: "2rem" }} onClick={() => handleDelete(obj.id)} />
          </ListGroupItem>
        )}

      </ListGroup>
    </div>
  )
}


