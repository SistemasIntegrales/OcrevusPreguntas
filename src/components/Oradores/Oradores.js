import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Oradores.css';

import PonenteList from '../Ponente_list/Ponente_list';

class Oradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ponentes: [
                {nombre: "Dr. José de Jesús Flores Rivera", id: 'FloresRivera'},
                {nombre: "Dr. Fred D. Lublin", id: 'FredLublin'},
                {nombre: "Dr. Jorge R. Oksenberg", id: 'JorgeOksenberg'},
                {nombre: "Dr. Manuel Ricardo Fruns Quintana", id: 'ManuelFruns'}
            ],
            selectedPonente: null
        }
    }
    componentWillMount(){
        /*const listaPonentes = firebase.database().ref().child('Ponentes');
        const listaPonentes = firebase.database().ref("Ponentes");
        this.setState({ponentes: listaPonentes});*/
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h2 className="">Da click a tu nombre para que empieces a recibir preguntas:</h2>
                        <PonenteList
                            onPonenteSelect={
                                selectedPonente => this.setState({selectedPonente})
                            }
                            origen = "orador"
                            ponentes = {this.state.ponentes}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Oradores;