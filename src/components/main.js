import React, { Component } from 'react'
// import "../style/main.css"
import Quiz from "./quiz"
import Card from "./quizCard"
import Navbar from "./navbar"
import GetData from "../hooks/getQuiz"
import Submit from "../hooks/submitQuiz"


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
              <Card id = "1"/>
            </div>
            <div className="grid-item">
              {/* <Card /> */}
            </div>
            <div className="grid-item">
              {/* <Card /> */}
            </div>
            <div className="grid-item">
              {/* <Card /> */}
            </div>
            <Submit id="1" />
          </div>
        </div>
        {/* <GetData id="lol"/> */}
      </div>
    )
  }
}

export default main