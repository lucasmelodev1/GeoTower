import { useEffect } from "react"

export const collisionPoints = []

export default function useAddCollision(cartesianPosition) {

    useEffect(() => {
        collisionPoints.push(cartesianPosition)
        console.log(collisionPoints)
    }, [])
}