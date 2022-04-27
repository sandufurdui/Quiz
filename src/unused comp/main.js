import React, { Component } from 'react'
import Card from "./quizCard"
import Navbar from "./navbar"
import { getDatabase, ref, set, child, get } from "firebase/database";


export class main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      num: 0
    };
    // this.quiz.bind(this);
  }
  getNumOfQuizes = async () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'quizes/')).then((snapshot) => {
      if (snapshot.exists()) {
        const numOfQuizes = snapshot.size
        this.setState({
          num: numOfQuizes
        })
        // console.log("number of quizes: " + this.state.num)
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      // alert.show(error);
    });
  }

  componentDidMount = async () => {
    this.getNumOfQuizes()

    // console.log(this.state.id)
    // } 
  }


  render() {
    const quizes = [];
    for (let i = 1; i <= this.state.num; i++) {
      quizes.push(<Card id={i} />);
    }
    // console.log(this.state.numOfQuizes)
    return (
      <div className="homepage_main">
        <div className="navbar_container">
          <Navbar />
        </div>
        <div className="main_container">
          <div className="row">
            {quizes}

            {/* <Submit id="3" />  */}
          </div>

        </div>

      </div>
    )
  }
}

export default main