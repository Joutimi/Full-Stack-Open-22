import { useState } from 'react'

const Button = ({ selectClick, text }) => (
  <button onClick={selectClick}>
      {text}
  </button> )

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [pisteet, setPisteet] = useState(Array(7).fill(0))
    console.log(pisteet)
  
  const randomLuku = () => {
    const luku = Math.floor(Math.random() * 6)
    return luku
  }

  const selectClick = () => {
    setSelected(randomLuku)
  } 

  const voteClick = () => {
    console.log(selected)
      const copy = [...pisteet]
      copy[selected] += 1
      setPisteet(copy)
  }
  

  return (
    <div>
      <h1> Anecdote of the day: </h1>
      <h2> {anecdotes[selected]} </h2>
      <h2> has {pisteet[selected]} points </h2>
      <Button selectClick={voteClick} text='Vote' />
      <Button selectClick={selectClick} text='Next Anecdote' /> 
      <h1> Anecdote with most votes </h1>
      <h2> {anecdotes[pisteet.indexOf(Math.max(...pisteet))]} </h2>
      <h2> has {pisteet[pisteet.indexOf(Math.max(...pisteet))]} points </h2>
    </div>
    
    
  )
}

export default App
