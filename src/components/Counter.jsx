import React, { useState } from "react";



const Counter = () => {
    const [count, setCount] = useState(0)


    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }
    return (
        <>
            <h1>Керований імпут</h1>
            <h2>{count}</h2>
            <button className="button" onClick={increment} >increment</button>
            <button className="button" onClick={decrement} >decrement</button>
        </>

    )

}




export default Counter;