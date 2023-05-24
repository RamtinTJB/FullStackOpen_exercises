import { useState } from 'react'
import Country from './components/Country.js'

const App = () => {
    const [country, setCountry] = useState('')

    const countryInputChange = (event) => {
        setCountry(event.target.value)
    }

    const showButtonHandler = (name) => {
        setCountry(name)
    }

    return (
        <div>
            find countires <input value={country} onChange={countryInputChange}/>
            <Country text={country} showHandler={showButtonHandler}/>
        </div>
    )
}

export default App
