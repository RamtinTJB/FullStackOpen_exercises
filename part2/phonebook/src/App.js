import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')
    
    const addButtonHandler = (event) => {
        event.preventDefault()
        const copy = persons.concat({ name: newName })
        setPersons(copy)
    }

    const nameChangeHandler = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={nameChangeHandler}/>
                </div>
                <div>
                    <button type="submit" onClick={addButtonHandler}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name}</p>)}
        </div>
    )
}

export default App
