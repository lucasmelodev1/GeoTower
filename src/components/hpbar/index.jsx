import React from 'react'

export default function HpBar({currentHp, maxHp}) {
    const fullWidth = 26;

    const lifePercent = currentHp / maxHp;
    const pixelFill = Math.floor(fullWidth * lifePercent)

    return (
        <div style={{
            position: 'absolute',
            top: '32px',
            left: '32px',
            imageRendering: 'pixelated'
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" height={'4.2vh'} viewBox="0 -0.5 32 8" shapeRendering="crispEdges">
                <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
                <path stroke="#595652" d="M1 0h30M0 1h2M30 1h2M0 2h1M31 2h1M0 3h1M31 3h1M0 4h1M31 4h1M0 5h1M31 5h1M0 6h2M30 6h2M1 7h30" />
                <path stroke="#f2f2f2" d="M2 1h27M2 2h1M29 2h1M2 3h1M29 3h1M2 4h1M29 4h1M2 5h1M29 5h1M3 6h27" />
                <path stroke="#ffffff" d="M29 1h1M30 2h1M30 3h1M30 4h1M30 5h1" />
                <path stroke="#d6d6d6" d="M1 2h1M1 3h1M1 4h1M1 5h1M2 6h1" />
                <path stroke="#333333" d="M3 2h26M3 3h26" />
                <path stroke="#4d4d4d" d="M3 4h26M3 5h26" />

                <rect fill="#34a8eb" x={3} y={3.5} width={pixelFill} height={2}></rect>
                <rect fill="#3d9cd4" x={3} y={1.5} width={pixelFill} height={2}></rect>
            </svg>
        </div>
    )
}
