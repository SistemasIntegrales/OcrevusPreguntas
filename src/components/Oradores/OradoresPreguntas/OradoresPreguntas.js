import React, {Component} from 'react';
import './OradoresPreguntas.css';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import PreguntasList from './Preguntas_list/PreguntasList';

class OradoresPreguntas extends Component {
    constructor(props) {
        super(props);

        this.state= {
            preguntas:null,
            ponenteSelect: this.props.match.params.id
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={'/'}><p>Regresar</p></Link>
                    </div>
                </div>
                <h2>Preguntas para el ponente {this.state.ponenteSelect} </h2>
                <PreguntasList
                    preguntas = {this.state.preguntas}
                />
            </div>
        );
    }
}

export default OradoresPreguntas;