import React, { Component } from 'react';

import PonenteList from '../Ponente_list/Ponente_list';

class Oradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ponentes: [
              {nombre: "Dr. Jesús Jiménez Román (primer bloque)", id: 'Bloque 1 - 1'},
              {nombre: "Dr. Arturo Ramírez Miranda (primer bloque)", id: 'Bloque 1 - 2'},
              {nombre: "Dr. Gabriel Lazcano (primer bloque)", id: 'Bloque 1 - 3'},
              {nombre: "Dr. Jorge Valdéz (primer bloque)", id: 'Bloque 1 - 4'},
              {nombre: "Dr. Mauricio Turati (primer bloque)", id: 'Bloque 1 - 5'},
              {nombre: "Dr. Alejandro Navas (mesa primer bloque)", id: 'Bloque 1 - 6'},

              {nombre: "Dra. Jasbeth Ledesma (eficacia monoterapias)", id: 'Bloque 2 - 1'},
              {nombre: "Dr. Hector Fontana", id: 'Bloque 2 - 2'},
              {nombre: "Dr. Félix Gil Carrasco (Evidencia en contra de combinaciones)", id: 'Bloque 2 - 3'},
              {nombre: "Dra. Jasbeth Ledesma (caso 1)", id: 'Bloque 2 - 4'},
              {nombre: "Dr. Gabriel Lazcano (caso 2)", id: 'Bloque 2 - 5'},
              {nombre: "Dr. Francisco Ortega (caso 3", id: 'Bloque 2 - 6'},
              {nombre: "Dr. Félix Gil Carrasco (mesa de discusión)", id: 'Bloque 2 - 7'},

              {nombre: "Dr. Francisco Beltran", id: 'Bloque 3 - 1'},
              {nombre: "Dr. Alejandro Navas (DEWS-II)", id: 'Bloque 3 - 2'},
              {nombre: "Dra. Nayelli Ramos Betancourt (ojo seco)", id: 'Bloque 3 - 3'},
              {nombre: "Dr. Julio Hernández Camarena (Impacto de conservadores)", id: 'Bloque 3 - 4'},
              {nombre: "Dra. Valeria Sánchez H", id: 'Bloque 3 - 5'},
              {nombre: "Dr. Julio Hernández Camarena (caso 1)", id: 'Bloque 3 - 6'},
              {nombre: "Dr. Arturo Ramírez", id: 'Bloque 3 - 7'},
              {nombre: "Dra. Nayelli Ramos Betancourt (caso 3)", id: 'Bloque 3 - 8'},
              {nombre: "Dra. Valeria Sánchez H", id: 'Bloque 3 - 9'},

              {nombre: "Dr. Mauricio Turati (cuarto bloque)", id: 'Bloque 4 - 1'},
              {nombre: "Dr. Felix Gil Carrasco (cuarto bloque)", id: 'Bloque 4 - 2'},
              {nombre: "Dr. Francisco Goñi", id: 'Bloque 4 - 3'},
              {nombre: "Dr. Jesús Jiménez Román (cuarto bloque)", id: 'Bloque 4 - 4'},
              {nombre: "Dr. Arturo Ramirez & Dra. Valeria Sánchez H", id: 'Bloque 4 - 5'},
              {nombre: "Q&A lárimas artificiales", id: 'Bloque 4 - 6'},
              {nombre: "Dra. Kira Chávez (conclusiones médicas)", id: 'Bloque 4 - 7'},
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
