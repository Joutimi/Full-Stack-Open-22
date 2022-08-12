const Header = ({ courseName }) => <h1>{courseName} </h1>

const Total = ({ parts }) => <h2> Total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises </h2>

const Part = ({ part }) => <p> {part.name} {part.exercises} </p>
  
const Content = ({ parts }) => parts.map(part => <Part part={part} key={part.id} />)


const Course = ({course}) => 
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>

export default Course