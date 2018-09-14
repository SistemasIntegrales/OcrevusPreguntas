import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import PonenteList from '../Ponente_list/Ponente_list';

import './Oradores.css';

class Oradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ponentes: [],
            selectedPonente: null
        }
    }
    componentWillMount(){
        const listaPonentes = firebase.database().ref().child('Ponentes');
        this.setState({ponentes: listaPonentes});
        console.log(this.state.ponentes);
    }

    render() {
        return (
            <div>
                <PonenteList
                    onPonenteSelect={selectedPonente => this.setState({selectedPonente})}
                    ponentes = {this.state.ponentes}/>
            </div>
        );
    }
}

export default Oradores;