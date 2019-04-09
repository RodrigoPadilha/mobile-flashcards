export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'

export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}

export function removeDeck(keyDeck){
    return {
        type: ADD_DECK,
        keyDeck
    }
}
