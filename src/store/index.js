import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { select, put , delay,takeEvery } from 'redux-saga/effects'
import createSagaMiddleware  from 'redux-saga'

const initialState = {
    isLocked: false,
    cards: [
        {id: 1, key: 1, name: 'carta 1', flipped: false, hasMatch: false,},
        {id: 2, key: 2, name: 'carta 2', flipped: false, hasMatch: false,},
        {id: 3, key: 3, name: 'carta 3', flipped: false, hasMatch: false,},
        {id: 1, key: 4, name: 'carta 1', flipped: false, hasMatch: false,},
        {id: 2, key: 5, name: 'carta 2', flipped: false, hasMatch: false,},
        {id: 3, key: 6, name: 'carta 3', flipped: false, hasMatch: false,}
    ]
}

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
    yield takeEvery('select_card', selectCard)
}

const GameReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'lock':{
            return{
            ...state,
            isLocked: true
            }
        }
        case 'close_cards':{
            const cards = state.cards.slice() 
            cards[action.index1].flipped = false
            cards[action.index2].flipped = false
            
            return {
                ...state,
                isLocked: false,
                cards
            }
        }

        case 'set_match':{
            const cards = state.cards.slice() 
            cards[action.index1].hasMatch = true
            cards[action.index2].hasMatch = true
            return {
                ...state,
                cards
            }
        }

        case 'open_card':{
            const cards = state.cards.slice() 
            cards[action.index].flipped = true
            return {
                ...state,
                cards
            }
        }
        default:
            return state
    }    
}

const SagaMiddleware = createSagaMiddleware()

const store = createStore(GameReducer, composeWithDevTools(applyMiddleware(SagaMiddleware)))

SagaMiddleware.run(gameSaga)
export default store 