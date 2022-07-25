//App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

//Komponentit
  const parts = course.parts //partsit irti coursesta
  console.log(parts)

  const Header = (props) => {
    return (
      <h1> {props.course} </h1>
    )}

  const Part = (props) => {
    return (
        <p>{props.name} {props.exercises} </p>
    )}

  const Content = () => {
      return (
        <div>
          <Part name={parts[0].name} exercises={parts[0].exercises} />
          <Part name={parts[1].name} exercises={parts[1].exercises} />
          <Part name={parts[2].name} exercises={parts[2].exercises} />
        </div>
    )}

  const Total = () => {
      return (
        <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises} </p> 
    )}

//Return
  return (
    <div>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )}

export default App