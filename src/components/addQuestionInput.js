import React, { useState } from 'react'
import AddRemoveAnswerInputField from './addAnswerInput'

function AddRemoveInputField() {
    const [questionsList, setQuestionsList] = useState([{ question: "" }]);

    // handle input change
    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...questionsList];
        list[index][name] = value;
        setQuestionsList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...questionsList];
        list.splice(index, 1);
        setQuestionsList(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setQuestionsList([...questionsList, { question: "" }]);
    };

    return (
        <div >
            {questionsList.map((x, i) => {
                return (
                    <div className="box">
                        <input
                            name="question"
                            placeholder="Question"
                            value={x.question}
                            onChange={e => handleInputChange(e, i)}
                        />
                        
                        <div className="btn-box">
                            {questionsList.length !== 1 && <a
                                className="margin-left-10 red"
                                onClick={() => handleRemoveClick(i)}>Remove question</a>}
                            {questionsList.length - 1 === i && <a className="margin-left-10 green" onClick={handleAddClick}>Add question</a>}
                        </div>
                        <AddRemoveAnswerInputField />
                    </div>
                );
            })}
            <div style={{ marginTop: 20, marginBottom: 20 }}>{JSON.stringify(questionsList)}</div>
        </div>
    );
}

export default AddRemoveInputField