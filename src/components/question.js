import React from 'react'

const Question = ({
  question,
  index,
  onAnswerSelected,
  onSubmit
}) => {

  return (
    <div >
      <h2 className="question-name">{question.question}</h2>
      {/* <ul className="main-quiz-ul"> */}
      <div className="main-quiz-ul">
        {/* <li>
          <li className="option-li">
            <input className="radio-input" type="radio" id="s-option" name="selector" />
            <label >Bacon</label>
            <div className="check"><div class="inside"></div></div>
          </li>
        </li> */}
        {question.answers.map((answer, i) =>
          <div key={`${index}-${i}`}>
            <li className="option-li">
              <input className="radio-input" type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={false} value={i} onChange={onAnswerSelected} />
              {' '}

              <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
              <div className="check"><div class="inside"></div>
              </div>
            </li>
          </div>
        )}
      </div>
      {/* </ul> */}
      <button class="start-quiz" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default Question