import {useState} from 'react'
import './index.css'

const EvenOddAppFunction = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    const res = Math.ceil(Math.random() * 100)
    setCount(count + res)
  }

  const displayText = count % 2 === 0 ? 'Even' : 'Odd'

  return (
    <div className="main-container">
      <h1>Count {count}</h1>
      <p className="count-display">Count is {displayText}</p>
      <button onClick={handleIncrement} type="button">
        Increment
      </button>
      <p>*Increase By Random Number Between 0 to 100</p>
    </div>
  )
}
export default EvenOddAppFunction
