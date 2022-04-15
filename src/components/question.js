import React from 'react'
// import {store, useGlobalState} from 'state-pool';

const Question = ({ question, answers, index, onAnswerSelected, onSubmit }) => {
  // let count = 1
  function ShuffleArray(array, staticList) {
    // const [toShuffle, setToShuffle] = useGlobalState("toShuffle");
    // console.log("inside ")
    // console.log("before assignment " +count)
    let shuffled = []}
  //   count = 1
  //   console.log("after assignment " +count)
  //   // shuffled = array.sort(() => Math.random() - 0.5)
  //   // console.log("inside2 ")
  //   // console.log(shuffled)
  //   // console.log("before changing " + toShuffle)
  //   // // changeState()
  //   // // setToShuffle(toShuffle= false)
  //   // console.log("after changing " + toShuffle)
  //   return shuffled;
  // }

  // // console.log("original ")
  // // console.log(question.answers)
  // const q = question.answers
  // // console.log("from question " + toShuffle)
  // let shuffledPosts = []
  // if (count == 0) {
  //   console.log("loh " + count)
  // } else {
  //   console.log("loh 4444 " + count)
  // }
  // console.log("loh " + count)
  // shuffledPosts = ShuffleArray(q, shuffledPosts);
  // console.log("loh 4444 " + count)
  // console.log("------------")
  // console.log(toShuffle)
  // console.log("shufled ")
  // console.log(shuffledPosts)

  // const shuffled = q.sort(() => Math.random() - 0.5)
  // console.log(answers)

  return (
    <div >
      <h2 className="question-name">{question.name}</h2>
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

              <label htmlFor={`question_${index}_answer_${i}`}>{answer.field}</label>
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