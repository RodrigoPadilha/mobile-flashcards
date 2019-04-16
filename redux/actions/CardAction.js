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
        dispatch(
            loadCards(getCardList())
            /*
            loadCards([
                {key:v4(),parent: 'blabla', question:'Quem Descobriu o Brasil'},
                {key:v4(),parent: 'blabla',question:'O resultado de 4x4 é:'}
            ])
            */
        )
        
    /*
    Buscar da LocalStorage               
    */
   
    }
}

function loadCards(cards){    
    return {
        type: LOAD_CARDS,
        cards
    }
}


export const addCardToStorage = (card) => {
    console.log('addCardToStorage', card)
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


