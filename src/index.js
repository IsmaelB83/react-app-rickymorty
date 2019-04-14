import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RickMorty from './components/Personajes';
import * as serviceWorker from './serviceWorker';

// Crear react
let reactComp = <RickMorty/>
ReactDOM.render(reactComp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

