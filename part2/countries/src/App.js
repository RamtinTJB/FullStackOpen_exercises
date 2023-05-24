import { useState } from 'react'
import countryService from './services/country.js'
import Country from './components/Country.js'

const App = () => {
    const [country, setCountry] = useState('')

    const countryInputChange = (event) => {
        setCountry(event.target.value)
    }

    return (
        <div>
            find countires <input value={country} onChange={countryInputChange}/>
            <Country text={country} />
        </div>
    )
}

export default App
