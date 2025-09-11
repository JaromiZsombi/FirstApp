import React from 'react'
//import { todosData } from '../data'
import { useState } from 'react';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { FaTrash } from "react-icons/fa"
import { NewTodo } from './NewTodo';
import { TodoSummary } from './TodoSummary';
import { useEffect } from 'react';
import { addTodo, deleteAllTodo, deleteTodo, doneTodo, getTodos } from '../utils';

export const Todo = () => {
  const [todos, setTodos] = useState(null)

  console.log(todos);

  useEffect(() => {
    getTodos(setTodos)
  }, [])//az üres függőségi tömb azt jelzi hogy csak egyszer fut le a függvény amikor betöltődik az oldal

  /*
  const handleDelete = (id) => {
    console.log(id)
    setTodos(prev => prev.filter(obj => obj.id != id))
  }

  const handleDeleteAll=()=>{
    setTodos([])
    
  }

  const handleDone=(id)=>{
    console.log("handledone", id)
    setTodos(prev=>prev.map(obj=>obj.id == id ? {...obj,isDone:!obj.isDone} : obj))
    console.log();
  }

  const handleAdd=(descr)=>{
    const newTodo = {
      id: Date.now(),
      descr,
      isDone:false
    }
    setTodos(prev=>[...prev,newTodo])
  }
  */

  const handleDelete = async (id) => {
    await deleteTodo(id)//az adatbázisban megtörténik a módosítás
    getTodos(setTodos)
  }

  const handleAdd = async (descr) => {
    await addTodo(descr)//az adatbázisban megtörténik a módosítás
    getTodos(setTodos)
  }


  const handleDone = async (id) => {
    await doneTodo(id)
    getTodos(setTodos) 
  }

  const handleDeleteAll = async() => {
    await deleteAllTodo()
    getTodos(setTodos)
  }

  return (
    <div style={{ maxWidth: "600px", padding: "1rem", margin: "auto", border: "1px solid red" }}>
      <NewTodo handleAdd={handleAdd} />
      <Button onClick={handleDeleteAll}><FaTrash /></Button>

      <ListGroup>
        {todos && todos.map(obj =>
          <ListGroupItem key={obj.id} className="d-flex justify-content-between">
            <IoCheckmarkDoneCircle style={{ color: obj.isDone ? "green" : "red", fontSize: "2rem" }} onClick={() => handleDone(obj.id)} />
            <div style={{ textDecoration: obj.isDone ? "line-through" : "none", }}>
              {obj.descr}
            </div>
            <FaTrash style={{ color: "red", fontSize: "2rem" }} onClick={() => handleDelete(obj.id)} />
          </ListGroupItem>
        )}

      </ListGroup>
      {/*<TodoSummary todos={todos}/>*/}

    </div>
  )
}


