import React, { Component } from 'react'
// import "../style/main.css"
import Quiz from "./quiz"
import Navbar from "./navbar"

export class main extends Component {
  render() {
    return (
      <div className="homepage_main">
        <div className="navbar_container">
          <Navbar/>
        </div>
        main component
        {/* <div className="main_container"> <Quiz /></div> */}
      </div>
    )
  }
}

export default main