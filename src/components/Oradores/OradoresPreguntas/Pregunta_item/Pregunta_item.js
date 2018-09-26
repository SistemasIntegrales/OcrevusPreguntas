import React from 'react';
import './Pregunta_item.css';

const Pregunta_item = (pregunta) => {
    return (
        <li className="list-group-item">
            <div className="pregunta-doctor">{pregunta.texto}</div>
        </li>
    );
};

export default Pregunta_item;