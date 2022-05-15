import React, {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('salmon')
    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count -1)

    useEffect(() => {
        console.log(`I'm inside the useEffect function. I will only run once upon mounting. The current count is ${count}`)

        return() => {
            console.log(`I'm removing anything that was set up above. I will only run when component is being unmounted. The last count was ${count}`)
        }
    }, [count])

    function handleColorChange() {
        const nextColor = color === 'salmon' ? 'gold' : 'salmon'
        setColor(nextColor)
    }

    return(
        <div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleColorChange}>Change color</button>
            <button onClick={handleDecrease}>Decrease</button>
            <h1 style={{color}}>{ count }</h1>
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