import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ feedClick, text }) => (
  <button onClick={feedClick}>
      {text}
  </button> )

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

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App