import { v4 } from 'uuid'

export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'


export const loadDecksFromStorage = () => {
    return (dispatch, getState) => {
        dispatch(loadDeckList([{key: v4(), deckName: 'Cálculo'},{key: v4(), deckName: 'Orientação à Objetos'}]))
/*
Buscar da LocalStorage        
       ServerAPI
        .getAllPosts()
        .then(posts => {
            dispatch(loadPosts(posts));
        });
*/
    }
}

function loadDeckList(allDecks){
    return {
        type: LOAD_ALL_DECKS,
        allDecks
    }
}

export function addDeck(deck){
    return {
        type: ADD_DECK,
        deck
    }
}


export const deleteDeckFromStorage = (deckKey) => {
    return (dispatch, getState) => {
        dispatch(removeDeck(deckKey))
        /* Remover da LocalStorage  */
    }
}

function removeDeck(deckKey){
    return {
        type: REMOVE_DECK,
        deckKey
    }
}
