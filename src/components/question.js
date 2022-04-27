import React from 'react'
// import {store, useGlobalState} from 'state-pool';

const Question = ({ question, answers, question2, index, onAnswerSelected, onSubmit }) => {
  // console.log(answers)
  const test = question2[index].id
  // console.log(test)
  return (
    <div >
      <h2 className="question-name">{question}</h2>
      <div className="main-quiz-ul">
        {answers.map((answer, i) =>
          <div key={`${index}-${i}`}>
            <li className="option-li">
              <input required className="radio-input"
                type="radio"
                name={`question_${index}`}
                id={`question_${index}_answers_${i}`}
                defaultChecked={false}
                value={answer}
                onChange={onAnswerSelected}
              />
              {' '}

              <label  htmlFor={`question_${index}_answers_${i}`}>{answer}</label>
              <div className="check"><div className="inside"></div>
              </div>
            </li>
          </div>
        )}
      </div>
      <button value={test} className="start-quiz" onClick={onSubmit}>Submit</button>
      {/* <input type="submit">ffffffff</input> */}
    </div>
  )
}

export default Question