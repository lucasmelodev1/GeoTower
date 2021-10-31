export default function battle() {

    const changeCurrentHp = (value, ref, positionSetStates) => {

        ref.changeCurrentHp(value, ref)
        if (value<0) {
            ref.setIsInBattle({value: true});
            setTimeout(() => {ref.setIsInBattle(false)},3000);
        }
        if (ref.currentHp <= 0) {
            ref.setIsDead({value: true});
            ref.setIsInBattle({value: false});
            positionSetStates.removeCollisionPoint({refIndex: ref.refIndex ,...ref.cartesianPosition});
            positionSetStates.removeBattlePoints({...ref.points, refIndex: ref.refIndex});
        }
    }

    return {changeCurrentHp};
}