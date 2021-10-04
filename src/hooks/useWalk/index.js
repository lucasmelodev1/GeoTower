import { useState } from "react";
import { collisionPoints } from "../useAddCollision";

export default function useWalk() {
    const [cartesianPosition, setCartesianPosition] = useState(() => {return {x: 0, y: 0}});
    const [dir, setDir] = useState(() => {return 0});
    

    const directions = {
        w: 0,
        d: 1,
        s: 2,
        a: 3
    }

    const stepSize = 12.5;

    const movementRatio = {
        w: { x: 0, y: stepSize },
        d: { x: stepSize, y: 0 },
        s: { x: 0, y: -stepSize },
        a: { x: -stepSize, y: 0 },
    }

    function move(dir, cartesianPosition) {
        setDir(dir)
        const nextXStep = cartesianPosition.x + movementRatio[dir].x
        const nextYStep = cartesianPosition.y + movementRatio[dir].y
        if(!(nextXStep > 87.5 || nextXStep < 0
            ||
            nextYStep > 62.5 || nextYStep < 0
            || collisionPoints.find(obj => obj.x === nextXStep && obj.y === nextYStep) !== undefined))
        {
            setCartesianPosition((prev) => ({
                x: prev.x + movementRatio[dir].x,
                y: prev.y + movementRatio[dir].y
            }))
        }
    }

    return {
        cartesianPosition, dir, directions, move
    }
}