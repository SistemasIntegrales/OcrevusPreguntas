import React from 'react';

//const VideoListItem = (props) => {
const PonenteItem = ({ponente, onPonenteSelect}) => {
    return (
        <li onClick={() => onPonenteSelect(ponente)} className="list-group-item">
            {ponente.nombre}
        </li>
    );
};

export default PonenteItem;