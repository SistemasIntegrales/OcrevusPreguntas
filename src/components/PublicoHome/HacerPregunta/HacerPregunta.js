import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './HacerPregunta.css';
import * as firebase from 'firebase';

class HacerPregunta extends Component {
    constructor(props) {
        super(props);

        this.state={
            nombreOrador: props.name
        }
    }
    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link to={'/preguntar'}><p>Regresar</p></Link>
                    </div>
                </div>
                <div className="row">
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">Realiza tu pregunta a {this.state.nombreOrador} </label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default HacerPregunta;