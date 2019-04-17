import { 
    LOAD_ALL_DECKS,
    REMOVE_DECK, 
    ADD_DECK,    
} from '../actions/DeckAction'

import {
    ADD_CARD
} from '../actions/CardAction'

const initialPostState = {
    deckList:[],            
 }

 export const deckReducer = (state = initialPostState, action) => {

    switch(action.type){
        case LOAD_ALL_DECKS:
            return {
                deckList: action.allDecks
            }

        case REMOVE_DECK:
            return {
                ...state,
                deckList: state.deckList.filter(deck => deck.key !== action.deckKey)                
            }

        case ADD_DECK:
            return {
                ...state,
                deckList: state.deckList.concat(action.deck)
            }

        case ADD_CARD:            
            return { 
                ...state,
                deckList: state.deckList.map(deck => {
                    if(deck.key === action.card.parent){
                        deck.qtdCards = deck.qtdCards + 1
                    }
                    return deck
                })                
            }
        default:
            return state
    }

}
