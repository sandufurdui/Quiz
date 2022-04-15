import React, { Component, useState } from 'react'
import Navbar from "./navbar"
import AddCard from "./addQuizCard"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { getDatabase, ref, set, child, get } from "firebase/database";
import Test from "./lol"
import Test2 from "./lol2"


export class about extends Component {


  render() {

    return (
      <>
        <Navbar />
        <Test2 />
        {/* <Test /> */}
      </>

    )
  }

}


export default about