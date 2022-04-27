import React, { Component } from 'react'
import "../style/main.css"
import "../style/quiz.css"
import { getDatabase, ref, child, get } from "firebase/database";
import Question from './question'
import arrayShuffle from 'array-shuffle';
import axios from 'axios'

export class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: {},
      index: 0,
      answers: [],
      shuffledA: [],
      selected: '',
      correctSelect: '',
      id: this.props.id,
      count: 0,
      scoreUpdated: 0
    }
  }


  componentDidMount() {
    axios
      .get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${this.state.id}`, {
        headers: { "X-Access-Token": '3d12a947e8715b83faa99dd81a70bcbfdcb7871c5c77a633a07253b7d6edd2be' },
      })
      .then((res) => {
        const tt = res.data;
        // console.log(tt)
        this.setState({
          quiz: tt,
        });
        // console.log(this.state.quiz)
      })
      .catch(function (error) {
        console.log(error);
      });

  }


  handleSubmit(event) {
    // console.log(event.target.value)
    const userIdNoRepeat = parseInt(localStorage.getItem("user-info"));
    const userId = 1175
    const qId = parseInt(event.target.value);
    // console.log("user id " + userId);
    // console.log("question id " + qId);
    // console.log("selected " + this.state.selected);
    if (this.state.index < this.state.quiz.questions.length) {
      this.setState({ 'index': this.state.index + 1 })
      const postData = {
        data: {
          question_id: qId,
          answer: this.state.selected,
          user_id: userId,
        },
      };
      console.log(postData)
    //   axios
    //     .post(
    //       `https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${this.state.id}/submit`,
    //       postData,
    //       {
    //         headers: {
    //           "X-Access-Token":
    //             "066a46e9a795771070159c29c28a763b27d1178908a9c4e4b690e8589f0b1d85",
    //         },
    //       }
    //     )
    //     .then(function (res) {
    //       if (res.data.correctSelected) this.setState({ scoreUpdated: this.state.scoreUpdated + 1 });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    } else {

    };

  }


  handleAnswerSelected(event) {
    // console.log(event.target.value)
    const t = event.target.value
    this.setState({
      selected: t
    })
    // console.log(this.state.selected)
    let list = [...this.state.answers.slice(0, this.state.index),
    parseInt(event.target.value),
    ...this.state.answers.slice(this.state.index + 1)]
    this.setState({
      'answers': list
    })
  }

  render() {
    const {
      quiz, index
    } = this.state
    let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false
    let numberOfQuestions = quiz.questions ? quiz?.questions?.length : 0
    let score = 0
   
    // console.log(quiz.questions?.id)
    // console.log(index)
    // console.log(quiz.questions[index].question)
    return (
      <div>
        {completed ?
          <div><br /><h1>{this.state.quiz.title}</h1><br /><br />
            <h2>Quiz is finished!</h2><br />
            Your score is {score} out of {this.state.quiz.questions.length}
          </div>
          :
          <div>
            <h2>Question {index + 1} of {numberOfQuestions}</h2>
            {this.state.quiz.questions && index < numberOfQuestions ?
              <Question
                question={quiz.questions[index].question}
                answers={quiz.questions[index].answers}
                question2={quiz.questions}
                index={index}
                onAnswerSelected={(event) => this.handleAnswerSelected(event)}
                onSubmit={(event) => this.handleSubmit(event)} />
              : ''}
          </div>
        }
      </div>
    )
  }
}

export default Quiz