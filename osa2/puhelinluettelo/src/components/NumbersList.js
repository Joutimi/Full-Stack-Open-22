export const NumbersList = ({ personsToShow, delPerson}) => {

  const Button = ({ buttonClick, text, person}) => ( 
    
    <button onClick={() => buttonClick(person)} >
        {text}
    </button> )

  const buttonClick = (person) => {
    console.log('buttonclick ' + person.name + person.id + person.number)
    delPerson(person)
  }

  return (
    <div>
      <h2>Numbers</h2>

      {personsToShow.map(person => <p key={person.id}> {person.name} {person.number} 
        <Button buttonClick={buttonClick} text='delete' person={person} /> </p>)}
    </div>
  );
};
