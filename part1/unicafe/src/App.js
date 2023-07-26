import { useState } from 'react'
import Button from './button'
import Statistics from './statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increment = (state, setState) => 
    () => setState(state + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increment(good, setGood)} text="good"/>
      <Button onClick={increment(neutral, setNeutral)} text="neutral"/>
      <Button onClick={increment(bad, setBad)} text="bad"/>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
