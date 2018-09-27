import React from 'react';
import './Pregunta_item.css';

const Pregunta_item = ({pregunta}) => {
    return (
        <li className="list-group-item">
            <div className="pregunta-doctor">{pregunta}</div>
        </li>
    );
};
/*class Pregunta_item extends Component{
    constructor(props){
        super(props);

        this.state = {
            id: props.id,
            preguntas: props.pregunta
        }
    }

    render() {
        return (
            <li className="list-group-item">
                <div className="pregunta-doctor">{this.preguntas.texto}</div>
            </li>
        );
    }
};*/

export default Pregunta_item;