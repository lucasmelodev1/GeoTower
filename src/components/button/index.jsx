import React from 'react'
import './index.css'

export default function Button({backgroundImageId, text, font, fn, size}) {
    let image = require(`../../img/buttons/${backgroundImageId}_key.svg`).default
    return (
        <div style={{
            margin: "0px 2px"
        }}>
            <img className="button" onClick={() => {
                if (typeof fn === 'function') {
                    fn()
                }
            }} src={image} style={{
                gridRowStart: 3,
                height: `8vh`,
            }} alt={""}></img>
        </div>
    )
}
