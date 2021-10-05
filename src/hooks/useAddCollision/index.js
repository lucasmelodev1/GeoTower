import { useEffect } from "react"
import { collisionPoints } from "../../components/map"

export default function useAddCollision(cartesianPosition) {

    useEffect(() => {
        collisionPoints.push(cartesianPosition)
        console.log(collisionPoints)
    }, [])
}