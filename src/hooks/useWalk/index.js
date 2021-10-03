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
            x: (prev.x !== 0 && dir === "a") || (prev.x !== 87.5 && dir === "d") ? prev.x + movementRatio[dir].x : prev.x,
            y: (prev.y !== 25 && dir === "w") || (prev.y !== 87.5 && dir === "s") ? prev.y + movementRatio[dir].y : prev.y
        }))
    }

    return {
        cartesianPosition, dir, directions, move
    }
}