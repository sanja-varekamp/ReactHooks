import React, {useEffect, useState} from "react";


function App() {
const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count -1)

    useEffect(() => {
        console.log(`I'm inside the useEffect function. The current count is ${count}`)
    })

    return(
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <h1>{ count }</h1>
        </div>
    )
}

export default App;