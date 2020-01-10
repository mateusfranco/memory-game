import ListBuilder from '../builders/List'

import {lock,
    close_cards,
    set_match,
    open_card,
    close_victory,
    start_game,
    } from './actions'


const initialState = {
    isLocked: false,
    victoryDialogOpen: false,
    cards: new ListBuilder().createList(3).shuffle().build()
}

const GameReducer = (state=initialState, action) => {
    switch(action.type) {
        case start_game:{
            return{
                ...state,
                victoryDialogOpen: false,
                cards: new ListBuilder().createList(10).shuffle().build(),
            } 
        }
        
        case close_victory:{
            return{
                ...state,
                victoryDialogOpen: false,
            }
        }
        
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
            let victoryDialogOpen = false

            cards[action.index1].hasMatch = true
            cards[action.index2].hasMatch = true
            
            if(cards.every(c => c.hasMatch)) 
                victoryDialogOpen = true

            return {
                ...state,
                victoryDialogOpen,
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