export const randNr=(min, max)=>{
    return Math.floor(Math.random()*(max-min+1))+min
}

import axios from 'axios';

const baseUrl = 'http://localhost:8000/'

export const getTodos= async (setTodos)=>{
    const resp = await axios.get(baseUrl+"todos")
    setTodos(resp.data)
}
//todo törlése
export const deleteTodo = async (id) =>{
    await axios.delete(`${baseUrl}todos/${id}`)
}

//új hozzáadása
export const addTodo = async (descr)=>{
    await axios.post(baseUrl+"todos/", {descr})
}

//HandleDone
export const doneTodo = async (id)=>{
    await axios.patch(`${baseUrl}todos/${id}`)
}

//todo összes törlése
export const deleteAllTodo = async ()=>{
    await axios.delete(`${baseUrl}delall`)
}
