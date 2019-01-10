import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore,applyMiddleware} from "redux";
import createsagaMiddelware from 'redux-saga';

import reducer from './reducer';
import mySaga from "./sagas/Sagas";
import {Provider} from 'react-redux';

const sagamiddleware =createsagaMiddelware();
const store =createStore(reducer,applyMiddleware(sagamiddleware));
sagamiddleware.run(mySaga);

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
