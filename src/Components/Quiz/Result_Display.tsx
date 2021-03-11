import React from 'react';
import { useContext } from 'react';
import {resultContext} from './Play';
import trophy from '../../Assets/image/trophy.jpg';
 
function Result_Display(props: any) {
  const finalGrade = useContext(resultContext);
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-header text-center">
                <h5>You have attempt</h5>
              </div>
              <div className="card-body">
                <h1 className="text-center">{props.attempt_question}</h1>
              </div>
              <div className="card-footer text-center">
                <h5>Questions</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-header text-center"> 
               <h5>You have given</h5>
               </div>
              <div className="card-body">
                <h1 className="text-center">{props.correct_answer}</h1>
              </div>
              <div className="card-footer text-center">
                <h5>Questions correct answer</h5> 
              </div>
              </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-header text-center">
                <h5>Your score </h5>
              </div>
              <div className="card-body">
                <h1 className="text-center">{props.score}</h1>
              </div>
              <div className="card-footer text-center">
                <h5>You are Passed</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {finalGrade}
      <div className="jumbotron text-center">
        <div className="row">
          <div className="col-sm-3">
            <img className="trophy" src={trophy}/>
          </div>
          <div className="col-sm-6">
          {props.my_Grade == 'Pass' ?
           <div> <h1 className="display-3">Congratulations.....!</h1>
            <p className="lead display-4">You are {props.my_Grade}</p></div>:<div><h1 className="display-4">Sorry You Are {props.my_Grade}</h1>
            <p className="lead">Better luck next time</p></div>}
          </div>
          <div className="col-sm-3">
          <img src=""/>
          </div>
        </div>
        
        </div>
    </>
  )
}
 
export default Result_Display;