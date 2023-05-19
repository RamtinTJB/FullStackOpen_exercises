import axios from 'axios'
import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Input from './components/Input'
import personService from './services/persons'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    
    const addButtonHandler = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            alert(`${newName} is already added to phonebook`)
        } else {
            personService.create({name: newName, number: newNumber})
                .then(data => setPersons(persons.concat(data)))
        }
    }

    const deleteButtonHandler = (id) => {
        const person = persons.filter(p => p.id === id)[0]
        if (window.confirm(`Delete ${person.name}?`)) {
            personService.deletePerson(id)
            setPersons(persons.filter(person => person.id !== id))
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

    useEffect(() => {
        personService.getAll().then(data => setPersons(data))
    }, [])

    const personsToShow = filter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <div>
            <h2>Phonebook</h2>
            <Input text='filter shown with' value={filter} changeHandler={filterChangeHandler} />

            <h3>add a new</h3>

            <PersonForm name={newName} nameChange={nameChangeHandler} number={newNumber} numberChange={numberChangeHandler} submitHandler={addButtonHandler} />

            <h3>Numbers</h3>

            <Persons persons={personsToShow} deleteHandler={deleteButtonHandler}/>
        </div>
    )
}

export default App
