import { useState } from "react"
import isEqual from "../../functions/isEqual";
import arrayEquals from "../../functions/arrayEquals";

export default function usePositionTracker() {
    const [collisionPoints, setCollisionPoints] = useState({points: []});
    const [battlePoints, setBattlePoints] = useState({points: []});

    const addCollisionPoint = (collisionPoint) => {
        setCollisionPoints((prev) => ({points: [...prev.points, collisionPoint]}));
    }

    const removeCollisionPoint = (collisionPoint) => {
        const index = collisionPoints.points.findIndex(e => isEqual(e, collisionPoint));
        if (index !== -1) {
            setCollisionPoints((prev) => prev.points.filter((_, filterIndex) => filterIndex !== index))
        }
    }

    const addBattlePoints = (battlePointsObj) => {
        setBattlePoints((prev) => ({points: [...prev.points, battlePointsObj]}));
    }

    const removeBattlePoints = (battlePointsArray) => {
        const index = battlePoints.points.findIndex(e => arrayEquals(Object.values(e), Object.values(battlePointsArray)));
        setBattlePoints({points: battlePoints.points.filter((_, filterIndex) => filterIndex !== index)})
    }

    return {
        collisionPoints,
        addCollisionPoint,
        removeCollisionPoint,
        battlePoints,
        addBattlePoints,
        removeBattlePoints,
        setCollisionPoints
    }
}