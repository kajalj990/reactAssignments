import React, { Component } from 'react'
import './App.css';
import Result from './components/Result';
import KeyPad from './components/KeyPad'
class App extends Component {
  constructor() {
    super()

    this.state = {
      result: ''
    }
  }

  onClick = button => {
    if (button === '=') {
      this.calculate()
    }
    else if (button === "Backspace") {
      this.backspace()
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  backspace = () => {
    this.setState({
      result: " "
    })
  }

  calculate = () => {
    var ans = ''
    if (this.state.result.includes('--')) {
      ans = this.state.result.replace('--', '+')
    }
    else {
      ans = this.state.result
    }
    this.setState({
      result: (eval(ans) || "") + ""
    })
  }

  render() {
    return (
      <div >
        <h1>Simple Calculator
          </h1>
        <div className="calculator-body">
          
          <Result result={this.state.result} />
          <KeyPad onClick={this.onClick} />
        </div>
      </div>
    )
  }
}

export default App




