import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './HacerPregunta.css';

import FormPregunta from '../FormPregunta/FormPregunta';

class HacerPregunta extends Component {
    constructor(props) {
        super(props);
        this.state={
            nombreOrador: this.props.match.params.id,
            idOrador: this.props.location.state
        }
    }

    componentDidMount() {
        console.log("Props id del orador es:", this.state.idOrador);
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Link className="btn btn-primary" to={'/preguntar'}><p>Regresar</p></Link>
                    </div>
                    <div className="col-10">
                        <FormPregunta
                            nombreOrador = {this.state.nombreOrador}
                            idOrador = {this.state.idOrador}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default HacerPregunta;