import React from 'react';
import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import {v4 as uuid} from "uuid";
import { useState } from 'react';

const Todo = () => {
    const [data,setData] = useState([]);
    const [showAll,setShowAll] = useState(true);

    const handleClick = (title) => {
        const payload = {
            title:title,
            status:false,
            id : uuid()
        }
        const updatedList = [...data,payload];
        setData(updatedList);
    }

    const handleToggle = (id) =>{
        const updatedTodo = data.map((item) => item.id === id ? {...item,status : !item.status} : item)
        setData(updatedTodo);
    }

    const handleDelete = (id) =>{
       const updatedTodo = data.filter((item) => item.id !== id )
       setData(updatedTodo);
    }
    console.log(data);
    return (
        <>
        <h3>Todo App</h3>
        <TodoInput handleClick = {handleClick}/>
        {
            data.filter(item => showAll ? true : !item.status).map((item)=> (
                <TodoList key = {item.id} {...item} handleToggle = {handleToggle} handleDelete = {handleDelete}/>
            ))
        }
       
       <button onClick={()=>setShowAll(!showAll)}>{showAll ? "SHOW ONLY UNFINISHED TASKS" : "SHOW ALL TASKS"}  </button>
        </>
    )
}

export {Todo}