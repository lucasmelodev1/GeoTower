import React from 'react'
import map from '../../img/maps/grass_map.svg'

export default function Map(mapId) {
    return (
        <div>
            <img src={map} alt={""} style={{
                height: "80vh",
            }}/>
        </div>
    );
}
