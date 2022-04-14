import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AddRemoveInputField from "./addQuestionInput"

const schema = yup.object({
    // title: yup.string().required().max(50),
    // description: yup.string().required().max(100),
    // category: yup.string().required(),
    // difficulty: yup.number().positive().integer().required().min(0).max(10),
}).required();

function AddQuizCard() {
    const [displayAdd, setDisplayAdd] = useState(0);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => {
        console.log(data);
        alert(`Quiz was submited \nOnce it passes all tests, it will be displayed on the main page`)
    }

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

                                    <AddRemoveInputField />


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