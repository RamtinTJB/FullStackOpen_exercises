import { useState, useEffect } from 'react'
import countryService from '../services/country.js'

const Country = (props) => {
    const [allCountries, setAllCountries] = useState([])

    useEffect(() => {
        countryService.getAll()
            .then(response => setAllCountries(response))
    }, [])

    const countriesFiltered = allCountries.filter(country => 
        country.name.common.toLowerCase().includes(props.text.toLowerCase()))

    if (countriesFiltered.length > 10) {
        return <div>Too many matches, specify another filter</div>
    } else if (countriesFiltered.length > 1) {
        return (
            <table><tbody>
                {countriesFiltered.map(cnt => 
                    <tr key={cnt.ccn3}>
                        <td>{cnt.name.common}</td>
                        <td><button onClick={() => props.showHandler(cnt.name.common)}>show</button></td>
                    </tr>)}
            </tbody></table>
        )
    } else if (countriesFiltered.length === 1) {
        const cnt = countriesFiltered[0]
        return (
            <div>
                <h1>{cnt.name.common}</h1>
                <div>capital {cnt.capital[0]}</div>
                <div>area {cnt.area}</div>
                <h3>languages</h3>
                <ul>
                    {Object.values(cnt.languages).map(lang => <li key={lang}>{lang}</li>)}
                </ul>
                <img src={cnt.flags.png} alt={cnt.flags.alt} width="150"/>
                <h2>Weather in {cnt.capital[0]}</h2>
            </div>
        )
    } else {
        return <div>No matches</div>
    }
}

export default Country
