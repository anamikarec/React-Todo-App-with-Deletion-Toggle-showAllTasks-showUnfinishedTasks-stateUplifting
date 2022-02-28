import React,{useState} from "react";
// State Uplifting

const Child = ({count}) => {
    return(
        <>
        <h3>{`Child is ${count}`}</h3>
        </>
    )
}

const Button = ({label,handleChange}) => {
    return <button onClick={handleChange}>{label}</button>
}

const Siblings = ()=> {
    const [count,setCount] = useState(0);
    const handleClick = (value) =>{
        setCount(count+value)
    }
    return (
        <>
        <h3>Siblings</h3>
        <Child count={count}/>
        <Button label="Add" handleChange={() => handleClick(1)}/>
        <Button label="Reduce" handleChange={() => handleClick(-1)}/>

        </>
    )
}

export {Siblings}