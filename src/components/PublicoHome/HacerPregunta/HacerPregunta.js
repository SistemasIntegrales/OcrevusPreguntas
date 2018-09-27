import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './HacerPregunta.css';

import FormPregunta from '../FormPregunta/FormPregunta';

class HacerPregunta extends Component {
    constructor(props) {
        super(props);

        this.addPregunta = this.addPregunta.bind(this);

        this.state={
            nombreOrador: this.props.match.params.id,
            idOrador: this.props.location.state
        }
    }

    addPregunta(){
        document.getElementById("notificacion").style.visibility = "visible"
        //document.getElementById().style.backgroundColor = "#FFFFCC"
        setTimeout(function() {
            document.getElementById("notificacion").style.visibility = 'hidden';
            //document.getElementById().style.backgroundColor = "#FFFFFF";
        }, 2000);
    }

    componentDidMount() {
        console.log("Props id del orador es:", this.state.idOrador);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="tituloh1">Escribe tu pregunta para el ponente</h1>
                        <h1 className="tituloh1 nomPreguntado">{this.state.nombreOrador}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="but-regresar col-sm-12 col-md-3">
                        <Link className="btn btn-warning" to={'/preguntar'}>Regresar</Link>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <FormPregunta
                            //nombreOrador = {this.state.nombreOrador}
                            idOrador = {this.state.idOrador}
                            onNewQuestion = {this.addPregunta}
                        />
                    </div>
                    <p id="notificacion">Pregunta enviada correctamente</p>
                </div>
            </div>
        )
    }
}

export default HacerPregunta;