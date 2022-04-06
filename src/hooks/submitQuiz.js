// import React from 'react'
import { getDatabase, ref, set, child, get } from "firebase/database";

import React from 'react'

function submitQuiz(props) {
    function WriteUserData() {
        const db = getDatabase();
        set(ref(db, 'quizes/' + props.id),
            {
                "category": "Math",
                "difficulty": 11,
                "display": true,
                "title": "Elementary Math Quiz",
                "questions": [{
                    "question": "5 x 4 =",
                    "answers":
                        [{ "point": 1, "label": "20" },
                        { "point": 0, "label": "10" },
                        { "point": 0, "label": "30" },
                        { "point": 0, "label": "25" }]
                }, {
                    "question": "2 + 4 x 10 =",
                    "answers":
                        [{ "point": 0, "label": "60" },
                        { "point": 1, "label": "42" },
                        { "point": 0, "label": "40" },
                        { "point": 0, "label": "20" }]
                }, {
                    "question": "Who is CEO of Tesla?",
                    "answers":
                        [{ "point": 0, "label": "Jeff Bezos" },
                        { "point": 1, "label": "Elon Musk" },
                        { "point": 0, "label": "Bill Gates" },
                        { "point": 0, "label": "Tony Stark" }]
                }, {
                    "question": "The iPhone was created by which company?",
                    "answers":
                        [{ "point": 0, "label": "Cricova" },
                        { "point": 0, "label": "Samsung" },
                        { "point": 0, "label": "Toshiba" },
                        { "point": 1, "label": "Apple" }]
                },
                {
                    "question": "Cand intarzii la postovan, ce se intampla?",
                    "answers":
                        [{ "point": 0, "label": "Postovan te lauda" },
                        { "point": 0, "label": "HZ" }, { "point": 1, "label": "Iti zice sa spui o gluma" },
                        { "point": 0, "label": "Cine-i Postovan?" }]
                },
                {
                    "question": "Daca mergi pe jos la UTM atunci ",
                    "answers":
                        [{ "point": 0, "label": "Eu nu ma duc la UTM" },
                        { "point": 1, "label": "Esti Nastea" }, { "point": 0, "label": "Eu invat la USM" },
                        { "point": 0, "label": "Cand?" }]
                }]
            }

        ).catch((error) => {
            console.error(error);
        });

        console.log("pressed")

    }
    return (
        <button className="link" onClick={WriteUserData}>Submit</button>
    )

}

export default submitQuiz