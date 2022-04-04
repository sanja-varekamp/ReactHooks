import React, {useState} from "react";


function App() {
    const [state, setState] = useState({
        city:'',
        country:''
    })

    function handleCityChange(event) {
        setState({
           ...state, city: event.target.value
        })
    }
    function handleCountryChange(event) {
        setState({
           ...state, country: event.target.value
        })
    }


    return (
        <form>
            <div>
                <input type="text" placeholder="City" value={state.city} onChange={handleCityChange} />
            </div>

            <div>
                <input type="text" placeholder="Country" value={state.country} onChange={handleCountryChange} />
            </div>

            <div>You live in {`${state.city}, ${state.country}`}</div>
        </form>
    )
}

export default App;