import {Component} from 'react'
import './index.css'

export default class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  handleRandomNumber = () => {
    const res = Math.ceil(Math.random() * 100)
    // console.log(res)
    this.setState(prevState => ({count: prevState.count + parseInt(res)}))
  }

  render() {
    const {count} = this.state

    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-container">
        <h1>Count {count}</h1>
        <p className="count-display">Count is {displayText}</p>
        <button onClick={this.handleRandomNumber} type="button">
          Increment
        </button>
        <p>*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}
