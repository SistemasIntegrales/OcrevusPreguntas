import React, { Component } from 'react';
import PonenteList from '../Ponente_list/Ponente_list';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PublicoHome extends Component {

    constructor() {
        super();
        this.state= {
            ponentes: [
              {nombre: "Dr. Francisco Goñi", id: 'Bloque 4 - 3'},
              {nombre: "Dr. Jesús Jiménez Román (discusión)", id: 'Bloque 4 - 4'},
              {nombre: "Dr. Arturo Ramirez & Dra. Valeria Sánchez H", id: 'Bloque 4 - 5'},
              {nombre: "Q&A lárimas artificiales", id: 'Bloque 4 - 6'},
              {nombre: "Dra. Kira Chávez (conclusiones médicas)", id: 'Bloque 4 - 7'},
            ]
        };
    }
    render() {
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12">
                        <h1 className="titulo">Selecciona al ponente en turno para enviar tu pregunta:</h1>
                    </div>
                    <div className="col">
                        <PonenteList
                            onPonenteSelect={
                                selectedPonente => this.setState({selectedPonente})
                            }
                            origen = "publico"
                            ponentes = {this.state.ponentes}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PublicoHome;
