import React from 'react'
import "../style/card.css"

function quizCard() {
    return (
        <div className="card">
            <div className="card-contains short-title card-grid-item">title</div>
            <div className="card-contains short-description card-grid-item">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries. It has survived not only five centuries.
            </div>
            <div className="card-contains card-grid-item">
                <button className="start-quiz">
                    Start quiz
                </button>
            </div>
        </div>
    )
}

export default quizCard