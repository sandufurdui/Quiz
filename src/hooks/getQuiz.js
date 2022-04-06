import React from 'react'
import { getDatabase, ref, set, child, get } from "firebase/database";

export default function test(props) {
  

  function getData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'quizes/' + props.id)).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }
  return (
    <>
      <div>
        <button className="link" onClick={getData}>Get</button>
      </div>
    </>
  )
}



