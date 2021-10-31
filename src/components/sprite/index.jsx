import React from 'react';
import './index.css';

const Sprite = ({id, cartesianPosition, dir = 3}) => {
    let image = require(`../../img/sprite/${id}_${dir}.svg`);
    
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
    );
}

export default Sprite;