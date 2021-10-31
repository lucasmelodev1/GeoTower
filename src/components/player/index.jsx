import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Sprite from '../sprite';
import useKeyPress from '../../hooks/useKeyPress';
import useWalk from '../../hooks/useWalk';
import HpBar from '../hpbar';

const Player = forwardRef(({spriteId, mapCollisionPoints, maxHp=100, attack=25}, ref) => {
    const { cartesianPosition, dir, directions, move } = useWalk(mapCollisionPoints);
    const [currentHp, setCurrentHp] = useState({value: maxHp});
    const [isDead, setIsDead] = useState({value: false});
    const [isInBattle, setIsInBattle] = useState({value: false});

    useKeyPress((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase();
        if(["w", "d", "s", "a"].includes(e.key))
        {
            move(dir, cartesianPosition);
        };
    })

    function changeCurrentHp(damage) {
        setCurrentHp((prev) => ({value: prev.value + damage}))
    }
    
    useImperativeHandle(ref, () => ({
        setIsDead,
        setIsInBattle,
        isDead,
        isInBattle,
        cartesianPosition,
        maxHp,
        currentHp,
        attack,
        dir,
        changeCurrentHp
    }));

    return <>
        <Sprite id={spriteId} toggleCollision={false} cartesianPosition={cartesianPosition} dir={directions[dir]}/>
        <HpBar currentHp={currentHp.value} maxHp={maxHp}/>
    </>
})

export default Player;