import React, { Component, useEffect } from 'react'
import "../style/card.css"
import { getDatabase, ref, set, child, get } from "firebase/database";
import quiz from './quiz';
// import { useEffect } from "react"

export class quizCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            id: "1",
            title: "",
            description: "",
            dificulty: 0,
            numberOfQuestions: 0,
            display: false,
            done: false
        };
        // this.quiz.bind(this);
    }

    getData = async () => {
        try {
            const dbRef = ref(getDatabase());
            await get(child(dbRef, 'quizes/' + this.state.id + "/questions")).then((snapshot) => {
                if (snapshot.exists()) {
                    const length = snapshot.size;
                    // console.log(length)
                    this.setState({
                        numberOfQuestions: length
                    })
                    
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            })
            await get(child(dbRef, 'quizes/' + this.state.id)).then((snapshot) => {
                if (snapshot.exists()) {
                    const dd = snapshot.val()
                    this.setState({
                        quiz: dd,
                        title: this.state.quiz.title
                    })

                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.log(error);
            })
        } catch (e) {
            console.log(e)
        }
        // console.log(this.state.quiz)
        this.setState({
            title: this.state.quiz.title,
            description: this.state.quiz.description,
            // numberOfQuestions: this.state.quiz.questions.size,
            display: this.state.quiz.display,
            done: true
        })
        console.log("quiz data " + this.state.quiz)
        console.log("description: " + this.state.quiz.description)
        console.log("display: " +this.state.quiz.display)
        console.log("number of questions: " + this.state.numberOfQuestions)
    }

    // assignValues = async () => {
    //     try {
    //         await this.getData()
    //         this.setState({
    //             title: this.state.quiz.title,
    //             description: this.state.quiz.description,
    //             // numberOfQuestions: this.state.quiz.questions.size,
    //             display: this.state.quiz.display,
    //             done: true
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    //     console.log(this.state.title)
    //     console.log(this.state.description)
    // }

    componentDidMount = async () => {
        console.log("card with id " + this.state.id + " mounted")
        this.getData()
    }

    // componentDidUpdate() {
    //     console.log('updated');
    //     this.getData()
    //   }

    render() {
        return (
            <div >
                {this.state.done && this.state.display ?
                    <div className="card">
                        <div className="card-contains short-title card-grid-item">{this.state.title} </div>
                        <div className="card-contains short-description card-grid-item">
                            {this.state.description} <br /><br />Number of questions: {this.state.numberOfQuestions}
                        </div>
                        {/* <Test /> */}
                        <div className="card-contains card-grid-item">
                            <button className="link start-quiz"
                                // onClick={this.getData}
                            >
                                Start quiz
                            </button>
                        </div>
                    </div> :
                    null
                }
                
            </div>
        )
    }
}

export default quizCard