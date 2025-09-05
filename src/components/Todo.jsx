import React from 'react'
import { todosData } from '../data'
import { useState } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { FaTrash } from "react-icons/fa"

export const Todo = () => {
  const [todos, setTodos] = useState(todosData)
  console.log(todos);

  const handleDelete = (id) => {
    console.log(id)
    setTodos(prev => prev.filter(obj => obj.id != id))
  }

  return (
    <div>
      <ListGroup>
        {todos.map(obj =>
          <ListGroupItem key={obj.id} className="d-flex justify-content-between">
            <IoCheckmarkDoneCircle style={{ color: obj.isDone ? "green" : "red", fontSize: "2rem" }} />
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


