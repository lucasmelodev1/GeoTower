import React, { useEffect } from 'react'
import Sprite from '../sprite'
import useAddCollision from '../../hooks/useAddCollision'

export default function Enemy({spriteId, cartesianPosition}) {

    useAddCollision(cartesianPosition)

    return <Sprite id={spriteId} cartesianPosition={cartesianPosition}/>
}
