import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDXFogm6rCmasX98bmGEBcEfOPCUCDmVHU",
  authDomain: "preguntas-ponente.firebaseapp.com",
  databaseURL: "https://preguntas-ponente.firebaseio.com",
  projectId: "preguntas-ponente",
  storageBucket: "",
  messagingSenderId: "49790416945",
  appId: "1:49790416945:web:7def835e0e524b9d"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
