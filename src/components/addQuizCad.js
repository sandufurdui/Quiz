import { React, Component } from 'react'
import AddQuestion from './addQuestionInput'
import { useForm } from "react-hook-form";

class AddQuizCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayAdd: false,
            display: false,
            quizTitle: '',
            quizDescription: '',
            quizCategory: '',
            quizDifficulty: 0,
            quizQuestions: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    hidePop = () => this.setState({ displayAdd: false })

    showPop = () => this.setState({ displayAdd: true })

    handleChange(event) {
        this.setState({
            // Computed property names
            // keys of the objects are computed dynamically
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const { quizTitle, quizDescription, quizCategory, quizDifficulty } = this.state
        event.preventDefault()
        alert(`
        ____Quiz Details____\n
        Title : ${quizTitle}
        Description : ${quizDescription}
        Category : ${quizCategory}
        Difficulty : ${quizDifficulty}
    `)
    }

    render() {
        return (
            <div>
                <div className="dashboard-card">
                    <div className="add-quiz-button parent">
                        <button className="add-quiz-button" onClick={this.showPop} >
                            +
                        </button>
                    </div>
                </div>
                {
                    this.state.displayAdd ?
                        <div>

                            <div id="demo-modal" class="modal">
                                <form onSubmit={this.handleSubmit}>
                                    <div class="modal__content">
                                        <h1>Add New Quiz</h1>
                                        <p>Please fill all the fields bellow in order to add new quiz (
                                            <b className='warning'>
                                                Note that regardless the order of answers you input, they will be showed in random order
                                            </b>)
                                        </p><br />
                                        <label htmlFor='title'><h4>Give the quiz a title</h4></label>
                                        <input
                                            name='quizTitle'
                                            placeholder='Title'
                                            value={this.state.quizTitle}
                                            onChange={this.handleChange}
                                        /><br />
                                        <label htmlFor='description'><h4>Add some description</h4></label>
                                        <input
                                            name='quizDescription'
                                            placeholder='Description'
                                            value={this.state.quizDescription}
                                            onChange={this.handleChange}
                                        /><br />
                                        <label htmlFor='category'><h4>Select a category for it</h4></label>
                                        <input
                                            name='quizCategory'
                                            placeholder='Category'
                                            value={this.state.quizCategory}
                                            onChange={this.handleChange}
                                        /><br />
                                        <h4>Dificulty
                                            <div class="tooltip">   &#8505;
                                                <span class="tooltiptext">
                                                    One difficulty point is added for each 10 questions <br />
                                                    E.g. Quiz with 24 questions will have 2 difficulty points, 25 questions- 3 difficulty points
                                                </span>
                                            </div></h4>
                                        

                                        <input
                                            name='quizDifficulty'
                                            placeholder='Difficulty'
                                            value={this.state.quizDifficulty}
                                            onChange={this.handleChange}
                                            required true
                                            maxLength: 20
                                        /><br />
                                        <h4>Enter quiz questions and answers</h4>
                                            <div>
                                            <button>Create Account</button>
                                        </div>
                                        {/* <button className="add-questions" onClick={addInput}>+</button> */}
                                        <button class="modal__close" onClick={this.hidePop}>&times;</button>
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
}

export default AddQuizCard

{/*                                 

                                {arr.map((item, i) => {
                                    questionNumber = questionNumber + 1
                                    return (
                                        <><label>Question {questionNumber}</label>
                                            <input
                                                placeholder='Question'
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                size="40" /><br />
                                            <input
                                                placeholder="answer 1"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" />
                                            <input
                                                placeholder="answer 2"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" />
                                            <input
                                                placeholder="answer 3"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" />
                                            <input
                                                placeholder="answer 4"
                                                onChange={handleChange}
                                                value={item.value}
                                                id={i}
                                                type={item.type}
                                                size="40" /></>
                                    );
                                })} */}