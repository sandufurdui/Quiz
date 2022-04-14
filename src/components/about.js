import React, { Component } from 'react'
import Navbar from "./navbar"
import AddCard from "./addQuizCard"

export class about extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AddCard />
      </div>
    )
  }
}

export default about