import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import createSageMidleware from 'redux-saga';
import './index.css';
import App from './App.jsx';
import { rootReducer } from './redux/rootReducer';
import {Provider} from 'react-redux';
import { forbiddenWordsMidleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';

const saga = createSageMidleware();

const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(thunk, forbiddenWordsMidleware, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
);

// saga.run(sagaWatcher);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
