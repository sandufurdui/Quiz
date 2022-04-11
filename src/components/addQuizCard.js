import { React, useState } from 'react'
import AddQuestion from "./addQuestionInput"

function AddQuizCard() {
    const [displayAdd, setDisplayAdd] = useState(false)
    const hidePop = () => setDisplayAdd(false)
    const showPop = () => setDisplayAdd(true)
    var questionNumber = 0

    const inputArr = [
        {
            type: "text",
            id: 1,
            value: ""
        }
    ];

    const [arr, setArr] = useState(inputArr);

    const addInput = () => {
        questionNumber = questionNumber + 1
        setArr(s => {
            return [
                ...s,
                {
                    type: "text",
                    value: ""
                }
            ];
        });
    };

    const handleChange = e => {
        e.preventDefault();

        const index = e.target.id;
        setArr(s => {
            const newArr = s.slice();
            newArr[index].value = e.target.value;

            return newArr;
        });
    };

    return (
        <div>
            <div className="dashboard-card">
                <div className="add-quiz-button parent">
                    <button className="add-quiz-button" onClick={showPop} >
                        +
                    </button>
                </div>
            </div>
            {
                displayAdd ?
                    <div>
                        <div id="demo-modal" class="modal">
                            <div class="modal__content">
                                <h1>Add New Quiz</h1>
                                <p>Please fill all the fields bellow in order to add new quiz</p><br />
                                <h4>Give the quiz a title</h4>
                                <input /><br />
                                <h4>Add some description</h4>
                                <input /><br />
                                <h4>Select a category for it</h4>
                                <input /><br />
                                <h4>Dificulty</h4>
                                <input disabled placeholder="dificulty will be calculated automatically" /><br />
                                <h4>Enter quiz questions and answers</h4>
                                

                                {arr.map((item, i) => {
                                    questionNumber = questionNumber + 1
                                    return (
                                        <><label>Question {questionNumber}</label>
                                            <input
                                                placeholder='Question'
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                size="40" /><br />
                                            <input
                                                placeholder="answer 1"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" />
                                            <input
                                                placeholder="answer 2"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" />
                                            <input
                                                placeholder="answer 3"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" />
                                            <input
                                                placeholder="answer 4"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" /></>
                                    );
                                })}
                                <button className="add-questions" onClick={addInput}>+</button>
                                <button class="modal__close" onClick={hidePop}>&times;</button>
                            </div>
                        </div>
                    </div> : null}
        </div>
    )
}

export default AddQuizCard