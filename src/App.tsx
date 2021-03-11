import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './Components/Home';
import '@mdi/font/scss/materialdesignicons.scss';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import Play from './Components/Quiz/Play';
import Quizinstruction from './Components/Quiz/Quizinstruction';
 
function App() {
  return (
     <Router>
       <Route path="/" exact component={Home}/>
       <Route path="/play/instruction" component={Quizinstruction}/>
       <Route path="/play/Quiz" component={Play} />
     </Router>
  );
}
export default App;