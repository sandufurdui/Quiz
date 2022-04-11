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
                "title": "General Trivia Questions",
                "description": "These questions will test your general knowledge on topics around the basics of video games, pop culture, movie trivia, and other general information; how many general knowledge questions do you think you could get right?",
                "questions": [{
                    "question": "What does “www” stand for in a website browser?",
                    "answers":
                        [{ "point": 1, "label": "World Wide Web" },
                        { "point": 0, "label": "Will Wiliam Write" },
                        { "point": 0, "label": "Where Was Will" },
                        { "point": 0, "label": "idk" }]
                }, {
                    "question": "How long is an Olympic swimming pool (in meters)?",
                    "answers":
                        [{ "point": 0, "label": "60 meters" },
                        { "point": 1, "label": "50 meters" },
                        { "point": 0, "label": "10 meters" },
                        { "point": 0, "label": "70 meters" }]
                }, {
                    "question": "What countries made up the original Axis powers in World War II?",
                    "answers":
                        [{ "point": 0, "label": "Russia, GB and Romania" },
                        { "point": 1, "label": "Germany, Italy, and Japan" },
                        { "point": 0, "label": "Turkey, Italy and France" },
                        { "point": 0, "label": "Germany, Hungary and France" }]
                }, {
                    "question": "Which country do cities of Perth, Adelade & Brisbane belong to?",
                    "answers":
                        [{ "point": 0, "label": "Afganistan" },
                        { "point": 0, "label": "New Zeeland" },
                        { "point": 0, "label": "Malasya" },
                        { "point": 1, "label": "Australia" }]
                },
                {
                    "question": "What geometric shape is generally used for stop signs?",
                    "answers":
                        [{ "point": 0, "label": "Decagon" },
                        { "point": 0, "label": "Triangle" }, 
                        { "point": 1, "label": "Octagon" },
                        { "point": 0, "label": "United States Department of Defense(Pentagon)" }]
                },
                {
                    "question": "What is 'cynophobia'?",
                    "answers":
                        [{ "point": 0, "label": "Fear of being smart" },
                        { "point": 1, "label": "Fear of dogs" }, 
                        { "point": 0, "label": "Fear of being poisoned" },
                        { "point": 0, "label": "Fear of frogs" }]
                },{
                    "question": "Who named the Pacific Ocean?",
                    "answers":
                        [{ "point": 0, "label": "Marco Polo" },
                        { "point": 0, "label": "Christopher Columbus" }, 
                        { "point": 1, "label": "Ferdinand Magellan" },
                        { "point": 0, "label": "Vasco Da Gama" }]
                },{
                    "question": "How many languages are written from right to left?",
                    "answers":
                        [{ "point": 1, "label": "12" },
                        { "point": 0, "label": "1" }, 
                        { "point": 0, "label": "5" },
                        { "point": 0, "label": "which way is right?" }]
                },{
                    "question": "How many countries still have Shilling as currency? Bonus point: Which countries?",
                    "answers":
                        [{ "point": 0, "label": "1, the one where Jack Sparrow lived in" },
                        { "point": 0, "label": "2, SAR and Congo" }, 
                        { "point": 0, "label": "3, DRC, Congo and Somalia" },
                        { "point": 1, "label": "4, Kenya, Uganda, Tanzania and Somalia" }]
                },{
                    "question": "What is the name of the biggest technology company in South Korea?",
                    "answers":
                        [{ "point": 0, "label": "Toshiba" },
                        { "point": 0, "label": "Nvidia" }, 
                        { "point": 1, "label": "Samsung" },
                        { "point": 0, "label": "Logitech" }]
                },{
                    "question": "Which animal can be seen on the Porsche logo?",
                    "answers":
                        [{ "point": 0, "label": "Mare(female horse)" },
                        { "point": 1, "label": "Stallion" }, 
                        { "point": 0, "label": "Bull" },
                        { "point": 0, "label": "Hulk(Mark Buffalo)" }]
                },{
                    "question": "What is the name of the largest ocean on earth?",
                    "answers":
                        [{ "point": 0, "label": "Ur mom" },
                        { "point": 0, "label": "Australia" }, 
                        { "point": 1, "label": "Pacific" },
                        { "point": 0, "label": "Ghidighici" }]
                },{
                    "question": "Who was the first woman pilot to fly solo across the Atlantic?",
                    "answers":
                        [{ "point": 1, "label": "Amelia Earhart" },
                        { "point": 0, "label": "Women don't exit kitchens" }, 
                        { "point": 0, "label": "Do women even fly?" },
                        { "point": 0, "label": "Lady Gaga" }]
                },{
                    "question": "Demolition of the Berlin wall separating East and West Germany began in what year?",
                    "answers":
                        [{ "point": 0, "label": "Yesterday" },
                        { "point": 0, "label": "1945" }, 
                        { "point": 0, "label": "11th September, 2001" },
                        { "point": 1, "label": "1989" }]
                },{
                    "question": "Who was the first woman to win a Nobel Prize (in 1903)?",
                    "answers":
                        [{ "point": 0, "label": "Nancy Chang" },
                        { "point": 0, "label": "Mary Lowe Good" }, 
                        { "point": 1, "label": "Marie Curie" },
                        { "point": 0, "label": "Martin Heinrich Klaproth" }]
                },{
                    "question": "Who discovered uranium?",
                    "answers":
                        [{ "point": 0, "label": "Marie Curie" },
                        { "point": 1, "label": "Martin Heinrich Klaproth" }, 
                        { "point": 0, "label": "Julius Klaproth" },
                        { "point": 0, "label": "Dimitri Mendeleev" }]
                },{
                    "question": "Who discovered polonium and radium?",
                    "answers":
                        [{ "point": 0, "label": "Einstein" },
                        { "point": 1, "label": "Marie Curie" }, 
                        { "point": 0, "label": "Richard Abegg " },
                        { "point": 0, "label": "Martin Heinrich Klaproth" }]
                }
            
            ]
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