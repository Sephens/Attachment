import { useState } from "react"

export default function  Card(){
    // some states in react
    const [count,setCount] = useState(0)
    return(
        
        <div>
            <h2>Lets do some counting with react</h2>
            <button onClick={()=>setCount(count-10)}>-</button>
            <button>Reset</button>
            <button onClick={()=>setCount(count+10)}>+</button>

            <h3>{count}</h3>
        </div>
    );
}