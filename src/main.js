import React, { Component } from 'react'
import "./style/main.css"
import Quiz from "./components/quiz"

export class main extends Component {
  render() {
    return (
      <div>
          <div className="main_div">
            <Quiz />
          </div>
      </div>
    )
  }
}

export default main