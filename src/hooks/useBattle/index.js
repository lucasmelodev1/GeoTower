import { useState } from 'react'

export default function Battle(positionSetStates, player) {

    const [attackIsReady, setAttackIsReady] = useState({value: true});
    const [regenIsReady, setRegenIsReady] = useState({value: true});

    const attackPlayer = (value) => {
        player.changeCurrentHp(-value);
    }

    const attackEnemy = (value, attacked) => {
        attacked.changeCurrentHp(-value)
        attacked.setIsInBattle({value: true});
        setTimeout(() => {attacked.setIsInBattle(false)}, 3000);

        const attackPlayerInterval = setInterval(() => {
            attackPlayer(attacked.attack)
        }, 1400);
        setTimeout(() => {clearInterval(attackPlayerInterval)}, 1500);

        if (attacked.currentHp.value <= 0) {
            attacked.setIsDead({value: true});
            attacked.setIsInBattle({value: false});

            clearInterval(attackPlayerInterval);

            positionSetStates.removeCollisionPoint({refIndex: attacked.refIndex ,...attacked.cartesianPosition});
            positionSetStates.removeBattlePoints({...attacked.points, refIndex: attacked.refIndex});
        }
    }

    const playerRegen = () => {
        player.changeCurrentHp(player.regen)
    }

    return {
        attackEnemy,
        attackIsReady,
        setAttackIsReady,
        regenIsReady,
        setRegenIsReady,
        playerRegen,
    };
}