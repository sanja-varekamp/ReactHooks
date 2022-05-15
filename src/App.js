import React, {useEffect, useState} from "react";



function App() {
    const [userText, setUserText] = useState('')

    function handleUserKeyPress(event) {
        const { key, keyCode } = event
        if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
            setUserText(`${userText}${key}`)
        }
    }


    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress)
        return window.removeEventListener('keydown', handleUserKeyPress)
    })
    return(
        <div>
            <h1> Fell free to type! Your text will show up below!</h1>
            <blockquote>
                {userText}
            </blockquote>
        </div>
    )
}

export default App;