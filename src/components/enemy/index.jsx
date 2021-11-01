import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import Sprite from '../sprite';
import EnemyHpBar from '../enemyHpBar';

const Enemy = forwardRef(({spriteId, refIndex, positionSetStates, positionState, cartesianPosition, maxHp=100, attack=10, regen=10}, ref) => {
    const [currentHp, setCurrentHp] = useState({value: maxHp});
    const [isDead, setIsDead] = useState({value: false});
    const [isInBattle, setIsInBattle] = useState({value: false});

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const points = [{ x: cartesianPosition.x + 12.5, y: cartesianPosition.y },
        { x: cartesianPosition.x - 12.5, y: cartesianPosition.y },
        { x: cartesianPosition.x, y: cartesianPosition.y + 12.5 },
        { x: cartesianPosition.x, y: cartesianPosition.y - 12.5 }]

    const changeCurrentHp = (value) => {
        setCurrentHp((prev) => ({value: prev.value += value}));
    };
    
    useEffect(() => {
        if (positionState.collisionPoints.points.find(e => JSON.stringify(e) === JSON.stringify({...cartesianPosition})) === undefined) {
            positionSetStates.addCollisionPoint({refIndex,...cartesianPosition})
            positionSetStates.addBattlePoints({refIndex, ...points})
        }
         // eslint-disable-next-line
    }, [])
    
    useImperativeHandle(ref, () => ({
        changeCurrentHp,
        setIsDead,
        setIsInBattle,
        isInBattle,
        isDead,
        currentHp,
        attack,
        regen,
        cartesianPosition,
        points,
        refIndex
    }));
    
    return (
        <div>
            {!isDead.value ? <Sprite id={spriteId} cartesianPosition={cartesianPosition}/> : null}
            {isInBattle.value ? <EnemyHpBar enemyPosition={cartesianPosition} currentHp={currentHp.value} maxHp={maxHp} /> : null}
        </div>
    )
});

export default Enemy;