const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

morgan.token('post-content', (req, res) => {
    if (req.method === 'POST') {
        return JSON.stringify(req.body)
    } else {
        return ' '
    }
})

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :post-content'))
app.use(cors())
app.use(express.static('build'))

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)

    if (person) {
        response.json(person)
    } else {
        response.sendStatus(404)
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(p => p.id !== id)

    response.sendStatus(204)
})

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const returnError = (response, msg) => {
    return response.status(400).json({
        error: msg
    })
}

app.post('/api/persons', (request, response) => {
    const person = request.body

    if (!('name' in person) || !('number' in person)) {
        return returnError(response, "Name or number is missing")
    }

    if (persons.filter(p => p.name === person.name).length > 0) {
        return returnError(response, "Name must be unique")
    }

    person.id = getRandomInt(10000)

    persons = persons.concat(person)

    response.json(person)
})

app.get('/info', (request, response) => {
    response.send(`Phonebook has info for ${persons.length} people<br/>${Date()}`)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
