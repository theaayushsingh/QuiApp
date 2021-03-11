import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import questionmsg from '../../Assets/image/questions-message.png';
import question from '../../Assets/image/learnr-question.png';
 
const QuizInstruction = () => {
    console.log("QuizInstruction");
    return (
        <Fragment>
            <Helmet><title>Quiz Instruction</title></Helmet>
            <div className="instruction container">
                <h1>How to play Quiz</h1>
                <p>Ensure you need guide from start to finish</p>
                <ul className="browser-default" id="main-list">
                    <li>The quiz has a duration 15 min and end soon as your time elapses.</li>
                    <li>Each quiz consist 15 questions.</li>
                    <li>Every question has 4 option
                        <img src={question} alt="question and option" />
                    </li>
                    <li>selection of flase option
                        <img src={questionmsg} alt="message displayed on right or wrong answer" />
                    </li>
                    <li>Feel free to quit the quiz at any time</li>
                    <li>Timer starts as soon as quiz loads</li>
                </ul>
                <div>
                    <span className="left"><Link to="/">No take me back</Link></span>
                    <span className="right"><Link to="/play/Quiz">Lets Start</Link></span>
                </div>
            </div> 
        </Fragment>
    )
} 
export default QuizInstruction;