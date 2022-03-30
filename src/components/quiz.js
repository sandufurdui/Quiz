import React, { Component, useState } from 'react'
import "../style/main.css"
import "../style/quiz.css"
import $ from 'jquery'

import Question from './question'

export class quiz extends Component {
    // var data = require('json!./data.json');
    constructor(props) {
        super(props)
        this.state = {
          quiz: {     "title": "Quiz that proves that you are more stupid than you think",     "questions": [       {         "question": "5 x 4 =",         "answers": [           {             "point": 1,             "label": "20"           },           {             "point": 0,             "label": "10"           },           {             "point": 0,             "label": "30"           },           {             "point": 0,             "label": "25"           }         ]       },       {         "question": "2 + 4 x 10 =",         "answers": [           {             "point": 0,             "label": "60"           },           {             "point": 1,             "label": "42"           },           {             "point": 0,             "label": "40"           },           {             "point": 0,             "label": "20"           }         ]       },{         "question": "Who is CEO of Tesla?",         "answers": [           {             "point": 0,             "label": "Jeff Bezos"           },           {             "point": 1,             "label": "Elon Musk"           },           {             "point": 0,             "label": "Bill Gates"           },           {             "point": 0,             "label": "Tony Stark"           }         ]       },       {         "question": "The iPhone was created by which company?",         "answers": [           {             "point": 0,             "label": "Cricova"           },           {             "point": 0,             "label": "Samsung"           },           {             "point": 0,             "label": "Toshiba"           },           {             "point": 1,             "label": "Apple"           }         ]       },{         "question": "Cand intarzii la postovan, ce se intampla?",         "answers": [           {             "point": 0,             "label": "Postovan te lauda"           },           {             "point": 0,             "label": "HZ"           },           {             "point": 1,             "label": "Iti zice sa spui o gluma"           },           {             "point": 0,             "label": "Cine-i Postovan?"           }         ]       },{         "question": "Daca mergi pe jos la UTM atunci ",         "answers": [           {             "point": 0,             "label": "Eu nu ma duc la UTM"           },           {             "point": 1,             "label": "Esti Nastea"           },           {             "point": 0,             "label": "Eu invat la USM"           },           {             "point": 0,             "label": "Cand?"           }         ]       }     ]   },
          index: 0,
          answers: []
        }
    }
  
    componentDidMount() {
      $.getJSON('./question.json', function(result) {
        this.setState({quiz: result})
      }.bind(this))
    }
  
    handleSubmit() {
      if (this.state.index < this.state.quiz.questions.length) {
        this.setState({'index': this.state.index + 1})
      } else {
        let score = this.state.score || 0
        this.state.answers.map((answer, i) => (
          score = score + this.state.quiz.questions[i].answers[answer].point
        ))
        this.setState({'score': score})
      }
    }
  
    handleAnswerSelected(event) {
      let list = [...this.state.answers.slice(0, this.state.index),
                  parseInt(event.target.value),
                  ...this.state.answers.slice(this.state.index + 1)]
      this.setState({'answers': list})
    }
  
    render() {
      const {
        quiz, index, answers
      } = this.state
  
      let completed = (quiz.questions && (index === quiz.questions.length)) ? true : false
      let numberOfQuestions = quiz.questions ? quiz.questions.length : 0
      let score = 0
      if (completed) {
        this.state.answers.map((answer, i) => (
          score = score + this.state.quiz.questions[i].answers[answer].point
        ))
      }
  
      return (
        <div>
          <h1>{quiz.title}</h1>
          {completed ?
            <div>
              <p>Iaca uite-te, esti destept cu asa rezultat??</p>
              Your score is {score} out of {this.state.quiz.questions.length}
            </div>
          :
            <div>
            <h2>Question {index + 1} of {numberOfQuestions}</h2>
            {quiz.questions && index < numberOfQuestions ?
              <Question
                question={quiz.questions[index]}
                index={index}
                onAnswerSelected={(event) => this.handleAnswerSelected(event)}
                onSubmit={() => this.handleSubmit()}
              />
            : ''}
            </div>
          }
        </div>
      )
    }
}

export default quiz