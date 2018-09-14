import React from 'react';
import PonenteItem from '../Ponente_item/Ponente_item';

const PonenteList = (props) => {
    const ponenteItems = props.ponentes.map((ponente) => {
        return (
            <PonenteItem
                onPonenteSelect={props.onPonenteSelect}
                key={ponente.id}
                ponente={ponente}
            />
        );
    });
    return (
        <ul className="col-md-4 list-group">
            {ponenteItems}
            {/* props.videos.map((video, i) =>
                <VideoListItem key={video.etag} {...video} />
            ) */}
        </ul>
    );
};

export default PonenteList;