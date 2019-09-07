import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import App from './app/App';
import cmn from "../style/cmn.css";

const middlewares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));