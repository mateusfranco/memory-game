import ListBuilder from '../builders/List'

import {lock,
    close_cards,
    set_match,
    open_card,
    } from './actions'


const initialState = {
    isLocked: false,
    cards: new ListBuilder().createList(10).shuffle().build()
}

const GameReducer = (state=initialState, action) => {
    switch(action.type) {
        case lock:{
            return{
            ...state,
            isLocked: true
            }
        }
        case close_cards:{
            const cards = state.cards.slice() 
            cards[action.index1].flipped = false
            cards[action.index2].flipped = false
            
            return {
                ...state,
                isLocked: false,
                cards
            }
        }

        case set_match:{
            const cards = state.cards.slice() 
            cards[action.index1].hasMatch = true
            cards[action.index2].hasMatch = true
            return {
                ...state,
                cards
            }
        }

        case open_card:{
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

export default GameReducer