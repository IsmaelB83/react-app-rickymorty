import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// React-Redux
import { Provider } from 'react-redux'; 
import { store } from './components/Store';
import './index.css';
// Own imports
import Personaje from './components/Personaje';
import Form from './components/Formulario';
import RickMorty from './components/RickMorty';
import Error404 from './components/Error404';

let reactComp = <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path='/personaje/:id(\d+)' exact component={Personaje}/>
                            <Route path='/form' exact component={Form} />
                            <Route path={['/', '/index']} exact component={RickMorty} />
                            <Route component={Error404} />
                        </Switch>
                    </Router>
                </Provider>

ReactDOM.render(reactComp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

