import React, { useState } from 'react'

function AddRemoveAnswerInputField() {
    const [answersList, setAnswersList] = useState([{ answer: "", point: 1 }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...answersList];
        list[index][name] = value;
        setAnswersList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...answersList];
        list.splice(index, 1);
        setAnswersList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setAnswersList([...answersList, { answer: "", point: 0 }]);
    };

    return (
        <div>
            {/* <h3><a href="https://cluemediator.com">Clue Mediator</a></h3> */}
            {answersList.map((x, i) => {
                return (
                    <div className="box">
                        <input
                            name="answer"
                            placeholder="answer"
                            value={x.answer}
                            onChange={e => handleInputChange(e, i)}
                        />
                        <div className="">
                            {answersList.length !== 1 && <a
                                className="margin-left-10 red"
                                onClick={() => handleRemoveClick(i)}>Remove answer</a>}
                            {answersList.length - 1 === i && <a className="margin-left-10 green" onClick={handleAddClick}>Add answer</a>}
                        </div>
                    </div>
                );
            })}
            <div style={{ marginTop: 20, marginBottom: 20 }}>{JSON.stringify(answersList)}</div>
        </div>
    );
}
export default AddRemoveAnswerInputField