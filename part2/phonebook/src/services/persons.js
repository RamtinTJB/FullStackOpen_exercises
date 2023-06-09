import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => response.data)
}

const create = (personObject) => {
    return axios.post(baseUrl, personObject)
        .then(response => response.data)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
        .then(response => response.data)
}

const deletePerson = (id) =>  {
    axios.delete(`${baseUrl}/${id}`)
}

const exportedFunctions = {
    getAll: getAll,
    create: create,
    update: update,
    deletePerson: deletePerson
}

export default exportedFunctions
