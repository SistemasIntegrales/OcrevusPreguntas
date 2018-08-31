import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhEPYryOX3yVDXrXyPRu4svu_54LHfZyg",
    authDomain: "ocrevuspreguntas.firebaseapp.com",
    databaseURL: "https://ocrevuspreguntas.firebaseio.com",
    projectId: "ocrevuspreguntas",
    storageBucket: "ocrevuspreguntas.appspot.com",
    messagingSenderId: "59984635212"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
