import {     
    submitDeck,    
    getDeckList,
    removeCardsOfDeck,
    removeDeckAPI,
} from '../../utils/api'

export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'


export const loadDecksFromStorage = () => {
    return (dispatch, getState) => {
        getDeckList().then((results) => {    
            dispatch(loadDeckList(results)); 
        });
    }
}
function loadDeckList(allDecks){
    return {
        type: LOAD_ALL_DECKS,
        allDecks
    }
}

export const addDeckToStorage = (deck) => {
    return (dispatch, getState) => {        
        submitDeck( deck )
        dispatch(addDeck(deck))
    }
}
function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}


export const deleteDeckFromStorage = (deckKey) => {
    return (dispatch, getState) => {
        removeCardsOfDeck(deckKey)
        removeDeckAPI(deckKey).then((results) => {
            dispatch(removeDeck(deckKey))    
        })     
    }
}

function removeDeck(deckKey){
    return {
        type: REMOVE_DECK,
        deckKey
    }
}
