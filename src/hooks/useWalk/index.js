import { useState } from "react";

export default function useWalk() {
    const [cartesianPosition, setCartesianPosition] = useState(() => {return {x: 0, y: 25}});
    const [dir, setDir] = useState(() => {return 0});
    

    const directions = {
        w: 0,
        d: 1,
        s: 2,
        a: 3
    }

    const stepSize = 12.5;

    const movementRatio = {
        w: { x: 0, y: -stepSize },
        d: { x: stepSize, y: 0 },
        s: { x: 0, y: stepSize },
        a: { x: -stepSize, y: 0 },
    }

    function move(dir) {
        setDir(dir)
        setCartesianPosition((prev) => ({
            x: prev.x + movementRatio[dir].x > 87.5 || prev.x + movementRatio[dir].x < 0  ? prev.x : prev.x + movementRatio[dir].x,
            y: prev.y + movementRatio[dir].y > 87.5 || prev.y + movementRatio[dir].y < 25 ? prev.y : prev.y + movementRatio[dir].y
        }))
    }

    return {
        cartesianPosition, dir, directions, move
    }
}