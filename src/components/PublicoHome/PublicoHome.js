import React, { Component } from 'react';
import './PublicoHome.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Col, Row } from 'react-bootstrap';

class PublicoHome extends Component {

    constructor() {
        super();
        this.setState= {};
    }

    componentWillMount() {
        //
    }

    render() {
        return(
            <div>
                <ul>
                    <li><Link to={`/preguntar/orador1`} >Orador 1</Link></li>
                    <li><Link to={`/preguntar/orador2`} >Orador 2</Link></li>
                    <li><Link to={`/preguntar/orador3`} >Orador 3</Link></li>
                    <li><Link to={`/preguntar/orador4`} >Orador 4</Link></li>
                </ul>
                <Grid>
                    <Row>
                        {/**/}
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default PublicoHome;