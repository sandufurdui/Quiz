import React, { Component, useState } from 'react'
import Navbar from "../components/navbar"
// import AddCard from "./addQuizCard"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



export class about extends Component {


  render() {

    return (
      <>
        <Navbar />
        <h2>This is a quiz app implemented using Quiz API to fetch data from backend</h2>
      </>

    )
  }

}


export default about