export default function battle() {

    const changeCurrentHp = (value, ref, positionSetStates) => {
        ref.changeCurrentHp(value, ref)
        if (value<0) {
            ref.setIsInBattle(true);
            //setTimeout(setBattleOff,3000);
        }
        if (ref.currentHp <= 0) {
            ref.setIsDead(true);
            ref.setIsInBattle(false);
            positionSetStates.removeCollisionPoint(ref.cartesianPosition);
            positionSetStates.removeBattlePoints({...ref.points, refIndex: ref.refIndex});
        }
        debugger
    }

    return {changeCurrentHp};
}