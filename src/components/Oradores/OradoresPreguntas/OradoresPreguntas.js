import React, {Component} from 'react';
import './OradoresPreguntas.css';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import PreguntasList from './Preguntas_list/PreguntasList';

let conjuntoPregs = [];
class OradoresPreguntas extends Component {
    constructor(props) {
        super(props);

        this.state= {
            preguntas: null,
            ponenteSelect: this.props.match.params.id,
            idOrador: this.props.location.state
        }
    }

    componentDidMount(){
        var preguntasRef = firebase.database().ref(this.state.idOrador).child("preguntas");
        //preguntasRef.on('value', this.gotData, this.errData);
        /*preguntasRef.on('value', snap =>{
            this.setState({
                preguntas: snap.val()
            });
        });*/
    }

    /*gotData(data){
        let preguntas = data.val();
        let keys = Object.keys(preguntas);
        for (let i=0; i<keys.length;i++){
            let k = keys[i];
            let pregunta = preguntas[k].pregunta;
            conjuntoPregs.push(pregunta);
        }
        console.log(conjuntoPregs);
        () => this.setState({ preguntas: conjuntoPregs });
    }
    errData(err){
        console.log('Error!', err);
    }*/

    render() {
        return (
            <div className="container">
                <h2>Preguntas para el ponente {this.state.ponenteSelect} </h2>
                <div className="row">
                    <div className="col">
                        <Link className="btn btn-primary" to={'/'}><p>Regresar</p></Link>
                    </div>
                    <div className="col-10">
                        <PreguntasList
                            preguntas = {this.state.preguntas}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default OradoresPreguntas;