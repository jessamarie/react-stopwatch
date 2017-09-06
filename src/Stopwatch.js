import React, { Component } from 'react'
import './Stopwatch.css'

class Stopwatch extends Component {
  constructor () {
    super()

    this.state = {
      time: 0,
      paused: false,
      timer: null
    }

    this.startTimer = this.startTimer.bind(this)
    this.pauseTimer = this.pauseTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }

  // Allows the user to press a button "Pause" to pause the stopwatch at the current time
  // Re-clicking the "Pause" button should resume the stopwatch
  pauseTimer (e) {
    e.preventDefault()
    this.setState({
      paused: !this.state.paused
    })
  }

  // Allows the user to press a button "Reset" to stop the stopwatch and reset the time to 0
  resetTimer (e) {
    e.preventDefault()
    clearInterval(this.state.timer)
    this.setState({
      time: 0,
      paused: false,
      timer: null
    })
  }

  // Allows the user to press a button "Start" to start the stopwatch
  // While the stopwatch is started, the incrementing time should be displayed
  startTimer (e) {
    e.preventDefault()

    if (!this.state.timer) {
      var timer = setInterval(() => {
        if (!this.state.paused) {
          this.setState({
            time: this.state.time + 1
          })
        }
      }, 1000)

      this.setState({
        timer: timer
      })
    }
  }

  render () {
    var zero = this.state.time === 0
    return (
      <div className='stopwatch'>
        <h1 className={zero ? 'zero' : ''}>{this.state.time}</h1>
        <div className='controls'>
          <button disabled={zero} onClick={this.resetTimer}>Reset</button>
          <button disabled={!zero} onClick={this.startTimer}>Start</button>
          <button disabled={zero} onClick={this.pauseTimer}>Pause</button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
