import React, { useState } from 'react'
import { API, countryName } from './API'

const App = () => {

    const [input, setInput] = useState()

    const setInputCountry = (e) => {
        setInput(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        console.log("API ", API(input))
        console.log("State ",input)
        console.log("Country Codes ",countryName(input))
    }

    return(
        <div className='App'>
            <form>
                <input 
                    type="text" 
                    placeholder='Enter your Country...' 
                    onChange={setInputCountry} 
                />
                <input type='submit' onClick={submit} />
            </form>
        </div>
    )
}

export default App