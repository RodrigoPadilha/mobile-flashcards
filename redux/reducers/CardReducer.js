import { 
    LOAD_CARDS_LOADING,
    LOAD_CARDS,
    REMOVE_CARD, 
    ADD_CARD 
} from '../actions/CardAction'

const initialPostState = {
    cardList:[],       
    loading: true, 
 }

export const cardReducer = (state = initialPostState, action) => {
    switch(action.type){       

        case LOAD_CARDS_LOADING:
            return initialPostState;

        case LOAD_CARDS:
            return { 
                cardList: action.cards, 
                loading: false 
            }

        case ADD_CARD:
            return {
                ...state,
                cardList: state.cardList.concat(action.card)
            }

        case REMOVE_CARD:
            return {}

        default:
            return state
    }

}
