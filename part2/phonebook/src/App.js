import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const addButtonHandler = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            const copy = persons.concat({ name: newName, number: newNumber, id:persons[persons.length-1].id+1 })
            setPersons(copy)
        }
    }

    const nameChangeHandler = (event) => {
        setNewName(event.target.value)
    }

    const numberChangeHandler = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form>
                <div>
                    name: <input value={newName} onChange={nameChangeHandler}/>
                </div>
                <div>
                    number: <input value={newNumber} onChange={numberChangeHandler}/>
                </div>
                <div>
                    <button type="submit" onClick={addButtonHandler}>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
        </div>
    )
}

export default App
