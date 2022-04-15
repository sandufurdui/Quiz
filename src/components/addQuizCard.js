import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import AddRemoveInputField from "./addQuestionInput"
import { getDatabase, ref, set, child, get } from "firebase/database";
import arrayShuffle from 'array-shuffle';
import FieldArray from "./fieldArray";

var questionsList = []
var answersList = []
const schema = yup.object({
    // title: yup.string().required().max(50),
    // description: yup.string().required().max(100),
    // category: yup.string().required(),
    // difficulty: yup.number().positive().integer().required().min(0).max(10),
}).required();

function AddQuizCard() {
    const [normalList, setNormalList] = useState([{ questions: [questionsList] }])
    const [displayAdd, setDisplayAdd] = useState(0);
    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     resolver: yupResolver(schema)
    // });

    const {
        control,
        register,
        handleSubmit,
        getValues,
        errors,
        reset,
        setValue
    } = useForm({
        // defaultValues
    });
    const onSubmit = (data) => {
        
        for(var i=0; i< data.test.length; i++) {
            // console.log("original", data.test[0].answers);
            let original = data.test[i].answers
            let qq = arrayShuffle(original)
            // console.log("shuffled", qq);
            data.test[i].answers = arrayShuffle(original)
            // console.log("result", data.test[0].answers);
            // qq = []
            // original = []
        }
        // original = data.test[0].answers
        // const qq = arrayShuffle(original)
        // console.log("data", data.test[0].answers);
        const db = getDatabase();
        set(ref(db, 'quizes/5'), {
            display: true,
            title: data.title,
            description: data.description,
            category: data.category,
            difficulty: data.difficulty,
            questions: data.test
        });

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
                                    <FieldArray
                                        {...{
                                            control, register,
                                            // defaultValues,
                                            getValues, setValue, errors
                                        }}
                                    />

                                    <button type="button" onClick={() => reset(
                                        // defaultValues
                                    )}>
                                        Reset
                                    </button>

                                    <input type="submit" />
                                    <button className="modal__close" onClick={() => setDisplayAdd(false)}>&times;</button>
                                </div>
                            </form>
                        </div>


                    </div>
                    :
                    null
            }
        </div >
    )
}

export default AddQuizCard