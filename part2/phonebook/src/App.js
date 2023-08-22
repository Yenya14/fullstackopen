import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import servicePerson from './services/servicePerson';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')

useEffect(() => {
  servicePerson.getAll().then((result) => setPersons(result))
},[])
   

  const handleChangedName =  setValue => event => setValue(event.target.value)
  const handleChangedNumber = setValue => event => setValue(event.target.value);
  

  const addNewPerson = (event) => {
    event.preventDefault()
    let condition = persons.find(person => person.name === newName)
    if (condition){
      alert(`${newName} is already added to phonebook`)
    }
    else{
  const newPerson = {name: newName, number: newNumber}
  servicePerson.create(newPerson)
  .then(personAdded => 
    setPersons(persons.concat(personAdded)))
  
  setNewName("")
  setNewNumber('')
}}

const deletePerson =(id, name) => () => {
  if(window.confirm(`Delete ${name}?`)){
    servicePerson.remove(id).then(() =>{
      setPersons(persons.filter(person => person.name !== name))
    })
  }
}


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter query={filterQuery} handleChangedName={handleChangedName(setFilterQuery)}/>
      <h3>add a new</h3>
      <PersonForm handleChangedName={handleChangedName(setNewName)} 
      handleChangedNumber={handleChangedNumber(setNewNumber)} 
      name={newName} 
      number={newNumber} 
      handleNewPerson={addNewPerson} 
      />
      <h3>Numbers</h3>
      <Persons persons={persons} filterQuery={filterQuery}
            deletePerson={deletePerson}
            />
    </div>
  )
}

export default App