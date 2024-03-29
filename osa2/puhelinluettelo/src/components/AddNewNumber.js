const AddNewNumber = ({addPerson,newName, newNumber, handleNameChange, handleNumberChange}) => (
    <div>
      <h2>Add new number</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input
            value={newName}
            onChange={handleNameChange} />
        </div>
        <div>
          number: <input
            value={newNumber}
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )

export default AddNewNumber