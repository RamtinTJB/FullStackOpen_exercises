const Persons = ({ persons, deleteHandler }) => {
    return (
        <>
            {persons.map(person => 
                <div key={person.id}>
                    {person.name} {person.number}
                    <button onClick={() => deleteHandler(person.id)}>delete</button>
                </div>
            )
            }
        </>
    )
}

export default Persons
