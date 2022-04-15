import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AddRemoveInputField from "./addQuestionInput"
import { getDatabase, ref, set, child, get } from "firebase/database";


var questionsList = []
var answersList = []
const schema = yup.object({
    title: yup.string().required().max(50),
    description: yup.string().required().max(100),
    category: yup.string().required(),
    difficulty: yup.number().positive().integer().required().min(0).max(10),
}).required();

function AddQuizCard() {
    const [answersList, setAnswersList] = useState([{ label: "", point: 1 }]);
    const [questionsList, setQuestionsList] = useState([{ question: "", answers: [answersList] }]);
    const [normalList, setNormalList] = useState([{ questions: [questionsList] }])
    const [displayAdd, setDisplayAdd] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        // setNormalList({questions : [...questionsList]});
        // const qqq = data + questionsList
        // console.log(qqq)
        const questions = questionsList
        const db = getDatabase();
        set(ref(db, 'quizes/4/' ), { data });
        set(ref(db, 'quizes/4/' ), { questions});

        // set(ref(db, 'quizes/5'), data).catch((error) => {
        //     console.error(error);
        // });
        console.log(questionsList + data)
        alert(`Quiz was submited \nOnce it passes all tests, it will be displayed on the main page`)
    }

    const transformToArray = () => {

    }

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
        <div>
            <div className="dashboard-card">
                <div className="add-quiz-button parent">
                    <button className="add-quiz-button" onClick={() => setDisplayAdd(true)} >
                        +
                    </button>
                </div>
            </div>
            {
                displayAdd ?
                    <div>

                        <div id="demo-modal" className="modal">
                            {/* <form onSubmit={handleSubmit}> */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="modal__content">
                                    <h1>Add New Quiz</h1>
                                    <p>Please fill all the fields bellow in order to add new quiz<br />
                                        <b className='warning'>
                                            Note that regardless the order of answers you input, they will be showed in random order
                                        </b>
                                    </p><br />
                                    <label><h4>Give the quiz a title</h4></label>
                                    <input {...register("title")} />
                                    <p className='warning'>{errors.title?.message}</p>
                                    {/* <input {...register("firstName")} />
                                    <p className='warning'>{errors.firstName?.message}</p> */}
                                    <br />
                                    <label><h4>Add some description</h4></label>
                                    <input {...register("description", { required: true, maxLength: 20 })} />
                                    <p className='warning'>{errors.description?.message}</p><br />
                                    <label><h4>Select a category for it</h4></label>
                                    <input {...register("category", { required: true, maxLength: 20 })} />
                                    <p className='warning'>{errors.category?.message}</p><br />
                                    <h4>Difficulty
                                        <div className="tooltip">   &#8505;
                                            <span className="tooltiptext">
                                                One difficulty point is added for each 10 questions <br />
                                                E.g. Quiz with 24 questions will have 2 difficulty points, 25 questions- 3 difficulty points
                                            </span>
                                        </div>
                                    </h4>
                                    <input label="difficulty" type="number" {...register("difficulty", { min: 0, max: 10 })} />
                                    <p className='warning'>{errors.difficulty?.message}</p><br />
                                    <h4>Enter quiz questions and answers</h4><br />

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

                                    <button type="submit" >submit</button>
                                    {/* <button className="add-questions" onClick={addInput}>+</button> */}
                                    <button className="modal__close" onClick={() => setDisplayAdd(false)}>&times;</button>
                                </div>
                            </form>
                            {/* <AddQuestion /> */}
                        </div>


                    </div>
                    :
                    null
            }
        </div >
    )
}

export default AddQuizCard