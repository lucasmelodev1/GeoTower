import React from 'react';
import Sprite from '../sprite';
import useKeyPress from '../../hooks/useKeyPress';
import useWalk from '../../hooks/useWalk';

export default function Player({spriteId}) {
    const { cartesianPosition, dir, directions, move } = useWalk();

    useKeyPress((e) => {
        const dir = e.key.replace("Arrow", "").toLowerCase();
        if(["w", "d", "s", "a"].includes(e.key))
        {
            move(dir, cartesianPosition)
        };
    })
    return <Sprite id={spriteId} toggleCollision={false} cartesianPosition={cartesianPosition} dir={directions[dir]}/>
}
