import { useState } from "react";

export default function useCollision(addOrRemove, coordinates) {
    const [collisionPoint, setCollisionPoint] = useState(()=>{return []})

    function addCollisionPoint(cartesianPosition) {
        setCollisionPoint((prev) => {prev.push({x: cartesianPosition.x, y: cartesianPosition.y})})
    }

    function removeCollisionPoint(cartesianPosition) {
        setCollisionPoint((prev) => {
            const index = prev.indexOf({x: cartesianPosition.x, y: cartesianPosition.y})
            if (index > -1) {
                prev.splice(index, 1);
              }
        })
    }

    return {
        addCollisionPoint,
        removeCollisionPoint,
        collisionPoint
    }
}