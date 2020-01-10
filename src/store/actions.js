export const lock = 'lock'
export const close_cards = 'close_cards'
export const set_match = 'set_match'
export const open_card = 'open_card'
export const select_card = 'select_card'

export const selectCard = key => ({
    type: select_card,
    key
})
