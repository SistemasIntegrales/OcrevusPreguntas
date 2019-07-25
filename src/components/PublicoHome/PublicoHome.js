import React, { Component } from 'react';
import PonenteList from '../Ponente_list/Ponente_list';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PublicoHome extends Component {

  constructor() {
    super();
    this.state= {
      ponentes: [
        {nombre: "Francisco Corona Chávez", id: 'Bloque 1-1'},
        {nombre: "Francisco Plata", id: 'Bloque 1-2'},
        {nombre: "Dra. Rita Q. Fuentes", id: 'Bloque 1-3'},
        {nombre: "Alejandra Morales", id: 'Bloque 1-4'},
        {nombre: "LCS team", id: 'Bloque 2-1'},
        {nombre: "Sandro Scomparim", id: 'Bloque 2-2'},
        {nombre: "Ley de protección (tbd)", id: 'Bloque 2-3'},
        {nombre: "Francisco Villegas", id: 'Bloque 2-4'},
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
