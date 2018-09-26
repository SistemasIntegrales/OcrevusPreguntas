import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAEeyzrlQNTrlzzI4UsSImRVcZcDZfFk0",
    authDomain: "preguntassi.firebaseapp.com",
    databaseURL: "https://preguntassi.firebaseio.com",
    projectId: "preguntassi",
    storageBucket: "preguntassi.appspot.com",
    messagingSenderId: "608425415636"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
