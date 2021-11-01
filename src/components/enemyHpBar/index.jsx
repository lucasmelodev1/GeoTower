import React from 'react'

export default function EnemyHpBar({enemyPosition, currentHp, maxHp}) {
    const fullWidth = 26;
    const width = 16
    const lifePercent = currentHp / maxHp;
    const pixelFill = fullWidth * lifePercent

    return (
        <div style={{
            position: 'absolute',
            bottom: `${enemyPosition.y + 12.5}%`,
            left: `${enemyPosition.x}%`,
            imageRendering: 'pixelated',
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" width={`${width}vh`} viewBox="0 -0.5 32 16" shapeRendering="crispEdges">
                <path stroke="#595652" d="M1 0h11M0 1h2M11 1h2M0 2h1M12 2h1M0 3h1M12 3h1M0 4h1M12 4h1M0 5h1M12 5h1M0 6h1M12 6h2M0 7h1M13 7h18M0 8h1M30 8h2M0 9h1M3 9h26M31 9h1M0 10h1M2 10h2M28 10h2M31 10h1M0 11h1M2 11h2M28 11h2M31 11h1M0 12h1M2 12h2M28 12h2M31 12h1M0 13h1M3 13h26M31 13h1M0 14h2M30 14h2M1 15h30" />
                <path stroke="#a6a6a6" d="M2 1h1M1 2h1M1 3h1M1 4h1M1 5h1M1 6h1M1 7h1M1 8h1M1 9h1M1 10h1M1 11h1M1 12h1M1 13h2M2 14h2" />
                <path stroke="#d9d9d9" d="M3 1h6M2 2h8M2 3h1M4 3h1M6 3h1M9 3h1M2 4h1M4 4h1M6 4h1M8 4h1M2 5h1M6 5h1M9 5h1M2 6h1M4 6h1M6 6h1M8 6h2M2 7h9M3 8h9M4 14h25" />
                <path stroke="#e6e6e6" d="M9 1h1M10 2h1M10 3h1M10 4h1M10 5h1M10 6h1M11 7h1M12 8h1" />
                <path stroke="#ffffff" d="M10 1h1M11 2h1M11 3h1M11 4h1M11 5h1M11 6h1M12 7h1M13 8h17M29 9h2M30 10h1M30 11h1M30 12h1M29 13h2M29 14h1" />
                <path stroke="#000000" d="M3 3h1M5 3h1M7 3h2M3 4h1M5 4h1M7 4h1M9 4h1M3 5h3M7 5h2M3 6h1M5 6h1M7 6h1" />
                <path stroke="#c3c3c3" d="M2 8h1M2 9h1" />
                <path stroke="#333333" d="M4 10h24" />
                <path stroke="#4d4d4d" d="M4 11h24M4 12h24" />

                <rect fill='#eb4034' x={4} y={10.5} height={2} width={pixelFill}></rect>
                <rect fill='#c73228' x={4} y={9.5} height={1} width={pixelFill}></rect>
            </svg>
        </div>
    )
}
