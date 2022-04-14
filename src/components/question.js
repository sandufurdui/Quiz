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
      <div className="main-quiz-ul">
        {question.answers.map((answer, i) =>
          <div key={`${index}-${i}`}>
            <li className="option-li">
              <input required className="radio-input"
                type="radio"
                name={`question_${index}`}
                id={`question_${index}_answer_${i}`}
                defaultChecked={false}
                value={i}
                onChange={onAnswerSelected}
              />
              {' '}

              <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
              <div className="check"><div className="inside"></div>
              </div>
            </li>
          </div>
        )}
      </div>
      <button className="start-quiz" onClick={onSubmit}>Submit</button>
      {/* <input type="submit">ffffffff</input> */}
    </div>
  )
}

export default Question