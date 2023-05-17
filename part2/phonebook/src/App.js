import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Input from './components/Input'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1}
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    
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

    const filterChangeHandler = (event) => {
        setFilter(event.target.value)
    }

    const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Input text='filter shown with' value={filter} changeHandler={filterChangeHandler} />

            <h3>add a new</h3>

            <PersonForm name={newName} nameChange={nameChangeHandler} number={newNumber} numberChange={numberChangeHandler} submitHandler={addButtonHandler} />

            <h3>Numbers</h3>

            <Persons persons={personsToShow} />
        </div>
    )
}

export default App
