import React, {Component} from 'react';
import './OradoresPreguntas.css';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';

import PreguntasList from './Preguntas_list/PreguntasList';

class OradoresPreguntas extends Component {
    constructor(props) {
        super(props);

        this.state= {
            preguntas: [],
            ponenteSelect: this.props.match.params.id,
            idOrador: this.props.location.state
        }
        this.gotData = this.gotData.bind(this)
    }

    componentDidMount(){
        var preguntasRef = firebase.database().ref(this.state.idOrador).child("preguntas");
        preguntasRef.on('value', this.gotData, this.errData);
        /*preguntasRef.on('value', snap =>{
            this.setState({
                preguntas: snap.val()
            });
        });*/
    }

    gotData(data){
        let preguntasFirebase = data.val();
        console.log(preguntasFirebase);
        if (preguntasFirebase !== null) {
            //this.setState({ preguntas: this.state.preguntas.concat(preguntasFirebase)});
            //this.setState({ preguntas: [...this.state.preguntas, ...preguntasFirebase]});
            //this.setState({ preguntas: [...this.state.preguntas].concat(preguntasFirebase)});

            //console.log(`Json preguntas ${jsonPregs}`);
            this.setState({preguntas: []})
            let keys = Object.keys(preguntasFirebase);
            for (let i=0; i<keys.length;i++){
                let k = keys[i];
                let pregunta = preguntasFirebase[k].pregunta;
                this.setState({ preguntas: [...this.state.preguntas].concat(pregunta)});
            }
        }
    }
    errData(err){
        console.log('Error!', err);
    }

    render() {
        return (
            <div className="container">
                <h1 className="tituloh1">Preguntas para el ponente:</h1>
                <h1 className="tituloh1 nomPreguntado">{this.state.ponenteSelect}</h1>
                <div className="row">
                    <div className="but-regresar col-xs-12 col-md-2">
                        <Link className="btn btn-success" to={'/'}>Regresar</Link>
                    </div>
                    <div className="col-xs-12 col-md-10">
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
