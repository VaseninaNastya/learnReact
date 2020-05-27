import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
import 'antd/dist/antd.css'
import FirebaseContext from './context/firebaseContext'
import Firebase from './servises/firebase';

ReactDOM.render(<FirebaseContext.Provider value={new Firebase}><App /></FirebaseContext.Provider>, document.getElementById("root"));

