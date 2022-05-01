import React, { Component, useState, useEffect } from 'react'
import "../style/card.css"
import quiz from './quiz';
import StartQuiz from "./startQuiz"
import axios from "axios"

export class quizCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz: [],
            id: this.props.id,
            title: "",
            description: "",
            dificulty: 0,
            // numberOfQuestions: this.props.length,
            display: false,
            done: false
        };
    }


    componentDidMount = async () => {
        // this.getData()
        // console.log(this.props.length)
        axios
            .get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${this.state.id}`, {
                headers: { "X-Access-Token": '3d12a947e8715b83faa99dd81a70bcbfdcb7871c5c77a633a07253b7d6edd2be' },
            })
            .then((res) => {
                const data = res.data;
                this.setState({
                    quiz: data,
                });
                // console.log(this.state.quiz)
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({
            title: this.state.quiz.title,
            // description: this.state.quiz.description,
            // numberOfQuestions: this.state.quiz.questions_count,
            display: true,
            done: true
        })
    }

    render() {

        return (
            < >
                {/* {this.state.done && this.state.display ? */}
                <div className="card">
                    <div className="card-contains short-title card-grid-item">{this.state.quiz.title} </div>
                    {/* <div className="card-contains short-description card-grid-item">
                            {this.state.quiz.} <br />
                        </div> */}
                    <div>Number of questions: {this.state.quiz?.questions?.length}</div>
                    {/* <Test /> */}
                    <div className="card-contains card-grid-item">
                        <StartQuiz
                            id={this.state.id}
                            quiz={this.state.quiz}
                            // length={this.state.numberOfQuestions}
                            title={this.state.quiz.title}
                        // description={this.state.description}
                        />
                    </div>
                </div>
                {/* :
                    null
                } */}

            </>
        )
    }
}

export default quizCard