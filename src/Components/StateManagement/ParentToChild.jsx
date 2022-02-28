import React,{useState} from "react";


const Child = ({count}) => {
    return(
        <>
        <h3>{`Child is ${count}`}</h3>
        </>
    )
}
const Parent = ()=> {
    const [count,setCount] = useState(0);
    const handleClick = (value) =>{
        setCount(count+value)
    }
    return (
        <>
        <h3>Parent To Child</h3>
        <Child count={count}/>
        <button onClick={()=>handleClick(1)}>+</button>
        <button onClick={()=>handleClick(-1)}>-</button>
        </>
    )
}

export {Parent}