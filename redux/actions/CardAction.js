import { v4 } from 'uuid'

import {     
    submitCard,    
    getCardList,
} from '../../utils/api'

export const LOAD_CARDS_LOADING = 'LOAD_CARDS_LOADING'
export const LOAD_CARDS = 'LOAD_CARDS'
export const REMOVE_CARD = 'REMOVE_CARD'
export const ADD_CARD = 'ADD_CARD'

export const loadCardsFromStorage = (deckKey) => {
    return (dispatch, getState) => {
        dispatch({type: LOAD_CARDS_LOADING});
        getCardList(deckKey).then((results) => {   
            dispatch(loadCards(results)); 
        });
    }
}
function loadCards(cards){    
    return {
        type: LOAD_CARDS,
        cards
    }
}


export const addCardToStorage = (card) => {
    console.log('Add esse card:',card)
    return (dispatch, getState) => {
        submitCard( card )
        //dispatch(addCard(card))
    }
}
function addCard(card){ 
    return {
        type: ADD_CARD,
        card
    }
}


