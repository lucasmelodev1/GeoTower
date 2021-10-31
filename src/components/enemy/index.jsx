import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import Sprite from '../sprite';
import EnemyHpBar from '../enemyHpBar';

const Enemy = forwardRef(({spriteId, refIndex, positionSetStates, positionState, cartesianPosition, maxHp=100, attack=10, regen=10}, ref) => {
    const [currentHp, setCurrentHp] = useState(maxHp);
    const [isDead, setIsDead] = useState(false);
    const [isInBattle, setIsInBattle] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const points = [{ x: cartesianPosition.x + 12.5, y: cartesianPosition.y },
        { x: cartesianPosition.x - 12.5, y: cartesianPosition.y },
        { x: cartesianPosition.x, y: cartesianPosition.y + 12.5 },
        { x: cartesianPosition.x, y: cartesianPosition.y - 12.5 }]

    // function setBattleOff() {
    //     setIsInBattle(false)
    //     clearInterval()
    // }

    // function setBattleOn() {
    //     setIsInBattle(true)
    //     setInterval()
    // }

    const changeCurrentHp = (value, enemyRef) => {
        setCurrentHp(enemyRef.currentHp += value);
    };

    useEffect(() => {
        if (positionState.collisionPoints.points.find(e => JSON.stringify(e) === JSON.stringify({...cartesianPosition})) === undefined) {
            positionSetStates.addCollisionPoint({refIndex,...cartesianPosition})
            positionSetStates.addBattlePoints({refIndex, ...points})
        }
    }, [])
    
    useImperativeHandle(ref, () => ({
        changeCurrentHp,
        setIsDead,
        setIsInBattle,
        isInBattle,
        isDead,
        currentHp,
        maxHp, 
        attack,
        regen,
    }));
    
    return (
        <div>
            {!isDead ? <Sprite positionSetStates={positionSetStates} id={spriteId} cartesianPosition={cartesianPosition} toggleCollision={true}/> : null}
            {isInBattle ? <EnemyHpBar enemyPosition={cartesianPosition} currentHp={currentHp} maxHp={maxHp} /> : null}
        </div>
    )
});

export default Enemy;