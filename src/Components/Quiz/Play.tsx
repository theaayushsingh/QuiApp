import React, { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import Questions from '../../Questions.json';
import Result_Display from './Result_Display';
import Tooltip from '@material-ui/core/Tooltip';
 
 export const resultContext = React.createContext<any>('');
 
const Play = (props: any) => {
    const [question, setquestion] = useState('');
    const [count, setcount] = useState(0);
    const [buttonDisable, setbuttonDisable] = useState(false);
    const [score, setscore] = useState(0);
    const [answer, setanswer] = useState('');
    const [active, setactive] = useState('buttonactive');
    const [message, setmessage] = useState('');
    const [noOfAnswerGiven, setnoOfAnswerGiven] = useState(0);
    const [noOfCorrectAnswer, setnoOfCorrectAnswer] = useState(0);
    const [attempt, setattemp] = useState<any>([]);
    const [result, setresult] = useState(true);
    const [notattempt, setnotattempt] = useState<any>([]);
    const [lifeline, setlifeline] = useState(0);
    const [grade, setgrade] = useState('');
    let hint = 5;
    let fiftyFifty = 2;
 
    useEffect(() => {
        displayquestion();
        checkAttepmt(count);
    }, [count]);
 
    useEffect(() => {
        setscore(prvscore => noOfCorrectAnswer * 10);
    }, [noOfCorrectAnswer]);
 
    const displayquestion = () => {
        setquestion(x => Questions[count].question);
        setanswer(x => Questions[count].answer);
    }
 
    /* display next Question */
    const displayNextQuestion = () => {
        if (count < 14) {
            setcount(prvcnt => prvcnt + 1);
            setbuttonDisable(prvstate => prvstate = false);
            setactive(prvstate => prvstate = 'buttonactive');
        }
        else {
            alert("Quize contain only 15 questions");
        }
    }
 
    /* display previous question */
    const displayPrevQuestion = () => {
        if (count > 0) {
            setcount(prvcnt => prvcnt - 1);
            setbuttonDisable(prvstate => false)
        }
        else {
            setbuttonDisable(prvstate => true)
        }
    }
 
    /* select option (answer) */
    const selectAnswer = (e: any) => {
        setnoOfAnswerGiven(noOfAnswerGiven + 1);
        setattemp([...attempt, count]);
        setactive(prvstate => 'buttonInactive');
        setmessage(prvmsg => 'To select next Question press next button')
 
        if (e.target.textContent === answer) {
            setnoOfCorrectAnswer(prvstate => prvstate + 1);
        }
    }
 
    /* check question attempt or not if attepmt disable all option */
    const checkAttepmt = (c: any) => {
        let val = attempt.includes(c);
        if (val) {
            setactive(prvstate => 'buttonInactive');
        }
        else {
            setactive(prvstate => 'buttonactive');
        }
    }
    /* Display result component  chack reamining unanswered Questions*/
    const displayResult = () => {
        if (attempt.length == 15) {
            setresult(false);
            let percentage = (score * 100) / 150;
            if(percentage>60)
            {
              setgrade('Pass');
            }
            else
            {
                setgrade('Fail')
            }
 
        }
        else {
            for (let i = 0; i < 15; i++) {
                let result = attempt.includes(i);
                if (result) {
                    notattempt.splice(i, 1);
                }
                else {
                    // setnotattempt(notattempt.push(i+1)); 
                    setnotattempt(notattempt.splice(i, 0, i + 1));
                }
            }
            alert("please attemp all question " + notattempt + " these questions are remaining");
        }
    }
    /* use Lifeline */
    const useLifeline = () =>{
        if(lifeline<=2)
        {
            setlifeline(prvstate => prvstate+1);
            console.log("uselifeline");
        }
        else
        {
            console.log("no more lifeline");
        }
    }
    return (
        <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            {result ?
                <div className="questions">
                    <h2>Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p>
                            <span className="mdi mdi-set-center mdi-24px lifeline-icon usehelp" onClick={useLifeline}><span className="lifeline">{fiftyFifty}</span></span>
                        </p>
                        <p>
                            <span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon usehelp"></span><span className="lifeline">{hint}</span>
                        </p>
                    </div>
                    <div>
                        <p>
                            <span className="left">{count + 1} of 15</span>
                            <span className="right">2:15<span className="mdi mdi-clock-outline mdi-24px"></span></span>
                        </p>
                    </div>
                    <h5>{question}</h5>
                    <div className="options-container">
                        <p className={`option ${active}`} onClick={selectAnswer}>{Questions[count].optionA}</p>
                        <p className={`option ${active}`} onClick={selectAnswer}>{Questions[count].optionB}</p>
                    </div>
                    <div className="options-container">
                        <p className={`option ${active}`} onClick={selectAnswer}>{Questions[count].optionC}</p>
                        <p className={`option ${active}`} onClick={selectAnswer}>{Questions[count].optionD}</p>
                    </div>
                    <div className="button-container">
                        <Tooltip title="To previous Question"><button id="previous" disabled={buttonDisable} onClick={displayPrevQuestion}><span className="mdi mdi-arrow-left-bold"></span>  Previous</button></Tooltip>
                        <Tooltip title="To next Question"><button id="next" onClick={displayNextQuestion}><span className="mdi mdi-arrow-right-bold"></span>  Next</button></Tooltip>
                        <Tooltip title="Submit quiz"><button id="quit" onClick={displayResult}><span className="mdi mdi-close-octagon"></span> submit</button></Tooltip>
                    </div>
                    <div className="message">
                        <p>{message}</p>
                        <p>no of answre given : {noOfAnswerGiven}</p>
                        <p>no of correct answer :{noOfCorrectAnswer}</p>
                        <p>your score : {score}</p>
                        <p>{count}</p>
                    </div>
                </div>
                : 
                <resultContext.Provider value={grade}>
                 <Result_Display my_Grade={grade} score={score} attempt_question={noOfAnswerGiven} correct_answer={noOfCorrectAnswer}></Result_Display>
                </resultContext.Provider>
         }
     </Fragment>
 )
}
export default Play;