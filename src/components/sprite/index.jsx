import React from 'react'

import './index.css'

export default function Sprite({id, cartesianPosition, dir = 3, toggleCollision}) {
    let image = require(`../../img/sprite/${id}_${dir}.svg`)

    return (
        <div className="spriteDiv" style={{
            position: "absolute",
            bottom: `${cartesianPosition.y}%`,
            left: `${cartesianPosition.x}%`,
            paddingLeft: "0.65%"
        }}>
            <img src={image.default} alt={""} style={{
                height: "9vh",
            }}/>
        </div>
    )
}
