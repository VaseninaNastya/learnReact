import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import rootReduser from './reducers';
import FirebaseContext from './context/firebaseContext'
import Firebase from './servises/firebase';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {logger} from 'redux-logger';
import * as actions from './actions'

import { createStore, applyMiddleware,  } from 'redux';

//import { bindActionCreators } from 'redux';
import "./index.css";
import 'antd/dist/antd.css'


const store = new createStore(rootReduser, applyMiddleware(logger));


console.log("rootreduser", rootReduser);
/*
console.log('store', store.getState());
const { dispatch } = store;
const { plusAction, minusAction } = bindActionCreators(actions, dispatch);
store.subscribe(() => console.log(store.getState()));
plusAction(5);
minusAction(6);*/
ReactDOM.render(
    
    <Provider store={store}>
        <FirebaseContext.Provider value={new Firebase}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </FirebaseContext.Provider>
        </Provider >, document.getElementById("root"));
