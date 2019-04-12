import { 
    LOAD_ALL_DECKS,
    REMOVE_DECK, 
    ADD_DECK 
} from '../actions/DeckAction'

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
            return {}

        case ADD_DECK:
            return {
                ...state,
                deckList: state.deckList.concat(action.deck)
            }

        default:
            return state
    }

}
