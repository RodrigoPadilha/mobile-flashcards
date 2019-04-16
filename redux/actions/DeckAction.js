import {     
    submitDeck,    
    getDeckList,
} from '../../utils/api'

export const LOAD_ALL_DECKS = 'LOAD_ALL_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const REMOVE_DECK = 'REMOVE_DECK'


export const loadDecksFromStorage = () => {
    return (dispatch, getState) => {
       
        getDeckList().then((results) => {   
            console.log('results',results)
            dispatch(loadDeckList(results)); 
        });

        /*
        dispatch(loadDeckList([
            {key: '54a1a386-976d-4964-94d9-6f670423e455', deckName: 'Cálculo'},
            {key: '2dec567e-e158-45db-84eb-6978466ea68f', deckName: 'Orientação à Objetos'}
        ]))
        */

        /*
        Buscar da Decks do LocalStorage               
        getDeckList().then((results) => {   
            dispatch(loadDeckList(results)); 
        });
        */
    }
}
function loadDeckList(allDecks){
    console.log('allDecks ',allDecks)
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
