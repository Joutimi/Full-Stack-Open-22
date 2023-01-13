import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddNewNumber from './components/AddNewNumber'
import { NumbersList } from './components/NumbersList'
import personService from './services/personService'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([])

  //logi listan pituudesta
  console.log('render', persons.length, 'persons')
  

  //tilat
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState('')

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(response => {
        //logi promisen onnistumisesta
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  //filteröinti
  const personsToShow = persons.filter(person => person.name.toUpperCase().includes(filterPersons.toUpperCase()))
  
  //uuden henkilön lisäys
  const addPerson = (event) => {
    event.preventDefault()
    const personsObject = {
      name: newName,
      number: newNumber,
      // id: persons.length + 1
    }
  
    //tarkistetaan onko jo listassa
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
        personService
        .create(personsObject)
        .then(response=> {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
      })
    }
  }

  //Käsitellään nimimuutosta
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