import { useState } from 'react'
import Filter from './components/Filter'
import AddNewNumber from './components/AddNewNumber'
import { NumbersList } from './components/NumbersList'

const App = () => {

  const [persons, setPersons] = useState([
  ])

  //tilat
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState('')

  //filteröinti
  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(filterPersons.toUpperCase()))
  
  //uuden henkilön lisäys
  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
  
    //tarkistetaan onko jo listassa
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(personsObject))
      setNewName('')
      setNewNumber('')
    }
  }

  //käsitellään nimimuutosta
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  //käsitellään numeron muutosta
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  //käsitellään filterin muutosta
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterPersons(event.target.value)
  }

  //RETURN
  return (
    <div>
      <h1>Phonebook</h1>

      <Filter filterPersons={filterPersons} handleFilterChange={handleFilterChange} />
    
      <AddNewNumber addPerson={addPerson} 
      newName={newName} 
      newNumber={newNumber} 
      handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange} />

      <NumbersList personsToShow={personsToShow} />
      
    </div>
  )
}

export default App