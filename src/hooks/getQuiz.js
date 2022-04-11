import React from 'react'
import { getDatabase, ref, set, child, get } from "firebase/database";

let quiz = []





export default function getQuiz(props) {
  function getData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'quizes/' + props.id)).then((snapshot) => {
      if (snapshot.exists()) {
        // quiz = snapshot.val()
        console.log(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      // alert.show(error);
    });
    return (quiz)
    // console.log(quiz)
  }
  // const xxx = getData(props.id) 
  // console.log(getData(props.id))
  return (
    <div>
      <button onClick={getData}>get </button>
    </div>
  )
}

