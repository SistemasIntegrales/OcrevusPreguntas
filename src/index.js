import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBhR5p483gkB7B3395-asPkh41Jk33jeEw",
    authDomain: "unantesyunahoraem.firebaseapp.com",
    databaseURL: "https://unantesyunahoraem.firebaseio.com",
    projectId: "unantesyunahoraem",
    storageBucket: "unantesyunahoraem.appspot.com",
    messagingSenderId: "631653853839"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
