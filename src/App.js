import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Oradores from './components/Oradores/Oradores';
import OradoresPreguntas from './components/Oradores/OradoresPreguntas/OradoresPreguntas';
import PublicoHome from './components/PublicoHome/PublicoHome';
import HacerPregunta from './components/PublicoHome/HacerPregunta/HacerPregunta';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="main">
                <Switch>
                    <Route exact path = "/oradores/:id" component = {OradoresPreguntas} />
                    <Route exact path = "/" component = {Oradores} />

                    <Route exact path = "/preguntar/:id" component = {HacerPregunta} />
                    <Route exact path = "/preguntar/" component = {PublicoHome} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
