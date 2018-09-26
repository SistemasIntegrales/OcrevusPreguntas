import React from 'react';
import PonenteItem from '../Ponente_item/Ponente_item';

import './Ponente_list.css'

const PonenteList = (props) => {
    const ponenteItems = props.ponentes.map((ponente) => {
        return (
            <PonenteItem
                onPonenteSelect={props.onPonenteSelect}
                key={ponente.id}
                origen = {props.origen}
                ponente={ponente}
            />
        );
    });
    if (!props.ponentes) {
        return(
            <div>Cargando lista ponentes</div>
        );
    }
    return (
        <ul className="col-md-12 list-group">
            {ponenteItems}
            {/* props.videos.map((video, i) =>
                <VideoListItem key={video.etag} {...video} />
            ) */}
        </ul>
    );
};

export default PonenteList;