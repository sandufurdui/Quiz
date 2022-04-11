import { React, useState } from 'react'
import Quiz from "./quiz"

function StartQuiz(props) {
    const [displayModal, setDisplayModal] = useState(false)
    const [displayQuiz, setDisplayQuiz] = useState(false)
    const hideModal = () => setDisplayModal(false)
    const showModal = () => setDisplayModal(true)
    const hideQuiz = () => setDisplayQuiz(false)
    const showQuiz = () => setDisplayQuiz(true)
    const startQuiz = () => {
        hideModal();
        showQuiz();
    }
    const hideModals = () => {
        hideModal();
        hideQuiz();
    }
    return (
        <div>
            <button className="link start-quiz" onClick={showModal}>
                Open Quiz
            </button>
            {
                displayModal ?
                    <div>
                        <div id="demo-modal" class="modal">
                            <div class="modal__content">
                                <h1>{props.title}</h1>
                                <p>{props.description}</p>
                                <p>Number of questions {props.length}</p>
                                <button className="modal__close" onClick={hideModal}>&times;</button><br /><br />
                                <button className="link start-quiz" onClick={startQuiz}>
                                    Start Quiz
                                </button><br />
                            </div>
                        </div>
                    </div> :
                    null
            }
            {
                displayQuiz ?
                    <div>
                        <div id="demo-modal" class="modal quiz">
                            <div class="modal__content">
                                <Quiz id={props.id}/>
                                <button class="modal__close" onClick={hideModals}>&times;</button>
                            </div>
                        </div>
                    </div> :
                    null
            }
        </div>
    )
}

export default StartQuiz