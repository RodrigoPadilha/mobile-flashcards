export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'


export const loadDecksFromStorage = () => {
    return (dispatch, getState) => {
        dispatch(loadDeckList([{key: 'Cálculo'},{key: 'Orientação à Objetos'}]))
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

export function removeDeck(keyDeck){
    return {
        type: REMOVE_DECK,
        keyDeck
    }
}
