import React, { useRef, useState } from 'react'
import Enemy from '../enemy';
import Player from '../player';
import usePositionTracker from '../../hooks/usePositionTracker';
import useKeyPress from '../../hooks/useKeyPress';
import isEqual from '../../functions/isEqual';
import battle from '../../functions/battle';

export default function Map({mapId}) {
    let image = require(`../../img/maps/${mapId}.svg`).default

    const enemiesRefs = useRef([]);
    const playerRef = useRef();

    const [attackIsReady, setAttackIsReady] = useState({value: true})
    
    const {collisionPoints, addCollisionPoint, removeCollisionPoint, battlePoints, addBattlePoints, removeBattlePoints} = usePositionTracker();
    const {changeCurrentHp} = battle()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const mapEnemies = {
        grass_map: [{x: 87.5, y: 62.5, hp: 115},{x: 87.5, y: 37.5, hp: 130}]
    }

    const mapElements = {
        grass_map: <>{mapEnemies[mapId].map((value, index) => { return (
            <Enemy spriteId={`enemy_${mapId.replace("_map","")}`} refIndex={index} positionSetStates={{addCollisionPoint, addBattlePoints}} positionState={{collisionPoints}} cartesianPosition={{x: value.x, y: value.y}} maxHp={value.hp}
                ref={(element) => {enemiesRefs.current[index] = element}} key={index}
            />
        )})}</>
    }

    useKeyPress((e) => {
        const currentBattlePointIndex = battlePoints.points.findIndex(e => Object.values(e).filter(e => isEqual(e, {x: playerRef.current.cartesianPosition.x, y: playerRef.current.cartesianPosition.y})).length >= 1)
        if (["q"].includes(e.key) && attackIsReady.value) {
            if ( currentBattlePointIndex !== -1 && !enemiesRefs.current[battlePoints.points[currentBattlePointIndex].refIndex].isDead.value ) {
                setAttackIsReady({value: false})
                setTimeout(() => {setAttackIsReady({value: true})}, 1500);
                const currentEnemy = enemiesRefs.current[battlePoints.points[currentBattlePointIndex].refIndex]
                changeCurrentHp(-playerRef.current.attack, currentEnemy, {addCollisionPoint, removeCollisionPoint, addBattlePoints, removeBattlePoints});
                return
            }
        }
    });

    return (
        <div>
            <img src={image} alt={""} style={{
                height: "80vh",
            }}/>
            <div className="MapDiv">
                <Player ref={playerRef} mapCollisionPoints={collisionPoints.points} spriteId={"hero_cyan"}/>
                {mapElements[mapId]}
            </div>
        </div>
    );
}
