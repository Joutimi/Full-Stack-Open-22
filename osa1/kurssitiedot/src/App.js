//App
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

//Komponentit
  const Header = (props) => {
    return (
      <h1> {course} </h1>
    )}

  const Part = (props) => {
    return (
        <p>{props.part} {props.exercises} </p>
    )}

  const Content = (props) => {
    return (
      <div>
        <Part part={part1.name} exercises={part1.exercises} />
        <Part part={part2.name} exercises={part2.exercises} />
        <Part part={part3.name} exercises={part3.exercises} />
      </div>
    )}

  const Total = (props) => {
    return (
      <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises} </p> 
    )}

//Return
  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )}

export default App