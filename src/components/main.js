import React, { Component } from 'react'
// import "../style/main.css"
import Quiz from "./quiz"
import Card from "./quizCard"
import Navbar from "./navbar"


export class main extends Component {
  render() {
    return (
      <div className="homepage_main">
        <div className="navbar_container">
          <Navbar />
        </div>
        <div className="main_container">
          <div className="row">
            <div className="grid-item">
              <Card />
            </div>
            <div className="grid-item">
              <Card />
            </div>
            <div className="grid-item">
              <Card />
            </div>
            <div className="grid-item">
              <Card />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default main