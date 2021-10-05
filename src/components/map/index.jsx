import React, { useRef } from 'react'
import useKeyPress from '../../hooks/useKeyPress';
import Enemy from '../enemy';

export const collisionPoints = []

export default function Map({mapId}) {
    let image = require(`../../img/maps/${mapId}.svg`).default

    const ref = useRef();

    // useKeyPress((e) => {
        
    // });

    const mapSets = {
        grass_map: <><Enemy spriteId={"enemy_grass"} cartesianPosition={{x: 87.5, y: 62.5}} hp={115}/>
        <Enemy spriteId={"enemy_grass"} cartesianPosition={{x: 12.5, y: 50}} hp={115}/></>
    }

    return (
        <div>
            <img src={image} alt={""} style={{
                height: "80vh",
            }}/>
            <div className="MapDiv">
                {mapSets[mapId]}
            </div>
        </div>
    );
}
