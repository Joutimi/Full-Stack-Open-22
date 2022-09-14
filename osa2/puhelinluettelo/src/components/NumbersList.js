export const NumbersList = ({ personsToShow }) => {
  return (
    <div>
      <h2>Numbers</h2>

      {personsToShow.map(person => <p key={person.id}> {person.name} {person.number} </p>)}
    </div>
  );
};
