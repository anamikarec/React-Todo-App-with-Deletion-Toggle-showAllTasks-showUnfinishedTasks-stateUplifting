import React,{useState} from "react";

const TodoList = ({title,status,handleToggle,id,handleDelete}) => {
    return (
        <div style = {{border: "1px solid black",margin:"20px",padding:"20px",backgroundColor:"cornflowerblue"}}>
            <h3>{title}</h3>
            <button onClick={()=>handleToggle(id)}>{status ? "True" : "False"}</button>
            <button onClick={()=>{handleDelete(id)}}>Delete</button>
        </div>
    )
}

export {TodoList}