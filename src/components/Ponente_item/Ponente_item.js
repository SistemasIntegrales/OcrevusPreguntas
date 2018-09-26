import React from 'react';
import './Ponente_item.css';
import {Link} from "react-router-dom";

//const VideoListItem = (props) => {
const PonenteItem = ({origen, ponente, onPonenteSelect}) => {
    if (origen === "orador") {
        return (
            <li
                className="nombre-doctor"
                onClick={
                    () => onPonenteSelect(ponente)
                }
                className="list-group-item">
                <Link to={`/oradores/${ponente.nombre}`}>{ponente.nombre}</Link>
            </li>
        );
    } else {
        return (
            <li
                className="nombre-doctor"
                onClick={
                    () => onPonenteSelect(ponente)
                }
                className="list-group-item">
                <Link to={`/preguntar/${ponente.nombre}`}>{ponente.nombre}</Link>
            </li>
        );
    }
};

export default PonenteItem;