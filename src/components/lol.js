import React, { useState } from 'react'

function Test() {
    const [answersList, setAnswersList] = useState([{ label: "", point: 1 }]);
    const [questionsList, setQuestionsList] = useState([{ question: "", answers: [answersList] }]);

    // handle input change
    const handleInputChangeAnswer = (e, qindex, aindex) => {
        const { name, value } = e.target;
        const Qlist = [...questionsList]
        const list = [...answersList];
        // console.log("value "+ value)
        list[aindex][name] = value;
        // console.log(list[aindex][name])
        setAnswersList(list);
        // console.log(list)
        // console.log("ddd " + [...answersList]);
        // console.log(Qlist[qindex])
        Qlist[qindex]['answers'] = list
    };

    // handle click event of the Remove button
    const handleRemoveClickAnswer = (index, aindex) => {
        console.log([...questionsList][index]['answers'])
        const list = [...questionsList][index]['answers'];
        // console.log("q list "+[...questionsList])
        console.log(aindex)
        list.splice(aindex, 1);
        setQuestionsList(list);
    };

    // handle click event of the Add button
    const handleAddClickAnswer = (aindex) => {
        // let k = [{ answer: "", point: 0 }]
        setAnswersList([...answersList, { label: "", point: 0 }]);
    };
    // handle input change
    const handleInputChangeQuestion = (e, index) => {
        const { name, value } = e.target;
        const list = [...questionsList];
        list[index][name] = value;
        setQuestionsList(list);
    };

    // handle click event of the Remove button
    const handleRemoveClickQuestion = (index) => {
        const list = [...questionsList];
        list.splice(index, 1);
        setQuestionsList(list);
    };

    // handle click event of the Add button
    const handleAddClickQuestion = () => {
        setQuestionsList([...questionsList, { question: "" }]);
    };
    return (
        <div id="demo-modal" className="modal">
            <form
            // onSubmit={handleSubmit(onSubmit)}
            >
                <div className="modal__content">
                    <h4>Enter questions and answers</h4>
                    <br />

                    {questionsList.map((qa, qi) => {
                        return (
                            <div className="box">
                                <input
                                    name="question"
                                    placeholder="Question"
                                    value={qa.question}
                                    onChange={(e) => handleInputChangeQuestion(e, qi)}
                                />

                                <div>
                                    {questionsList.length !== 1 && (
                                        <a
                                            className="margin-left-10 red"
                                            onClick={() => handleRemoveClickQuestion(qi)}
                                        >
                                            Remove question
                                        </a>
                                    )}
                                    {questionsList.length - 1 === qi && (
                                        <a
                                            className="margin-left-10 green"
                                            onClick={handleAddClickQuestion}
                                        >
                                            Add question
                                        </a>
                                    )}
                                </div>
                                {answersList.map((aa, ai) => {
                                    return (
                                        <div className="box">
                                            <input
                                                name="label"
                                                placeholder="answer"
                                                value={aa.answer}
                                                onChange={(e) => handleInputChangeAnswer(e, qi, ai)}
                                            />
                                            <div className="">
                                                {/* {answersList.length !== 1 && (
                                                    <a
                                                        className="margin-left-10 red"
                                                        onClick={() => handleRemoveClickAnswer(ai, qi)}
                                                    >
                                                        Remove answer
                                                    </a>
                                                )} */}
                                                {answersList.length - 1 === ai && (
                                                    <a
                                                        className="margin-left-10 green"
                                                        onClick={() => handleAddClickAnswer(ai)}
                                                    >
                                                        Add answer
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                                <div style={{ marginTop: 20, marginBottom: 20 }}>
                                    {JSON.stringify(answersList)}
                                </div>
                            </div>
                        );
                    })}
                    <div style={{ marginTop: 20, marginBottom: 20 }}>
                        {JSON.stringify(questionsList)}
                    </div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    );
}

export default Test