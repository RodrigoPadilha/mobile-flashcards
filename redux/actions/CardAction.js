import { v4 } from 'uuid'

export const LOAD_CARDS = 'LOAD_CARDS'
export const REMOVE_CARD = 'REMOVE_CARD'
export const ADD_CARD = 'ADD_CARD'

export const loadCardsFromStorage = (deckKey) => {
    return (dispatch, getState) => {
        dispatch(
            loadCards([
                {key:v4(),question:'Quem Descobriu o Brasil'},
                {key:v4(),question:'O resultado de 4x4 é:'}
            ])
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
