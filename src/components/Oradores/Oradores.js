import React, { Component } from 'react';

import PonenteList from '../Ponente_list/Ponente_list';

class Oradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ponentes: [
              {nombre: "Francisco Corona Chávez", id: 'Bloque 1-1'},
              {nombre: "Francisco Plata", id: 'Bloque 1-2'},
              {nombre: "Dra. Rita Q. Fuentes", id: 'Bloque 1-3'},
              {nombre: "Alejandra Morales", id: 'Bloque 1-4'},
              {nombre: "LCS team", id: 'Bloque 2-1'},
              {nombre: "Sandro Scomparim", id: 'Bloque 2-2'},
              {nombre: "Ley de protección (tbd)", id: 'Bloque 2-3'},
              {nombre: "Francisco Villegas", id: 'Bloque 2-4'},
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
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="titulo">Da click a tu nombre para que empieces a recibir preguntas:</h1>
                    </div>
                    <div className="col">
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
