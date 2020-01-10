export const lock = 'lock'
export const close_cards = 'close_cards'
export const set_match = 'set_match'
export const open_card = 'open_card'
export const select_card = 'select_card'
export const close_victory = 'close_victory'
export const start_game = 'start_game'


export const selectCard = key => ({
    type: select_card,
    key
})

export const closeVictory = () => ({
    type: close_victory
})

export const startGame = () => ({
    type: start_game
})