import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddNewNumber from './components/AddNewNumber'
import { NumbersList } from './components/NumbersList'
import personService from './services/personService'

const App = () => {

  const [persons, setPersons] = useState([])

  //logi listan pituudesta
  console.log('render', persons.length, 'persons')
  
  //tilat
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterPersons, setFilterPersons] = useState('')
  const [confirmationMessage, setConfirmationMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="nMessage">
        {message}
      </div>
    )
  }

  const ErrorNotification = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="eMessage">
        {message}
      </div>
    )
  }

  useEffect(() => {
    console.log('effect')
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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
    }
  
    //tarkistetaan onko jo listassa
    if (persons.find(person => person.name === newName)) {
      if(window.confirm(`${newName} is already added to phonebook, replace the old number with new one?`)) {
        const personToUpdate = persons.find(p => p.name === personsObject.name)
        const changedInfo = {...personToUpdate, number: newNumber}
        personService
          .updateInfo(changedInfo)
          .then(returnedP => {
            setPersons(persons.map(person => person.id !== returnedP.id ? person : returnedP))
          })
          .catch(error => {
            console.log(error.response.data.error);
            setErrorMessage(`${error.response.data.error}`)
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          })
      } else { return }

    } else {
        personService
        .create(personsObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setConfirmationMessage(
            `Added '${personsObject.name}'`
          )
          setTimeout(() => {
            setConfirmationMessage(null)
          }, 5000)
        })
        .catch(error => {
          console.log(error.response.data.error);
          setErrorMessage(`${error.response.data.error}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
    }
  }

  //henkilön poisto
  const delPerson = (person) => {
    window.confirm(`Delete ${person.name}?`)
    personService
      .delNumber(person.id)
    setPersons(persons.filter(arrayPerson => arrayPerson.id !== person.id))
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
      <h1>Phonebookki</h1>

      <Notification message={confirmationMessage} />
      <ErrorNotification message={errorMessage} />

      <Filter filterPersons={filterPersons} handleFilterChange={handleFilterChange} />
    
      <AddNewNumber addPerson={addPerson} 
      newName={newName} 
      newNumber={newNumber} 
      handleNameChange={handleNameChange} 
      handleNumberChange={handleNumberChange} />

      <NumbersList personsToShow={personsToShow} delPerson={delPerson} />
      
    </div>
  )
}

export default App