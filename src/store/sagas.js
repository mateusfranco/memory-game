
import { select, put , delay,takeEvery } from 'redux-saga/effects'
import {select_card} from './actions'

function* selectCard(action){
    const {key} = action
    const cards = yield select(state => state.cards)
    const isLocked = yield select(state => state.isLocked)
    
    const index = cards.findIndex(c => c.key === key)
    const otherCard = cards.findIndex(c => 
        c.flipped && !c.hasMatch)

    if(!isLocked && index > -1 && !cards[index].flipped){
        yield put({type: 'open_card', index})
        if(otherCard > -1)
            if(cards[index].id === cards[otherCard].id)
                yield put({type: 'set_match', index1: index, index2: otherCard})
            else{
                yield put({type: 'lock'})
                yield delay(700)
                yield put({
                    type: 'close_cards', index1: index, index2: otherCard
                })
            }

    }
}

function* gameSaga() {
    yield takeEvery(select_card, selectCard)
}

export default gameSaga