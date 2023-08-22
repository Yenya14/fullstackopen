import { useState, useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import servicePerson from './services/servicePerson';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterQuery, setFilterQuery] = useState('')
  const [status, setStatus] = useState(null)
  const [poppedMessage, setPoppedMessage] = useState(null)

useEffect(() => {
  servicePerson.getAll().then((result) => setPersons(result))
},[])
   

  const handleChangedName =  setValue => event => setValue(event.target.value)
  const handleChangedNumber = setValue => event => setValue(event.target.value);
  

  const addNewPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {name: newName, number: newNumber}

    let condition = persons.find(person => person.name === newName)
    if (condition){
      if (window.confirm(`${newName} is already added to phonebook, replace a old number with the new one?`)){
        servicePerson.update(condition.id, newPerson).then((result) => {
          setPersons(persons.map((person) => (person.id !== condition.id ? person : result)))
        })
        .catch((err)=> {
          setStatus('error')
          setPoppedMessage(`Information of ${condition.name} has already been removed from the server`)
          setTimeout(() => {
            setStatus(null)
            setPoppedMessage(null);
          }, 5000);

          setPersons(persons.filter((person) => person.id !== condition.id))
        })
      }
    }
    else {
      servicePerson.create(newPerson)
        .then(personAdded => {
          setPersons(persons.concat(personAdded));

          setStatus('popped')
          setPoppedMessage(`Added ${personAdded.name}`);
          setTimeout(() => {
            setStatus(null)
            setPoppedMessage(null);
          }, 5000);
        });
    }
    
    setNewName("");
    setNewNumber("");
  }
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
      <Notification message={poppedMessage} status={status}/>
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