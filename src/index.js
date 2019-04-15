import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Personaje from './components/Personaje';
import Form from './components/Formulario';
import App from './components/RickMorty';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Crear react
let reactComp = <Router>
                    <Route path='/form' component={Form} />
                    <Route path='/index' component={App} />
                    <Route path='/personaje/:id' component={Personaje}/>
                </Router>

ReactDOM.render(reactComp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

