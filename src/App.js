import React, {useState} from "react";


function App() {
    const [count, setCount]=useState(0)
    const increaseCount = () => setCount(count + 1)
    const decreaseCount = () => setCount(count - 1);
    const resetCount = () => setCount(0);

 return(
     <>
         <button onClick={increaseCount}>Increase</button>
         <button onClick={decreaseCount}>Decrease</button>
         <button onClick={resetCount}>Reset</button>
         <h1>{count}</h1>

     </>
 )
}

export default App;