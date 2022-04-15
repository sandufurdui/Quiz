import React from 'react'

function shuffleArray(array) {
  // console.log("inside ")
  // console.log(array)
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // console.log("inside2 ")
  // console.log(array)
  return array;
}

const Question = ({  question, index, onAnswerSelected, onSubmit }) => {
  console.log("original ")
  // console.log(question.answers)
  const q = question.answers
  console.log(q)
  const shuffledPosts = shuffleArray(q);
  console.log("shufled ")
  // console.log(shuffledPosts)

  const shuffled = q.sort(() => Math.random() - 0.5)
  console.log(q)
  return (
    <div >
      <h2 className="question-name">{question.question}</h2>
      <div className="main-quiz-ul">
        {q.map((answer, i) =>
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