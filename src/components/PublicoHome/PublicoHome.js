import React, { Component } from 'react';
import './PublicoHome.css';
import PonenteList from '../Ponente_list/Ponente_list';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

    componentWillMount() {
        //
    }
    /*<div>
        <ul className="col-md-12 list-group">
            <li><Link to={`/preguntar/`} > {this.state.ponentes[0]} </Link></li>
            <li><Link to={`/preguntar/orador2`} >{this.state.ponentes[1]}</Link></li>
            <li><Link to={`/preguntar/orador3`} >{this.state.ponentes[2]}</Link></li>
            <li><Link to={`/preguntar/orador3`} >{this.state.ponentes[2]}</Link></li>
        </ul>
    </div>*/
    render() {
        return(
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h2 className="">Da click en el nombre del ponente en turno para enviar tu pregunta:</h2>
                        {/*<h3 className="">para enviar tu pregunta:</h3>*/}
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

    redirigir(ponente) {
        //
    }
}

export default PublicoHome;