import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Input from './components/Input'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [notifText, setNotifText] = useState(null)
    const [notifType, setNotifType] = useState(null)

    const clearNotif = () => {
        setNotifType('')
        setNotifText(null)
    }
    
    const addButtonHandler = (event) => {
        event.preventDefault()
        if (persons.filter(person => person.name === newName).length > 0) {
            if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
                const oldPerson = persons.find(person => person.name === newName)
                personService.update(oldPerson.id, {...oldPerson, number: newNumber})
                    .then(data => setPersons(persons.map(person => person.id === data.id ? data : person)))
                    .catch(data => {
                        setNotifType('error')
                        setNotifText(`Information of ${oldPerson.name} has already been removed from server`)
                        setTimeout(clearNotif, 3000)
                    })
                setNotifType('success')
                setNotifText(`Updated ${newName}`)
            }
        } else {
            personService.create({name: newName, number: newNumber})
                .then(data => setPersons(persons.concat(data)))
            setNotifType('success')
            setNotifText(`Added ${newName}`)
        }
        setTimeout(clearNotif, 3000)
        setNewName('')
        setNewNumber('')
    }

    const deleteButtonHandler = (id) => {
        const person = persons.filter(p => p.id === id)[0]
        if (window.confirm(`Delete ${person.name}?`)) {
            personService.deletePerson(id)
            setPersons(persons.filter(person => person.id !== id))
            setNotifType('success')
            setNotifText(`Deleted ${person.name}`)
            setTimeout(clearNotif, 3000)
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
            <Notification text={notifText} type={notifType}/>
            <Input text='filter shown with' value={filter} changeHandler={filterChangeHandler} />

            <h3>add a new</h3>

            <PersonForm name={newName} nameChange={nameChangeHandler} number={newNumber} numberChange={numberChangeHandler} submitHandler={addButtonHandler} />

            <h3>Numbers</h3>

            <Persons persons={personsToShow} deleteHandler={deleteButtonHandler}/>
        </div>
    )
}

export default App
