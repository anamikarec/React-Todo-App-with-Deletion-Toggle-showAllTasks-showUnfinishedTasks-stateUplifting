import React,{useState} from "react";


const Child = ({count,handleIncrement,handleDecrement}) => {
    return(
        <>
        <h3>{`Child is ${count}`}</h3>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
        </>
    )
}
const ChildToParent = ()=> {
    const [count,setCount] = useState(0);
    const handleClick = (value) =>{
        setCount(count+value)
    }
    return (
        <>
        <h3>Child To Parent</h3>
        <Child count={count} handleIncrement={()=>handleClick(1)} handleDecrement={()=>handleClick(-1)} />
        </>
    )
}

export {ChildToParent}