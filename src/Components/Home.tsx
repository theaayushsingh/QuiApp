import { Fragment } from "react"
import React from 'react';
import {Helmet} from 'react-helmet'
import { Link } from "react-router-dom";
 
const Home = () => {
    return (    
        <Fragment>
            <Helmet><title>Quize App - Home</title></Helmet>
             <div id="Home">
                <section>
                    <div className="cubestyle">
                        <span className="mdi mdi-cube-outline cube"></span>
                    </div>
                    <h1 className="headind-quiz">Quiz app</h1>
                    <div className="play-button-container">
                        <ul>
                            <li><Link to="/play/instruction" className="play-Button">Play</Link></li>
                        </ul>
                    </div>
                    <div className="auth-container">
                        <Link to="#" className="auth-Button" id="login-button">Login</Link>
                        <Link to="/Signup" className="auth-Button" id="Signup-button">Sign Up</Link>
                    </div>
                </section>
            </div> 
        </Fragment>     
    );
}
 
export default Home;