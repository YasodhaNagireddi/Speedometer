// Write your code here

import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    this.setState(preState =>
      preState.count < 200 ? {count: preState.count + 10} : {count: 200},
    )
  }

  onBreak = () => {
    this.setState(preState =>
      preState.count > 0 ? {count: preState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="speedometer-bg-container">
        <div>
          <h1 className="speedometer-heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h2 className="speedometer-speed">Speed is {count}mph</h2>
          <p className="speedometer-description">
            Min Limit is 0mph, Max Limit is 200mph
          </p>

          <div>
            <button
              type="button"
              className="btn-accelerate"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button type="button" className="btn-break" onClick={this.onBreak}>
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
