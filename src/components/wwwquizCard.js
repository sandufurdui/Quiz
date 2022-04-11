import React from 'react'
import "../style/card.css"
import firebase from 'firebase/compat/app';
import { getData } from '../hooks/getQuiz'
// import { functions } from "../firebase"
import { app } from "../firebase"
import { getDatabase, ref, set, child, get } from "firebase/database";
import { doc, getDoc } from "firebase/firestore";
// import firebase from "firebase";
import { getDocFromCache } from "firebase/firestore";
// import * as firebase from "firebase";
// const userRef = firebase.database().ref('quizes');





// const database = firebase.database()
// let quiz = {}
// var lol = 1;

function quizCard() {
    


    return (
        <div className="card">
            <div className="card-contains short-title card-grid-item">title </div>
            <div className="card-contains short-description card-grid-item">
                description
            </div>
            {/* <Test /> */}
            <div className="card-contains card-grid-item">
                <button className="link start-quiz"
                // onClick={() => console.log(hello)}
                >
                    Start quiz
                </button>
            </div>
        </div>
    )
}

export default quizCard