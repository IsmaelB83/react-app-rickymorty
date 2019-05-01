import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Personaje from './components/Personaje';
import Form from './components/Formulario';
import App from './components/RickMorty';
import Error404 from './components/Error404';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from './components/Store';

let reactComp = <Provider store={store}>
                    <Router>
                        <Switch>
                            <Route path='/personaje/:id(\d+)' exact component={Personaje}/>
                            <Route path='/form' exact component={Form} />
                            <Route path={['/', '/index']} exact component={App} />
                            <Route component={Error404} />
                        </Switch>
                    </Router>
                </Provider>

ReactDOM.render(reactComp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

