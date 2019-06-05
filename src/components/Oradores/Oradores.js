import React, { Component } from 'react';

import PonenteList from '../Ponente_list/Ponente_list';

class Oradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ponentes: [
              {nombre: "Barcelona", id: 'Barca'},
              {nombre: "Doc1", id: 'Doc1'},
              {nombre: "Doc2", id: 'Doc2'},
              {nombre: "Doc3", id: 'Doc3'},
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
