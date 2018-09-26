import React, { Component } from 'react';
import PonenteList from '../Ponente_list/Ponente_list';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PublicoHome extends Component {

    constructor() {
        super();
        this.state= {
            ponentes: [
                {nombre: "Dr. José de Jesús Flores Rivera", id: 'FloresRivera'},
                {nombre: "Dr. Fred D. Lublin", id: 'FredLublin'},
                {nombre: "Dr. Jorge R. Oksenberg", id: 'JorgeOksenberg'},
                {nombre: "Dr. Manuel Ricardo Fruns Quintana", id: 'ManuelFruns'}
            ]
        };
    }
    render() {
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12">
                        <h1 className="titulo">Da click en el nombre del ponente en turno para enviar tu pregunta:</h1>
                        {/*<h3 className="">para enviar tu pregunta:</h3>*/}
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