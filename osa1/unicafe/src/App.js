import { useState } from 'react'

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td><td>{props.merkki}</td></tr>

const Statistics = (props) => {
  if (props.good+props.bad+props.neutral !== 0) {
    return (
      <table>
        <tbody>
        <StatisticLine text="good" value ={props.good} />
        <StatisticLine text="bad" value ={props.bad} />
        <StatisticLine text="all" value ={props.good+props.bad+props.neutral} />
        <StatisticLine text="average" value ={(props.good+props.bad)/(props.good+props.bad+props.neutral)} />
        <StatisticLine text="positive" value ={(props.good/(props.good+props.bad+props.neutral))*100} merkki="%" />
        </tbody>
      </table>
    )
  }
  return (
    <div>
    <p> No feedback given </p>
    </div>
  )
}

const Button = ({ feedClick, text }) => (
  <button onClick={feedClick}>
      {text}
  </button> )

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
    
  const feedGoodClick = () => {
    setGood(good + 1) 
  }

  const feedBadClick = () => {
    setBad(bad + 1)  
  } 
    
  const feedNeutralClick = () => {
    setNeutral(neutral + 1)
  }


  return (
    <div>
      <h1> Give feedback </h1>

      <Button feedClick={feedGoodClick} text='good' /> 
      <Button feedClick={feedNeutralClick} text='neutral' />
      <Button feedClick={feedBadClick} text='bad' /> 
      <h1> Statistics </h1>
      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

export default App