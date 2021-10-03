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
            move(dir)
        };
    })
    return <Sprite id={spriteId} cartesianPosition={cartesianPosition === 0 ? {x:0, y:25} : cartesianPosition} dir={directions[dir]}/>
}
