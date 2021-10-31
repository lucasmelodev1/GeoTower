import { useState } from 'react'

export default function Battle() {

    const [attackIsReady, setAttackIsReady] = useState({value: true})

    const changeCurrentHp = (value, ref, positionSetStates) => {

        ref.changeCurrentHp(value, ref)
        if (value<0) {
            ref.setIsInBattle({value: true});
            setTimeout(() => {ref.setIsInBattle(false)}, 3000);
        }
        if (ref.currentHp <= 0) {
            ref.setIsDead({value: true});
            ref.setIsInBattle({value: false});
            positionSetStates.removeCollisionPoint({refIndex: ref.refIndex ,...ref.cartesianPosition});
            positionSetStates.removeBattlePoints({...ref.points, refIndex: ref.refIndex});
        }
    }

    return {
        changeCurrentHp,
        attackIsReady,
        setAttackIsReady
    };
}