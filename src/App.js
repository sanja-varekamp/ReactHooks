import React, {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count -1)

    useEffect(() => {
        console.log(`I'm inside the useEffect function. The current count is ${count}`)

        return() => {
            console.log(`I'm removing anything that was set up above. The last count was ${count}`)
        }
    })

    return(
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
            <h1>{ count }</h1>
        </div>
    )
}

function App() {
const [visible, setVisible] = useState(false);

return(
    <div>
        <button onClick={() => setVisible(!visible)}>Show/Hide component</button>

        {/*this is conditional logic which says: if visible is true, instantiate the Counter component*/}
        {visible && <Counter />}
    </div>
)
}

export default App;