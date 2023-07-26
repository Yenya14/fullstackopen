import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

  const handleChangedName =  setValue => event => setValue(event.target.value)

  const addNewPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`)
    }
    else{
  const newPerson = {name: newName, number: newNumber}
  setPersons(persons.concat(newPerson))
  }
  setNewName("")
  setNewNumber('')
}


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={filterQuery} handleChangedName={handleChangedName(setFilterQuery)}/>
      <h3>add a new</h3>
      <PersonForm handleChangedName={handleChangedName(setNewName)} 
      handleChangedNumber={handleChangedName(setNewNumber)} name={newName} number={newNumber} handleNewPerson={addNewPerson}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filterQuery={filterQuery}/>
    </div>
  )
}

export default App