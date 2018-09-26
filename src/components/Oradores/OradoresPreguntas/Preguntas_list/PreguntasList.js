import React, {Component} from 'react';
import PreguntaItem from '../Pregunta_item/Pregunta_item';

const PreguntasList = (props) => {
    if (props.preguntas.length === 0) {
        return(
            <div>Esperando preguntas...</div>
        );
    } else {
        const preguntaItems = props.preguntas.map((pregunta) => {
            return (
                <PreguntaItem
                    key={pregunta.id}
                    pregunta={pregunta}
                />
            );
        });
        return (
            <div>
                <ul className="col-md-12 list-group">
                    {preguntaItems}
                </ul>
            </div>
        )
    }
};

export default PreguntasList;