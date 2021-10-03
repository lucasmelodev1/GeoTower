import React from 'react'
import useCollision from '../../hooks/useCollision'
import './index.css'

export default function Sprite({id, cartesianPosition, dir = 3, toggleCollision}) {
    let image = require(`../../img/sprite/${id}_${dir}.svg`)
    const {addCollisionPoint, collisionPoint} = useCollision()

    if (toggleCollision) {
        addCollisionPoint(cartesianPosition)
    }

    return (
        <div className="spriteDiv" style={{
            position: "absolute",
            top: `${cartesianPosition.y}%`,
            left: `${cartesianPosition.x}%`,
            paddingLeft: "0.65%"
        }}>
            <img src={image.default} alt={""} style={{
                height: "9vh",
            }}/>
        </div>
    )
}
