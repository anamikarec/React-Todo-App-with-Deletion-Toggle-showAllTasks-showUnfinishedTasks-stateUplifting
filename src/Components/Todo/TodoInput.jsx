import React,{useState} from "react";

const TodoInput = ({handleClick}) => {
    const [query,setQuery] = useState("");
    return (
        <>
        <input placeholder="Add Something..." value={query} onChange={(e)=>setQuery(e.target.value)} />
        <button onClick={() =>handleClick(query)}>Add</button>
        </>
    )
}

export {TodoInput}